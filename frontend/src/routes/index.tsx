import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../components/home";
import Contact from "../components/contact";
import { useEffect } from "react";
import Team from "../components/team";

export default function AppRoutes(): JSX.Element {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
}
