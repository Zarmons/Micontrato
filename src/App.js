import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Questions from "./components/Questions";
import Menu from "./components/Menu";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Menu></Menu>
        <Routes>
          <Route exact path="Micontrato/" element={<Home />}></Route>
          <Route path="Micontrato/usuarios" element={<Users />}></Route>
          <Route path="Micontrato/preguntas" element={<Questions />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
