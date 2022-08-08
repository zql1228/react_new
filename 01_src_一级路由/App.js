import React from 'react'
import { NavLink,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
export default function App() {
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
        <NavLink className="list-group-item" to="/about">About</NavLink>
        <NavLink className="list-group-item active" to="/home">Home</NavLink>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            {/* 注册路由 */}
            <Routes>
              <Route path="/about" element={<About/>} />
              <Route path="/home" element={<Home/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
