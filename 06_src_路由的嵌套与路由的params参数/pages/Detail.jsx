import React from 'react'
import { useParams ,useMatch}  from 'react-router-dom'
export default function Detail() {
    const {id,title,message}=useParams()
    const x=useMatch('/home/message/detail/:id/:title/:message')
    console.log(x);
  return (
    <ul>
        <li>消息编号：{id}</li>
        <li>消息标题：{title}</li>
        <li>消息详情：{message}</li>
    </ul>
  )
}
