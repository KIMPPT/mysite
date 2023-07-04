import React from "react";
import intro from "../css/Introduce.module.scss";
export default function Introduce() {
  return (
    <div className={intro['main']}>
      <h1>자기소개</h1>
      <div className={intro["context"]}>
        <img src="" alt="증명사진자리입니다" className={intro["image"]} />
        <ul>
          <li>이름</li>
          <li>생년월일</li>
          <li>경력 : 신입</li>
        </ul>
      </div>
    </div>
  );
}
