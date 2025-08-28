const NOTION_TOKEN = "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";

async function getAllPages() {
  const response = await fetch("https://api.notion.com/v1/search", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filter: { property: "object", value: "page" },
    }),
  });

  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
}

getAllPages();
