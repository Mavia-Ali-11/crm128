import React from 'react'
import {ProgressBar} from "react-bootstrap"
import user from "../../assets/user2.png"
import dots from "../../assets/dots.svg"
import addDepartment from "../../assets/Add-Department.svg";
import addTask from "../../assets/Add-task.svg";
import addUser from "../../assets/Add-User-1.svg";
import Rename from "../../assets/Rename.svg";
import removeUser from "../../assets/Remove-User.svg";
import Delete from "../../assets/Delete.svg";
import { Link } from 'react-router-dom'
export default function ProgressCard(props) {
  return (
    <Link to={props.url}>
    <div className='progressCard'>
        <div className="cardHeader">
        <p className="date m-0">Start Date: 20 Dec 2022</p>
       
        <div className="dropdown">
  <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <img src={dots} alt="" />
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to=""><img src={addDepartment} alt="" /> New Department</Link></li>
    <li><Link className="dropdown-item" to=""><img src={addTask} alt="" /> New Task</Link></li>
    <li><Link className="dropdown-item" to=""><img src={addUser} alt="" /> Add User</Link></li>
    <li><Link className="dropdown-item" to=""><img src={Rename} alt="" /> Rename Project</Link></li>
    <li><Link className="dropdown-item" to=""><img src={removeUser} alt="" /> Remove User</Link></li>
    <li><Link className="dropdown-item Delete" to=""><img src={Delete} alt="" /> Delete User</Link></li>
  </ul>
</div>
        </div>
        <h3 className="firstHeading">{props.firstHeading}</h3>
        <h1 className="secondHeading">{props.secondHeading}</h1>
        <h1 className="cardHeading">{props.mainHeading}</h1>
        <div className="progressCount">
            <h6>Progress</h6>
            <h6>81%</h6>
        </div>
        <ProgressBar now={81} />
        <h6>Assigned to</h6>
        <div className="cardFooter">
        <div className="userimg">
            <img src={user} alt="" />
            <span>John Doe</span>
        </div>
        <span className='daysLable'>2 Weeks Left</span>
        </div>
    </div>
    </Link>
  )
}
