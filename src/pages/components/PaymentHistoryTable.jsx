import React from 'react'
import backarrow from "../../assets/backarrow.svg";
// import Inputs from "./Inputs";
// import Select from "./Select";
// import { Row, Col, Offcanvas, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom'
export default function PaymentHistoryTable() {
  // const [show, setShow] = useState(false);
  // const [show2, setShow2] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleClose2 = () => setShow2(false);
  // const handleShow = () => setShow(true);
  // const handleShow2 = () => setShow2(true);
  return (
    <div className='commanTable payrollTable'>
            {/* <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add New Allowance</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Inputs
            props={{ lable: "Allowance Name*", placeh: "Transportation" }}
          />
          <Row>
            <Col lg={6}>
              <Select props={{ lable: "Allowance Type" }} />
            </Col>
            <Col lg={6}>
              <Inputs
                props={{ lable: "Percentage of Net", placeh: "DD-MM-YYYY"}}
              />
            </Col>
            <Col lg={6}>
              <Inputs
                props={{ lable: "Limit Per Month*", placeh: "20 Days" }}
              />
            </Col>
            <Col lg={6}></Col>
          </Row>

          <div className="text-center mt-5">
            <Link to="" className="mainBtn green">
              Save
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="subHeading">Edit Allowance</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Inputs
            props={{ lable: "Allowance Name*", placeh: "Transportation" }}
          />
          <Row>
            <Col lg={6}>
              <Select props={{ lable: "Allowance Type" }} />
            </Col>
            <Col lg={6}>
              <Inputs
                props={{ lable: "Percentage of Net", placeh: "DD-MM-YYYY"}}
              />
            </Col>
            <Col lg={6}>
              <Inputs
                props={{ lable: "Limit Per Month*", placeh: "20 Days" }}
              />
            </Col>
            <Col lg={6}></Col>
          </Row>
          <div className="mt-4 mb-4">
            <Inputs props={{ lable: "Notes", placeh: "Notes" }} />
          </div>
          <div className="text-center mt-5 mb-5">
            <Link to="" className="mainBtn modalBtn">
              Update
            </Link>
          </div>
        </Modal.Body>
      </Modal> */}
         <div className="clientHeader mt-4 mb-3">
        <p>
          Human Resources | Payroll | <Link to="">Payment History</Link>
        </p>
      </div>
      <div className="backBtnBox">
      <Link to="" className='mainBtn back'><img src={backarrow} alt="" /> Back</Link>
      <div className='pyrollInputs'>
        <label htmlFor="" className='subHeading'>Month:</label>
       <input className='commanInput' placeholder='Select Month'/>
       <Link to="" className='mainBtn'>Filter</Link>
      </div>
      </div>
    <table>
        <thead>
            <tr>
                <th>Employee Name</th>
                <th>Pay Grade</th>
                <th>Net salary</th>
                <th>To be Paid</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Junior Staff</td>
            <td>Junior Staff</td>
            <td>Junior Staff</td>
            <td>1000</td>
            </tr>
            {/* <tr>
            <td>Junior Staff</td>
            <td>Junior Staff</td>
            <td>Junior Staff</td>
            <td>1000</td>
            </tr>
            <tr>
            <td>Junior Staff</td>
            <td>Junior Staff</td>
            <td>Junior Staff</td>
            <td>1000</td>
            </tr>
            <tr>
            <td>Junior Staff</td>
            <td>Junior Staff</td>
            <td>Junior Staff</td>
            <td>1000</td>
            </tr>
            <tr>
            <td>Junior Staff</td>
            <td>Junior Staff</td>
            <td>Junior Staff</td>
            <td>1000</td>
            </tr>
            <tr>
            <td>Junior Staff</td>
            <td>Junior Staff</td>
            <td>Junior Staff</td>
            <td>1000</td>
            </tr> */}
        </tbody>
    </table>
</div>
  )
}
