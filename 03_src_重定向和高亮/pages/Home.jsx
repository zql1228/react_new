import React ,{useState}from 'react'
import { Navigate } from 'react-router-dom'
export default function Home() {
    const [sum,setSum]=useState(1)

  return (
    <div>
       <h2>Home</h2>    
    {sum===2?<Navigate to="/about" replace={true}/>: <div>当前sum的值是：{sum}</div>}
    <button onClick={()=>setSum(2)}>点我将sum变为2</button>
    </div>
  )
}
