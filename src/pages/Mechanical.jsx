import React, { useState , useRef } from "react";
import mediaIcon from "../assets/Icon.svg";
import { Link } from "react-router-dom";
import PaginationCom from './components/PaginationComp'
import { Offcanvas,Row,Col } from 'react-bootstrap'
import Inputs from './components/Inputs'
import Select from "./components/Select";
import calendar from "../assets/calendar.svg"
import MechanicalTable from "./components/MechanicalTable";

const Mechanical = () => {
    const inputFile = useRef(null) 
    const onButtonClick = () => {
      // `current` points to the mounted file input element
      inputFile.current.click();
    };
  
    const [mediaModal , setMediaModal ] = useState(false);
    const toggleModal = () => {
      setMediaModal(!mediaModal);
    };
    if(mediaModal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
    const [ listView, setListView ] = useState(false);
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <div className="PMOverview clientData">
        <div className="clientHeader">
          <p>
          <p>Overview | <Link style={{color:"#091e42" , fontWeight:"400"}} to="/dashboard/AtlanticHallSchool">Atlantic Hall School </Link> | <Link to="/dashboard/Mechanical">Mechanical</Link>  </p>
          </p>
          <div className="text-end">
          <Link to="" className='mainBtn mt-2' onClick={handleShow}>New Task</Link>
          </div>
          <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Create New Project</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <Inputs props={{lable:"Project Title",placeh:"Enter Title"}}/>
         <Row>
         <Col lg={6}>
         <div className="attendDate">
         <div className="dateInp">
         <label htmlFor="attDate" className='subHeading'>Start Date</label>
         <div style={{position:'relative'}}>
           <input type="date" name="" id="" placeholder='DD/MM/YYYY'/>
           <img src={calendar} alt="" />
         </div>
           </div>
         </div>
</Col>
         <Col lg={6}><div className="attendDate">
         <div className="dateInp">
         <label htmlFor="attDate" className='subHeading'>Due Date</label>
         <div style={{position:'relative'}}>
           <input type="date" name="" id="" placeholder='01/02/2023'/>
           <img src={calendar} alt="" />
         </div>
           </div>
         </div></Col>
          <Col lg={6}><Select props={{ lable: "Department" }} /></Col>
          <Col lg={6}><Select props={{ lable: "Project" }} /></Col>
          <Col lg={6}><Inputs props={{lable:"Assigned by"}}/></Col>
          <Col lg={6}><Inputs props={{lable:"Supervised by"}}/></Col>
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
        <MechanicalTable />
        <PaginationCom/>
      </div>
    );
  };

export default Mechanical