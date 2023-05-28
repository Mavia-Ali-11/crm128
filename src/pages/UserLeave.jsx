import React,{useState} from "react";
import leave from "../assets/Leave.png";
import { Offcanvas,Row,Col } from 'react-bootstrap'
import Inputs from './components/Inputs'
import Select from "./components/Select";
import { Link } from 'react-router-dom'
export default function UserLeave() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="clientData">
          <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add New Company</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
       <Row>
        <Col lg={6}>
        <Inputs props={{lable:"First Name",placeh:"Josiah"}}/>
        </Col>
        <Col lg={6}>
         <Inputs props={{lable:"Last Name",placeh:"Bolaji"}}/>
        </Col>
        <Col lg={6}>
          <Select props={{lable:"Leave Type"}}/>
        </Col>
        <Col lg={6}>
         <Inputs props={{lable:"Current Balance",placeh:"12 Days"}}/>
        </Col>
        <Col lg={6}>
         <Inputs props={{lable:"From",placeh:"DD-MM-YYYY"}}/>
        </Col>
        <Col lg={6}>
         <Inputs props={{lable:"To",placeh:"DD-MM-YYYY"}}/>
        </Col>
       </Row>
       <Select props={{lable:"Purpose"}}/>
        
         <label htmlFor="" className='subHeading'>Description</label>
         <textarea name="" id="" cols="30" rows="10" className='popUpTextArea' placeholder='Enter Description'>
         </textarea>
         <div className="text-center mt-5">
          <Link to="" className="mainBtn green">Save</Link>
         </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="clientHeader">
        <p>
        Human Resource | <Link to="">Leave</Link>
        </p>
        <Link to="" className="mainBtn" onClick={handleShow}>Apply for Leave</Link>
      </div>
      <div className="addCompany">
        <img src={leave} alt="" />
        <h1>Start by applying for leave</h1>
        <h6>
        Any leave applied for will live here
        </h6>
        <Link to="" className="mainBtn" onClick={handleShow}>Apply for Leave</Link>
      </div>
    </div>
  );
}