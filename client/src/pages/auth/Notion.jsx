import axios from "axios";
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function Notion() {
  return (
    <>
      <a
        className="text-2xl font-bold px-4 py-2 bg-pink-500 text-white cursor-pointer hover:bg-pink-600"
        href="https://api.notion.com/v1/oauth/authorize?owner=user&client_id=25ed872b-594c-8048-9783-00374e9e6b4f&response_type=code&redirect_uri=https%3A%2F%2Fburns-llc-pas-lightbox.trycloudflare.com%2Fauth%2Fnotion%2Fcallback"
      >
        Notion
      </a>{" "}
      {/* <span
        className="text-2xl font-bold px-4 py-2 bg-pink-500 text-white cursor-pointer hover:bg-pink-600"
        onClick={() => handleResponse("035fd58d-cb76-4c5b-95d3-8616fa122ba6")}
      >
        Notion
      </span> */}
    </>
  );
}
// code = 035fd58d-cb76-4c5b-95d3-8616fa122ba6
export default Notion;

async function handleResponse(code) {
  try {
    // Exchange code for token
    await axios.post(
      `${VITE_BACKEND_URL}/auth/notion/callback`,
      { code },
      { withCredentials: true }
    );
  } catch (err) {
    console.log(err);
  }
}
