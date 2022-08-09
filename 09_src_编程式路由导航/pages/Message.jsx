import React,{useState} from 'react'
import { Link, Outlet,useNavigate} from 'react-router-dom'
export default function Message() {
    const [message]=useState([
        {id:'01',title:'消息1',message:'锄禾日当午'},
        {id:'02',title:'消息2',message:'汗滴禾下土'},
        {id:'03',title:'消息3',message:'谁知盘中餐'},
        {id:'04',title:'消息4',message:'粒粒皆辛苦'},
    ])
    const navigate=useNavigate()
    // 编程式路由导航
    const showDetail=(m)=>{
        navigate('detail',{replace:false,state:{id:m.id,title:m.title,message:m.message}})
    }
  return (
    <div>
         <ul>
            {
        message.map((item)=>{return (
    <li key={item.id}>
        <Link to="detail" state={{id:item.id,title:item.title,message:item.message}}>{item.title}</Link>&nbsp;&nbsp;
        <button onClick={()=>showDetail(item)}>跳转详情</button>
        </li>
            )})
                }
  </ul>
  <hr />
  <Outlet/>
  </div>
  )
}
