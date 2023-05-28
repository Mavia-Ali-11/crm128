import React,{useState} from 'react'
import blank from "../assets/blank.svg"
import blocks from "../assets/blocks.svg"
import vector from "../assets/vector.svg"
import { Offcanvas,Row,Col } from 'react-bootstrap'
import Inputs from './components/Inputs'
import { Link } from 'react-router-dom'
export default function ClientDataBlank() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='clientData'>
        <div className="clientHeader">
            <p>Client Data | <Link to="">Add New Company</Link></p>
            <div>
               <Link to=""> <img src={vector} alt="" /></Link>
               <Link to=""> <img src={blocks} alt="" /></Link>
            </div>
        </div>
        <div className="addCompany">
        <img src={blank} alt="" />
        <h1>Start by adding  a company</h1>
        <h6>Any company added here will live here</h6>
        <Link to="" className='mainBtn' onClick={handleShow}>Add New Company</Link>
        </div>
        <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add New Company</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <Inputs props={{lable:"Company Name",placeh:"Enter company name"}}/>
         <Inputs props={{lable:"Company Type",placeh:"Enter company type"}}/>
         <Row>
          <Col lg={6}><Inputs props={{lable:"Website"}}/></Col>
          <Col lg={6}><Inputs props={{lable:"Email"}}/></Col>
          <Col lg={6}><Inputs props={{lable:"Phone Number"}}/></Col>
          <Col lg={6}><Inputs props={{lable:"Mobile Number"}}/></Col>
         </Row>
         <label htmlFor="" className='subHeading'>Description</label>
         <textarea name="" id="" cols="30" rows="10" className='popUpTextArea' placeholder='Enter Description'>
         </textarea>
         <div className="text-center mt-5">
          <Link to="" className="mainBtn green">Save</Link>
         </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
