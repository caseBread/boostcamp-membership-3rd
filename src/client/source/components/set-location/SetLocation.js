import TopBar from "../top-bar/TopBar";
import "./SetLocation.scss";
import XMarkImg from "../../image/x-mark.svg";
import { useEffect, useState } from "react";
function SetLocation() {
  const [btnActive1, setBtnActive1] = useState(false);
  const [btnActive2, setBtnActive2] = useState(false);

  function toggle1() {
    setBtnActive1((active) => !active);
  }

  function toggle2() {
    setBtnActive2((active) => !active);
  }

  return (
    <div className="set-location">
      <TopBar title="내 동네 설정하기" />
      <div className="main">
        <span className="notice">
          지역은 최소 1개 이상
          <br />
          최대 2개까지 설정 가능해요.
        </span>
        <span className="buttons">
          <button
            className={`address-btn ${btnActive1 ? "active" : ""}`}
            onClick={toggle1}
          >
            <span className="address-text">양재동</span>
            <img className="x-mark" src={XMarkImg} alt="" />
          </button>
          <button
            className={`address-btn ${btnActive2 ? "active" : ""}`}
            onClick={toggle2}
          >
            <span className="address-text">역삼동</span>
            <img className="x-mark" src={XMarkImg} alt="" />
          </button>
        </span>
      </div>
    </div>
  );
}

export default SetLocation;
