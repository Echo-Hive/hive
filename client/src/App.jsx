import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Callback from "./pages/Callback";
import Google from "./pages/auth/Google";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oauth/callback" element={<Callback />} />
        <Route path="/google" element={<Google />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<div>NOT FOUND: 404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
