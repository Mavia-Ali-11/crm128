import React,{useState} from 'react'
import NothingHere from './components/NothingHere'
import { Link } from 'react-router-dom'
import Inputs from './components/Inputs';
import { Row,Col,Offcanvas } from 'react-bootstrap';
import Select from './components/Select';export default function Leads() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='clientData'>
             <div className="clientHeader">
            <p>Client | <Link to="">Leads</Link></p>
            <div>
              <Link to="" className="mainBtn" onClick={handleShow}>Add New Lead</Link>
            </div>
        </div>
        <NothingHere/>
        <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add New Lead</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <Inputs props={{lable:"Contact Person",placeh:"Enter title"}}/>
         <Inputs props={{lable:"Organisation",placeh:"Enter title"}}/>
         <Inputs props={{lable:"Title",placeh:"Enter title"}}/>
         <Row>
          <Col lg={6}><Inputs props={{lable:"Value",placeh:"30,000"}}/></Col>
          <Col lg={6}><Select props={{lable:"Currency"}}/> </Col>
          <Col lg={6}><Inputs props={{lable:"Phone",placeh:"John Doe"}}/></Col>
          <Col lg={6}><Inputs props={{lable:"Email",placeh:"John Doe"}}/></Col>
          <Col lg={6}><Inputs props={{lable:"State Date",placeh:"DD-MM-YYYY"}}/></Col>
          <Col lg={6}><Inputs props={{lable:"Due Date",placeh:"DD-MM-YYYY"}}/></Col>
         </Row>
         <label htmlFor="" className='subHeading'>Description</label>
         <textarea name="" id="" cols="30" rows="10" className='popUpTextArea' placeholder='Enter Description'>

         </textarea>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
