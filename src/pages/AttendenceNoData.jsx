import React from 'react'
import AttendenceTableNoData from './components/AttendenceTableNoData'
import { Link } from 'react-router-dom'
export default function AttendenceNoData() {
  return (
    <div className='clientData'>
        <div className="clientHeader">
        <p>
        Human Resource | Attendance | <Link to="">Daily Attendance</Link>
        </p>
        <Link to="" className='mainBtn'>Add Attendance</Link>
      </div>
      <AttendenceTableNoData/>
    </div>
  )
}
