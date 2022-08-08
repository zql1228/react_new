import React,{useState} from 'react'
import { Link } from 'react-router-dom'
export default function Message() {
    const [message]=useState([
        {id:'01',title:'消息1',message:'锄禾日当午'},
        {id:'02',title:'消息2',message:'汗滴禾下土'},
        {id:'03',title:'消息3',message:'谁知盘中餐'},
        {id:'04',title:'消息5',message:'粒粒皆辛苦'},

    ])
  return (
    <div>
         <ul>
            {
        message.map((item)=>(
    <li key={item.id}>
        <Link to={`detail?id=${item.id}&title=${item.title}&message=${item.message}`}>{item.title}</Link>&nbsp;&nbsp;
        </li>
            ))
                }
  </ul>
  </div>
  )
}
