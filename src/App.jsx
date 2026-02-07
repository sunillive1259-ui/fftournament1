import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Match from "./pages/Match";
import Wallet from "./pages/Wallet";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Settings from "./pages/Settings";
import Notice from "./pages/Notice";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Match />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
