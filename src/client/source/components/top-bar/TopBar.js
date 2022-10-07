import "./TopBar.scss";
import leftArrowImg from "../../image/left-arrow.svg";
import checkImg from "../../image/check.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function TopBar(props) {
  const navigate = useNavigate();
  const pageName = props.title;
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(pageName);
  }, []);
  return (
    <div className="bar-background">
      <span className="arrow" onClick={() => navigate(-1)}>
        <img src={leftArrowImg} alt=""></img>
      </span>
      <span className="title">{title}</span>
      <button
        type="submit"
        className="temp"
        style={{ visibility: props.check ? "visible" : "hidden" }}
      >
        <img src={checkImg} alt=""></img>
      </button>
    </div>
  );
}

export default TopBar;
