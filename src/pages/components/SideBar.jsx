import React,{useState} from "react";
import SideMenuData from "./SideBarImg";
import { Link } from "react-router-dom";
export default function SideBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="sideBar">
      <h1 className="mainTitle sideBarLogo">CRM<span>128</span></h1>
      <div className="sideMenu">
        <Link to="/dashboard">
          <img src={SideMenuData.overview} alt="" />
          Overview
        </Link>

        <p>
          <Link
            className="sideCollapes"
            data-bs-toggle="collapse"
            to="#collapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <img src={SideMenuData.clients} alt="" />
            Clients
            <img src={SideMenuData.arrow} alt="" className="arrowdown"/>
          </Link>
        </p>
        <div className="collapse" id="collapseExample1">
          <div className="card card-body">
           <Link to={"/dashboard/ClientDataBlank"}>Client Data</Link>
           <Link to={"/dashboard/Leads"}>Leads</Link>
          </div>
        </div>

        <Link to=""><img src={SideMenuData.appointment} alt="" />Appointment</Link>

        <p>
          <Link
            className="sideCollapes"
            data-bs-toggle="collapse"
            to="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <img src={SideMenuData.project} alt="" />
            Project Management 
            <img src={SideMenuData.arrow} alt="" className="arrowdown"/>
          </Link>
        </p>
        <div className="collapse" id="collapseExample2">
          <div className="card card-body">
           <Link to={"/dashboard/PMOverview"}>Overview</Link>
           <Link to="">Emzor Pham Industries</Link>
           <Link to={"/dashboard/AtlanticHallSchool"}>Atlantic Hall School</Link>
           <Link to="">Apple</Link>
           <Link to="">McDonald's</Link>
           <Link to="">New Project</Link>
          </div>
        </div>

        <p>
          <Link
            className="sideCollapes"
            data-bs-toggle="collapse"
            to="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <img src={SideMenuData.human} alt="" />
            Human Resource
            <img src={SideMenuData.arrow} alt="" className="arrowdown"/>
          </Link>
        </p>
        <div className="collapse" id="collapseExample3">
          <div className="card card-body">
           <Link to={"/dashboard/HrDashboard"}>Employee Management</Link>
           <Link to={"/dashboard/UserLeave"}>Leave Management</Link>
           <Link to={"/dashboard/Attendance"}>Attendance</Link>
           <Link to={"/dashboard/JobPostingBlank"}>Recruitment</Link>
           <Link to={"/dashboard/Payroll"}>Payroll</Link>
          </div>
        </div>

        <p>
        <Link
  className="sideCollapes"
  data-bs-toggle="collapse"
  to="#collapseExample4"
  role="button"
  aria-expanded={isExpanded}
  aria-controls="collapseExample"
  onClick={() => setIsExpanded(!isExpanded)}
>
  <img src={SideMenuData.acc} alt="" />
  Accounting
  <img
    src={SideMenuData.arrow}
    alt=""
    className={isExpanded ? 'arrowdown rotated' : 'arrowdown'}
  />
</Link>
        </p>
        <div className="collapse" id="collapseExample4">
          <div className="card card-body">
           <Link to={"/dashboard/AccIncome"}>Income</Link>
           <Link to={"/dashboard/AccExpense"}>Expenses</Link>
          </div>
        </div>

        <Link to=""><img src={SideMenuData.user} alt="" /> Invite Teammate</Link>
      </div>
    </div>
  );
}
