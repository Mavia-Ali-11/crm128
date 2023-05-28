import React, { useState , useRef } from "react";
import PMOverviewGridView from "./components/PMOverviewGridView";
import PMOverviewListView from "./components/PMOverviewListView";
import Select from "./components/Select";
import blocks from "../assets/blocks.svg";
import vector from "../assets/vector.svg";
import mediaIcon from "../assets/Icon.svg";
import calendar from "../assets/calendar.svg"
import { Link } from "react-router-dom";
import { Offcanvas,Row,Col } from 'react-bootstrap'
import Inputs from './components/Inputs'
import AttendenceDaily from "./AttendenceDaily";
import MediaModal from "./components/MediaModal";

const PMOverview = () => {
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
          <Link to="/dashboard/PMOverview">Overview</Link>
        </p>
        <div className="text-end">
          <div className="grid-icon-div">
            <span className={ listView ? "active sort-btn" : "sort-btn"}>
              <img src={vector} alt="" onClick={ ( ) => setListView(true)  } />
              </span>
              <span className={ !listView ? "active sort-btn" : "sort-btn"}>
              <img src={blocks} alt="" onClick={ ( ) => setListView(false)  } />
              </span>
          </div>
        <Link to="" className='mainBtn mt-2' onClick={handleShow}>New Project</Link>
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
           <input type="date" name="" id="" placeholder='01/02/2023'/>
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
          <Col lg={6}><Inputs props={{lable:"Supervised by"}}/></Col>
         </Row>
         <label htmlFor="" className='subHeading'>Description</label>
         <textarea name="" id="" cols="30" rows="10" className='popUpTextArea' placeholder='Enter Description'>
         </textarea>
         <div className="leadInput mt-3">
         <button onClick={toggleModal} className="media-btn">Add Media</button>
         { mediaModal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h5>Add Media</h5>
            <div onClick={onButtonClick} className="mediaBox">
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
            <img src={mediaIcon} alt="" />
            <p className="m-0">Browse and chose the files you want to upload from <br /> your computer</p>
            </div>
            <div className="closed-btn">
            <button className="close-modal" onClick={toggleModal}>
              CANCEL
            </button>
            <button className="close-modal" onClick={toggleModal}>
              SAVED DOCUMENT
            </button>
            </div>
          </div>
        </div>
      ) }
         </div>
         <div className="text-center mt-5">
          <Link to="" className="mainBtn green">Save</Link>
         </div>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
      {
        !listView ? <PMOverviewGridView /> :  <PMOverviewListView />
      }
    </div>
  );
};

export default PMOverview;
