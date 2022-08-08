import React from 'react'
import { NavLink,Route,Routes,Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
export default function App() {
  const computedClassName=({isActive})=>{
    return isActive? 'list-group-item atguigu':'list-group-item '
  }
  return (
    <div>
      <h2>App</h2>
      <div>
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header"><h2>React Router Demo</h2></div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          {/* 路由链接 */}
        <NavLink className={computedClassName} to="/about">About</NavLink>
        <NavLink className={computedClassName} to="/home">Home</NavLink>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            {/* 注册路由 */}
            {/* caseSensitive :区分路由的大小写 */}
            <Routes>
              <Route path="/about" caseSensitive element={<About/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/" element={<Navigate to="/about"/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
