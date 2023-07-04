import React from "react";
import detail from "../css/Detail.module.scss";

export default function Detail() {
  return (
    <div className={detail["main"]}>
      <h3> 사용가능 기능들</h3>
      <div className={detail['available']}>
        <span>HTML</span>
        <span>HTML</span>
        <span>HTML</span>
        <span>HTML</span>
        <span>HTML</span>
        <span>HTML</span>
        <span>HTML</span>
        <span>HTML</span>
      </div>
    </div>
  );
}
