import React from 'react'
import Project from '../components/Project'
import Introduce from '../components/Introduce'
import Detail from '../components/Detail'
export default function Main() {
  return (
    <div id="top">
        <Introduce/>
        <Detail/>
        <Project/>
    </div>
  )
}
