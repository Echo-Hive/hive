import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// console.log(GOOGLE_CLIENT_ID);

function Google() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <GoogleButton />
    </GoogleOAuthProvider>
  );
}
export default Google;

function GoogleButton() {
  async function handleResponse(response) {
    if (response && response.code) {
      try {
        await googleAuthHandler(response.code);
      } catch (err) {
        console.log(err);
      }
    }
  }
  const googleLogin = useGoogleLogin({
    onSuccess: handleResponse,
    onError: handleResponse,
    flow: "auth-code",
    scope:
      "https://www.googleapis.com/auth/documents.readonly https://www.googleapis.com/auth/documents",
  });
  return (
    <div className="w-screen h-screen bg-amber-100 flex items-center justify-center">
      <span
        className="text-2xl font-bold px-4 py-2 bg-pink-500 text-white cursor-pointer hover:bg-pink-600"
        onClick={googleLogin}
      >
        Google
      </span>
    </div>
  );
}

async function googleAuthHandler(code) {
  alert(code);
  await axios.post(
    `${VITE_BACKEND_URL}/auth/google`,
    {
      code,
    },
    {
      withCredentials: true,
    }
  );
}
