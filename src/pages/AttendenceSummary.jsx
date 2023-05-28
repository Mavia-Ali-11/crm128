import React from 'react'
import AttendenceSummaryTable from './components/AttendenceSummaryTable'
import Select from './components/Select'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function AttendenceSummary() {
  return (
    <div className='clientData'>
               <div className="clientHeader">
        <p>
        Human Resource | Attendance | <Link to="">Summary</Link>
        </p>
      </div>
      
            <Row>
                <Col lg={3}>
                    <Select props={{lable:"Employee"}}/>
                </Col>
                <Col lg={3}>
                <Select props={{lable:"Filter By"}}/>
                </Col>
                <Col lg={3}>
                <Select props={{lable:"Select month"}}/>
                </Col>
                <Col lg={3} className="my-auto">
                    <Link to="" className='mainBtn'>Filter</Link>
                </Col>
            </Row>
       
        <AttendenceSummaryTable/>
    </div>
  )
}
