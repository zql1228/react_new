import React from 'react'
import {useLocation}  from 'react-router-dom'
export default function Detail() {
   const {state:{id,title,message}}=useLocation()
  return (
    <ul>
        <li>消息编号：{id}</li>
        <li>消息标题：{title}</li>
        <li>消息详情：{message}</li>
    </ul>
  )
}
