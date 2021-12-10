import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Questions from "./components/Questions";
import Menu from "./components/Menu";
// import Fondo from "./assets/img/header_colombia_01.jpg";

export default function App() {
  return (
    <Router>
      <div className="App">
        {/* <img src={Fondo}></img> */}
        <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/usuarios" element={<Users />}></Route>
          <Route path="/preguntas" element={<Questions />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
