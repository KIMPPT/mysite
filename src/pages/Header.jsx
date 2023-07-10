import React, { useEffect, useState } from "react";
import header from "../css/Header.module.scss";
import { Link } from "react-scroll";
export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <div className={header[scrollPosition < 25 ? 'box':'box2']}>
      <div className={header["main"]}>
        <Link to="introduce" spy={true} smooth={true}>
          자기소개
        </Link>
        <Link to="detail" spy={true} smooth={true}>
          상세내용
        </Link>
        <Link to="project" spy={true} smooth={true}>
          프로젝트
        </Link>
      </div>
      <div className={header[scrollPosition < 25 ? 'top':'top2']}>
        top
      </div>
    </div>
  );
}
