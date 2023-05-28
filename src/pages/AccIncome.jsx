import React from 'react'
import AccIncomeTable from './components/AccIncomeTable'
import { Row,Col } from 'react-bootstrap'
import Select from './components/Select'
import PaginationCom from './components/PaginationComp'
import { Link } from 'react-router-dom'
export default function AccIncome() {
  return (
    <div className='clientData'>
           <div className="clientHeader">
        <p>Accounting | <Link to="">Income</Link></p>
            <Link to="" className='mainBtn'>Add Income</Link>
      </div>
      <Row className='mb-3'>
        <Col lg={3}>
            <Select props={{lable:"Filter By"}}/>
        </Col>
        <Col lg={3}>
        <Select props={{lable:"Select month"}}/>
        </Col>
        <Col lg={3} className="my-lg-auto mb-0">
            <Link to="" className='mainBtn'>filter</Link>
        </Col>
        <Col lg={3} className="my-lg-auto text-end">
        </Col>
      </Row>
        <AccIncomeTable/>
        <PaginationCom/>
    </div>
  )
}
