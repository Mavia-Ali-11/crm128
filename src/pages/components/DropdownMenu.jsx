import React from 'react'
import { Link } from "react-router-dom";
import dots from "../../assets/dots.svg"
import addDepartment from "../../assets/Add-Department.svg";
import addTask from "../../assets/Add-task.svg";
import addUser from "../../assets/Add-User-1.svg";
import Rename from "../../assets/Rename.svg";
import removeUser from "../../assets/Remove-User.svg";
import Delete from "../../assets/Delete.svg";

const DropdownMenu = () => {
  return (
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
  )
}

export default DropdownMenu