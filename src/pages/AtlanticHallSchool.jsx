import React, { useState , useRef } from "react";
import ProgressCard from "./components/ProgressCard";
import ActivitiesTable from "./components/ActivitiesTable";
import PMOverviewGridView from "./components/PMOverviewGridView";
import PMOverviewListView from "./components/PMOverviewListView";
import Select from "./components/Select";
import blocks from "../assets/blocks.svg";
import vector from "../assets/vector.svg";
import mediaIcon from "../assets/Icon.svg";
import teamMember from "../assets/team-member.png";
import { Link } from "react-router-dom";
import { Offcanvas,Row,Col } from 'react-bootstrap'
import Inputs from './components/Inputs'
import AttendenceDaily from "./AttendenceDaily";
import MediaModal from "./components/MediaModal";

const AtlanticHallSchool = () => {
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
          <p>Overview | <Link to="/dashboard/AtlanticHallSchool">Atlantic Hall School</Link></p>
          </p>
          <div className="text-end">
          <Link to="" className='mainBtn mt-2' onClick={handleShow}>New Department</Link>
          </div>
          <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Create New Department</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
           <Inputs props={{lable:"Department Title",placeh:"Enter Title"}}/>
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
        <div className="overview">
            <h6 className="mainHeading">Ongoing Projects</h6>
            <Row>
              <Col lg={3}>
                <ProgressCard url="/dashboard/AtlanticHallSchool" firstHeading="Atlantic Hall School" secondHeading="Mechanical"/>
              </Col>
              <Col lg={3}>
                <ProgressCard firstHeading="Atlantic Hall School" secondHeading="Electrical" />
              </Col>
              <Col lg={3}>
                <ProgressCard firstHeading="Atlantic Hall School" secondHeading="HVAC" />
              </Col>
              <Col lg={3}>
                <ProgressCard firstHeading="Atlantic Hall School" secondHeading="Civil" />
              </Col>
            </Row>
            <div className="mt-5">
              <Row>
                <Col lg={8}>
                <div className="overviewCard" style={{background: "#fff"}}>
                  <div className="commonHeader">
                    <h6 className="mainHeading">List of Activities</h6>
                    <Link to="" className="commonBtn">
                      View All
                    </Link>
                  </div>
                  <ActivitiesTable />
                </div>
                </Col>
                <Col lg={4}>
                <div className="overviewCard" style={{background: "#fff"}}>
                  <div className="commonHeader">
                    <h6 className="mainHeading">Team Members</h6>
                    <Link to="" className="commonBtn">
                      View All
                    </Link>
                  </div>
                    <div className="teamContainer">
                        <img src={teamMember} alt="" />
                        <div>
                            <h6 className="m-0">John C. Joe</h6>
                            <p className="m-0">Project Lead</p>
                        </div>
                    </div>
                    <div className="teamContainer">
                        <img src={teamMember} alt="" />
                        <div>
                            <h6 className="m-0">John C. Joe</h6>
                            <p className="m-0">Project Lead</p>
                        </div>
                    </div>
                    <div className="teamContainer">
                        <img src={teamMember} alt="" />
                        <div>
                            <h6 className="m-0">John C. Joe</h6>
                            <p className="m-0">Project Lead</p>
                        </div>
                    </div>
                    <div className="teamContainer">
                        <img src={teamMember} alt="" />
                        <div>
                            <h6 className="m-0">John C. Joe</h6>
                            <p className="m-0">Project Lead</p>
                        </div>
                    </div>
                    <div className="teamContainer">
                        <img src={teamMember} alt="" />
                        <div>
                            <h6 className="m-0">John C. Joe</h6>
                            <p className="m-0">Project Lead</p>
                        </div>
                    </div>
                    <div className="teamContainer">
                        <img src={teamMember} alt="" />
                        <div>
                            <h6 className="m-0">John C. Joe</h6>
                            <p className="m-0">Project Lead</p>
                        </div>
                    </div>
                </div>
                </Col>
              </Row>
            </div>
      </div>
      </div>
    );
  };

export default AtlanticHallSchool