import React from 'react'
import { NavLink,useRoutes} from 'react-router-dom'
import routes from './routes'
export default function App() {
  const element=useRoutes(routes) //根据路由表生成路由
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
        <NavLink className="list-group-item" end to="/home">Home</NavLink>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            {/* 注册路由 */}
              {element}
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
