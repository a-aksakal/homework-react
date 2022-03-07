import "./App.css";
import { Route, Routes } from "react-router-dom";
import BackgroundColor from "./backgroundcolor/BackgroundColor";
function App() {
  return (
    <Routes>
      <Route path="/backgroundcolor" element={<BackgroundColor />}></Route>
    </Routes>
  );
}

export default App;
