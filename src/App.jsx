import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import UserMenu from "./pages/UserMenu";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/userMenu" element={<UserMenu />} />
      </Routes>
    </BrowserRouter>
  );
}
