import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainTopBar from "./top-bar/main-top-bar";
import "./App.scss";
import Category from "./category/Category";
import Menu from "./menu/Menu";
import SetLocation from "./set-location/SetLocation";
import Login from "./login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainTopBar />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/set-location" element={<SetLocation />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
