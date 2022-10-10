import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import MainTopBar from "./top-bar/main-top-bar";
import "./App.scss";
import Category from "./category/Category";
import Menu from "./menu/Menu";
import SetLocation from "./set-location/SetLocation";
import Main from "./Main";
import User from "./user/User";
import Post from "./post/Post";
import Chat from "./menu/chat/Chat";
import Content from "./content/Content";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/set-location" element={<SetLocation />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/menu/chat" element={<Chat />}></Route> {/* 임시 route */}
        <Route path="/content" element={<Content />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
