import React from "react";
import project from "../css/Project.module.scss";
export default function Project() {
  return (
    <div className={project["main"]} id="project">
      <h1>만든 프로젝트들</h1>
      <ul>
        <li>
          개인 프로젝트 : &nbsp;
          <a href="https://kimppt.github.io/Project/" target="_blank">
            공장에서 만든 물품을 파는 사이트
          </a>
        </li>
        <li>
          단체 프로젝트 :&nbsp;
          <a
            href="https://team-project-green-d.github.io/project-bokka/"
            target="_blank"
          >
            모임을 관리하는 사이트
          </a>
        </li>
      </ul>
      <h3>기타 페이지</h3>
      <a href="https://github.com/KIMPPT" target="_blank">github페이지</a>
      <br />
      <a href="https://kimsppt.com"target="_blank">wordpress사이트</a>
    </div>
  );
}
