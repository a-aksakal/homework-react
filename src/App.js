import "./App.css";
import { Route, Routes } from "react-router-dom";
import BackgroundColor from "./backgroundcolor/BackgroundColor";
import NavBar from "./NavBar/NavBar";
function App() {
  return (
    <Routes>
      <Route path="/backgroundcolor" element={<BackgroundColor />}></Route>
      <Route path="/navbar" element={<NavBar />}></Route>
    </Routes>
  );
}

export default App;
