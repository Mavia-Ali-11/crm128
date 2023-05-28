import React,{useState} from 'react'
import fail from "../assets/fail.svg";
import win from "../assets/win.svg";
import dots from "../assets/dots.svg";
import upload from "../assets/upload.svg";
import Inputs from "./components/Inputs";
import Select from "./components/Select";
import guest from "../assets/User.svg"
import gmeet from "../assets/Google Meet.svg"
import team from "../assets/Teams.svg"
import zoom from "../assets/Zoom.svg"
import { Row,Col,Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom'
export default function LeadsJobPosting() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="clientData lead">
          <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>New Schedule</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <Inputs props={{lable:"Title",placeh:"John Doe"}}/>
         <Row className='dateHr '>
          <Col lg={3}><input type="text" name="" id="" placeholder='DD/MM/YY'/></Col>
          <Col lg={3}><input type="text" name="" id="" placeholder='HH:MM'/></Col>
          <Col lg={3}><input type="text" name="" id="" placeholder='DD/MM/YY'/></Col>
          <Col lg={3}><input type="text" name="" id="" placeholder='HH:MM'/></Col>
         </Row>
         <Inputs props={{lable:"Location"}}/>
         <label htmlFor="" className='subHeading'>Add Guest</label>
       <div>
       <span className='guest'><img src={guest} alt="" /> josiahg@hanstechnology.biz</span>
         <span className='guest'><img src={guest} alt="" /> daniele@gen128bs.com</span>
         <span className='guest'>+</span>
       </div>

        <div className="meetings">
        <img src={gmeet} alt="" /><Link to="">Add Google Meet link</Link>
        <img src={team} alt="" className='ms-5'/><Link to="">Add MS Team link</Link><br></br>
        <img src={zoom} alt="" className='mt-5'/><Link to="">Add Zoom link</Link>
        </div>
        <Inputs props={{lable:"Link" , placeh:"meet.google.com/yi9Dcw"}}/>
         <label htmlFor="" className='subHeading'>Description</label>
         <textarea name="" id="" cols="30" rows="10" className='popUpTextArea' placeholder='Enter Description'>
         </textarea>
        <div className='text-center mt-5'>
        <Link to="" className='mainBtn green'>Save</Link>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="clientHeader">
        <p>
          Clients | Lead | <Link to="">Sample Deal Title</Link>
        </p>
      </div>
      <div className="inputBoxes">
        <div className="inputHeader">
          <h1 className="mainHeading">Sample Deal Title</h1>
          <div>
            <Link to="" className="mainBtn white" onClick={handleShow}>
              Schedule Appointment
            </Link>
            <span className="win">
              Won
              <img src={win} alt="" />
            </span>
            <span className="fail">
              Lost
              <img src={fail} alt="" />
            </span>
            <div className="dropdown">
              <button
                className="btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={dots} alt="" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="boxSection">
          <div className="container-fluid">
            <Row>
              <Col lg={3}>
                <Inputs props={{ lable: "Value", placeh: "300,000" }} />
              </Col>
              <Col lg={3}>
                <Select props={{ lable: "Currency" }} />
              </Col>
              <Col lg={3}>
                <Select props={{ lable: "Status" }} />
              </Col>
              <Col lg={3}></Col>
            </Row>
          </div>
        </div>
        <div className="inputHeader border-0">
          <h1 className="mainHeading">Contact Person</h1>
        </div>
        <div className="boxSection">
          <div className="container-fluid">
            <Row>
              <Col lg={3}>
                <Inputs props={{ lable: "First Name*", placeh: "John" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Last Name*", placeh: "John Doe" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Phone", placeh: "John Doe" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Email", placeh: "John Doe" }} />
              </Col>
            </Row>
          </div>
        </div>
        <div className="inputHeader">
          <h1 className="mainHeading">Details</h1>
          <Link to="" className="mainBtn white">
            Add
          </Link>
        </div>
        <div className="boxSection">
          <div className="container-fluid">
            <Row>
              <Col lg={3}>
                <Inputs
                  props={{ lable: "Name of Organization*", placeh: "John" }}
                />
              </Col>
              <Col lg={3}>
                <Select props={{ lable: "Institution Type" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Contact", placeh: "John Doe" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Email", placeh: "John Doe" }} />
              </Col>
              <Col lg={6}>
                <Inputs props={{ lable: "Address", placeh: "John" }} />
                <Row>
                  <Col>
                    <Inputs props={{ lable: "Degree", placeh: "John Doe" }} />
                  </Col>
                  <Col>
                    <Inputs props={{ lable: "Attachment", placeh: "Attach" }} />
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <div className="uploadBox">
                    <div className="subHeading mb-3">Add Media</div>
                    <input type="file" name="" id="uploadFile" />
                    <label className="upload" htmlFor="uploadFile">
                        <img src={upload} alt="" />
                        <p className="mainText">
                        Browse and chose the files you want to upload from your computer
                        </p>
                    </label>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
