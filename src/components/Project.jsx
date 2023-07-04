import React from 'react'
import project from '../css/Project.module.scss'
export default function Project() {
  return (
    <div className={project['main']}>
      <h1>만든 프로젝트들</h1>
      <ul>
      <li>개인 프로젝트 : 공장에서 만든 물품을 파는 사이트</li>
      <li>단체 프로젝트 : 모임을 관리하는 사이트</li>
      </ul>
    </div>
  )
}
