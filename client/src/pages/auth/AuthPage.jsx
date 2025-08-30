import Google from "./Google";
import Notion from "./Notion";

function AuthPage() {
  return (
    <div className="w-screen h-screen bg-amber-100 flex items-center justify-center gap-4">
      <Google />
      <Notion />
    </div>
  );
}

export default AuthPage;
