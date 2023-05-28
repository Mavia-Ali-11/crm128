import React,{useState} from 'react'
import img from "../../assets/hr (8).png"
import Inputs from './Inputs'
import Select from './Select'
import { Row, Col, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom'
export default function SalerySheetTable() {
  // const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  // const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  // const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  return (
    <div className='commanTable payrollTable payslip'>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="subHeading">Salary Sheet for February</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
          <Col lg={6}><Inputs props={{lable:"Employee Name",placeh:"Kathryn Murphy"}}/></Col>
          <Col lg={6}><Inputs props={{lable:"Total Allowance",placeh:"$943.65"}}/></Col>
          <Col lg={6}><Inputs props={{lable:"Total Deduction",placeh:"$767.50"}}/></Col>
          <Col lg={6}><Inputs props={{lable:"Gross Salary",placeh:"$874,995.08"}}/></Col>
          <Col lg={6}><Select props={{lable:"Payment Method"}}/></Col>
        </Row>
         <div className='mt-4 mb-4'>
         <Inputs props={{lable:"Comments" ,placeh:"Transportation"}}/>
         </div>
          <div className="text-center mt-5 mb-5">
            <Link to="" className="mainBtn modalBtn">
              Pay
            </Link>
          </div>
        </Modal.Body>
      </Modal>
              <div className="clientHeader mt-4 mb-3">
        <p>
          Human Resources | Payroll | <Link to="">Generate Salary Sheet</Link>
        </p>
        <Link to="" className="mainBtn">
        Generate Payslip
        </Link>
      </div>
      <Row>
        <Col lg={3}></Col>
        <Col lg={3}>
          <Inputs props={{lable:"Month*",placeh:"DD-MM-YYYY"}}/>
        </Col>
        <Col lg={3}>
          <Select props={{lable:"Status"}}/>
        </Col>
        <Col lg={3}></Col>
      </Row>
        <table>
            <thead>
                <tr>
                <th>Employee Name</th>
                    <th>Month</th>
                    <th>Pay Grade</th>
                    <th>Net Salary</th>
                    <th>Gross Salary</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>
                    <img src={img} alt="" />
                    John c. Joe
                 </td>
                 <td>Project Engineer</td>
                 <td>Mid Management</td>
                 <td>350,000</td>
                 <td>380,000</td>
                 <td>Paid</td>
                 <td><Link to="" className='MakePayment silent'>Make Payment</Link></td>
                </tr>
                <tr>
                <td>
                    <img src={img} alt="" />
                    John c. Joe
                 </td>
                 <td>Project Engineer</td>
                 <td>Mid Management</td>
                 <td>350,000</td>
                 <td>380,000</td>
                 <td>Paid</td>
                 <td><Link to="" className='MakePayment' onClick={handleShow2}>Make Payment</Link></td>
                </tr>
                
            </tbody>
        </table>
    </div>
  )
}
