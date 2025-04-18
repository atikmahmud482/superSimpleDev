import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favorite from "./pages/Favorites";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/favorite" element={<Favorite></Favorite>}></Route>
      </Routes>
    </main>
  );
}

export default App;
