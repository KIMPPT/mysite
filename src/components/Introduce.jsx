import React from "react";
import intro from "../css/Introduce.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
export default function Introduce() {
  return (
    <div className={intro["main"]} id="introduce">
      <h1>자기소개</h1>
      <div className={intro["context"]}>
        <img src="" alt="증명사진자리입니다" className={intro["image"]} />
        <ul className={intro["profile"]}>
          <li>이름 : 김영환</li>
          <li>경력 : 신입</li>
          <li>
            사용가능기능 : <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faReact} />
            &uml;
          </li>
        </ul>
      </div>
    </div>
  );
}
