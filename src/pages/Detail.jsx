import React from 'react'
import {useSearchParams}  from 'react-router-dom'
export default function Detail() {
    const {search,setSearch}=useSearchParams()
    const id=search.get('id')
    const title=search.get('title')
    const message=search.get('message')
  return (
    <ul>
      <li><button onClick={()=>setSearch('id=00&title=哈哈&message=嘻嘻')}>点我更新一下收到的数据</button></li>
        <li>消息编号：{id}</li>
        <li>消息标题：{title}</li>
        <li>消息详情：{message}</li>
    </ul>
  )
}
