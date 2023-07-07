import React from "react";
import detail from "../css/Detail.module.scss";

export default function Detail() {
  return (
    <div className={detail["main"]} id="detail">
      <h3> 사용가능 기능들</h3>
      <div className={detail['available']}>
        <span>사용가능기능</span>
        <span>내용</span>
        <span>사용가능기능</span>
        <span>내용</span>
        <span>HTML</span>
        <span>용도에 맞는 태그 사용 가능</span>
        <span>CSS</span>
        <span>조건에 따르 CSS 사용 가능</span>
        <span>Javascript</span>
        <span>조건문 사용가능</span>
        <span>React</span>
        <span>HOOK을 이용한 라이프 사이클 사용가능</span>        
        <span>Redux</span>
        <span>Store,Action함수,Reducer를 사용가능</span>        
        <span>Typescript</span>
        <span>타입 지정해서 쓰기 가능</span>        
        <span>Photoshop</span>
        <span>레이어를 나누어 작업 가능</span>        
        <span>C++</span>
        <span>1차원 배열까지 가능</span>
        <span>R</span>
        <span>기본적인 행렬 가능</span>
        <span>OA</span>
        <span>한글(워드),엑셀,파워포인트 기본기능 사용가능</span>
      </div>
    </div>
  );
}
