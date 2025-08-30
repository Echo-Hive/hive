// import fetch from "node-fetch";

const NOTION_TOKEN = "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"; // replace with user's token

// Fetch all pages the integration has access to
async function getAllPages(token) {
  let results = [];
  let cursor = undefined;

  do {
    const res = await fetch("https://api.notion.com/v1/search", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: { property: "object", value: "page" },
        start_cursor: cursor,
      }),
    });

    const data = await res.json();
    results = results.concat(data.results);
    cursor = data.next_cursor;
  } while (cursor);

  return results.map((p) => p.id);
}

// Recursively fetch all block text of a page
async function getAllText(blockId, token) {
  let textContent = [];
  let cursor = undefined;

  do {
    const res = await fetch(
      `https://api.notion.com/v1/blocks/${blockId}/children?page_size=100${
        cursor ? "&start_cursor=" + cursor : ""
      }`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Notion-Version": "2022-06-28",
        },
      }
    );

    const data = await res.json();

    for (const block of data.results) {
      // Extract text if block has rich_text
      if (block[block.type]?.rich_text) {
        const text = block[block.type].rich_text
          .map((rt) => rt.plain_text)
          .join(" ");
        if (text.trim().length > 0) textContent.push(text);
      }
      // If block has children, recurse
      if (block.has_children) {
        const childText = await getAllText(block.id, token);
        if (childText) textContent.push(childText);
      }
    }

    cursor = data.next_cursor;
  } while (cursor);

  return textContent.join("\n");
}

// Main: fetch all pages and extract text
async function run() {
  try {
    console.log("Fetching pages...");
    const pages = await getAllPages(NOTION_TOKEN);

    for (const pageId of pages) {
      console.log("\n=================================");
      console.log("PAGE:", pageId);
      console.log("=================================\n");

      const text = await getAllText(pageId, NOTION_TOKEN);
      console.log(text || "(No text found)");
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
}

run();
