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
    </div>
  );
}
