import React from 'react'
import AttendenceTable from './components/AttendenceTable'
import calendar from "../assets/calendar.svg"
import { Link } from 'react-router-dom'
export default function AttendenceMonthly() {
  return (
    <div className='clientData'>
           <div className="clientHeader">
        <p>
        Human Resource | Attendance | <Link to="">Monthly Attendance</Link>
        </p>
      </div>
      <div className="attendDate monthly">
            <label htmlFor="attDate" className='subHeading'>Monthly:</label>
          <div>
            <label htmlFor="" className='subHeading'>From Date</label>
          <div className="dateInp mb-3">
           <input type="date" name="" id="" placeholder='01/02/2023'/>
           <img src={calendar} alt="" />
           </div>
          </div>
          <div>
            <label htmlFor="" className='subHeading'>To Date</label>
          <div className="dateInp mb-3">
           <input type="date" name="" id="" placeholder='01/02/2023'/>
           <img src={calendar} alt="" />
           </div>
          </div>
            <Link to="" className='mainBtn'>Filter</Link>
        </div>
        <AttendenceTable/>
    </div>
  )
}
