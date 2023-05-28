import React,{useState} from 'react'
import Inputs from "./Inputs";
import arrow from "../../assets/arrow.svg"
import { Link } from 'react-router-dom'
import { Row, Col, Offcanvas,Dropdown } from "react-bootstrap";
export default function JobPostingBtn({props}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className='jobBtn'>
             <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.job}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Inputs
            props={{ lable: "Job Title*", placeh: "Company Anniversary" }}
          />
          <label htmlFor="" className='mainText'>Description*</label>
          <textarea name="" id="" cols="30" rows="10" className='jobTextarea '>

          </textarea>
          <Row>
            <Col lg={6}>
              <Inputs
                props={{ lable: "Application End Date", placeh: "DD-MM-YYYY"}}
              />
            </Col>
            <Col lg={6}>
            <div className='selectOption'>
        <label htmlFor="" className="subHeading">Status</label>
        <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
      <div className="dropDownArrow">
      Select <img src={arrow} alt="" />
      </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Expired</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Suspended</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>
    </div>
            </Col>
          </Row>

          <div className="text-center mt-5">
            <Link to="" className="mainBtn white me-3">
            Save as draft
            </Link>
            <Link to="" className="mainBtn">
            Save and Publish
            </Link>
          </div>
          
        </Offcanvas.Body>
      </Offcanvas>
        <Link to="" className='mainBtn' onClick={handleShow}>{props.btnName}</Link>
    </div>
  )
}
