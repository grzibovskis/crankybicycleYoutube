import './topnavbar.css'
import { Outlet, Link } from "react-router-dom";
import Button from '@mui/material/Button';

const topnavbar = () => {
  return (
    <>
      <div className='container-topnavbar-grid'>
          <small>2.1.0</small>
          <div className='right'><Link to="/register"><Button size="small">Register</Button></Link></div>
          <div className='right'><Link to="/signin"><Button size="small">Singin</Button></Link></div>
          <Outlet />
      </div>
    </>
  )
}

export default topnavbar