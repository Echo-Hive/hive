import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/docs/Privacy";
import Terms from "./pages/docs/Terms";
import AuthPage from "./pages/auth/AuthPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<div>NOT FOUND: 404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
