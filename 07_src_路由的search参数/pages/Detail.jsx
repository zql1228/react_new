import React from 'react'
import {useSearchParams,useLocation}  from 'react-router-dom'
export default function Detail() {
    const [search,setSearch]=useSearchParams()
    const id=search.get('id')
    const title=search.get('title')
    const message=search.get('message')
    const x=useLocation()
    console.log(x);
  return (
    <ul>
      <li>
        <button onClick={()=>setSearch('id=008&title=哈哈&message=嘻嘻')}>点我更新一下收到的数据</button>
        </li>
        <li>消息编号：{id}</li>
        <li>消息标题：{title}</li>
        <li>消息详情：{message}</li>
    </ul>
  )
}
