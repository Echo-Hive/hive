import axios from "axios";
//Handeler function
function extractTextFromContent(content) {
  let text = "";
  content.forEach((element) => {
    if (element.paragraph && element.paragraph.elements) {
      element.paragraph.elements.forEach((el) => {
        if (el.textRun && el.textRun.content) {
          text += el.textRun.content;
        }
      });
    }
  });
  return text;
}

export const getAllDocsWithContent = async (accessToken) => {
  // 1. Get all Google Docs metadata from Drive
  const docsResponse = await axios.get(
    "https://www.googleapis.com/drive/v3/files",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: "mimeType='application/vnd.google-apps.document'",
        fields: "files(id, name, createdTime, modifiedTime, webViewLink)",
      },
    }
  );
  const docs = docsResponse.data.files;

  // 2. For each doc, fetch the text content from Docs API
  const results = [];
  for (const doc of docs) {
    const docResponse = await axios.get(
      `https://docs.googleapis.com/v1/documents/${doc.id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // Extract text from the structured Docs API response
    const content = extractTextFromContent(docResponse.data.body.content);

    results.push({
      id: doc.id,
      name: doc.name,
      createdTime: doc.createdTime,
      modifiedTime: doc.modifiedTime,
      webViewLink: doc.webViewLink,
      text: content,
    });
  }
  return results;
};
