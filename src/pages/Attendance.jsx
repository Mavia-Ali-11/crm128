import React from 'react'
import AttendenceTable from './components/AttendenceTable'
import PaginationCom from './components/PaginationComp'
import calendar from "../assets/calendar.svg"
import {Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Attendance() {
  return (
    <div className='clientData'>
          <div className="clientHeader">
        <p>
        Human Resource | Attendance | <Link to="">Daily Attendance</Link>
        </p>
      </div>
      <Row>
        <Col lg={4}>
        <div className="attendDate">
            <label htmlFor="attDate" className='subHeading'>Date:</label>
           <div className="dateInp">
           <input type="date" name="" id="" placeholder='01/02/2023'/>
           <img src={calendar} alt="" />
           </div>
            <Link to="" className='mainBtn'>Filter</Link>
        </div>
        </Col>
      </Row>
        <AttendenceTable/>
        <PaginationCom/>
    </div>
  )
}
