import React from 'react'
import AccExpenseTable from './components/AccExpenseTable'
import PaginationCom from './components/PaginationComp'
import { Row,Col } from 'react-bootstrap'
import Select from './components/Select'
import { Link } from 'react-router-dom'
export default function AccExpense() {
  return (
    <div className='clientData'>
              <div className="clientHeader">
        <p>Accounting | <Link to="">Expenses</Link></p>
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
        <AccExpenseTable/>
        <PaginationCom/>
    </div>
  )
}
