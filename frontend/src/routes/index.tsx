import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "../components/home";
import Contact from "../components/contact";
import { useEffect } from "react";
import Team from "../components/team";
import Auth from "../components/auth";
import Articles from "../components/articles";
import CreateBlog from "../components/createArticle";

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
        <Route path="/auth" element={<Auth />} />
        <Route path="/createArticle" element={<CreateBlog />} />
        <Route path="/blogs" element={<Articles />} />
      </Routes>
  );
}
