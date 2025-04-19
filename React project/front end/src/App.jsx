import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favorite from "./pages/Favorites";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/favorite" element={<Favorite></Favorite>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
