import React, { useState } from "react";
import mark from "../../assets/mark.svg";
import downsm from "../../assets/downsmall.svg";
import guest from "../../assets/User.svg";
import gmeet from "../../assets/Google Meet.svg";
import team from "../../assets/Teams.svg";
import zoom from "../../assets/Zoom.svg";
import Notification from "./Notification";
import ContactTable from "./ContactTable";
import DateCarousel from "./DateCarousel";
import Inputs from "./Inputs";
import { Offcanvas, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function RightBar() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>New Appointment</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Inputs props={{ lable: "Title", placeh: "John Doe" }} />
          <Row className="dateHr ">
            <Col lg={3}>
              <input type="text" name="" id="" placeholder="DD/MM/YY" />
            </Col>
            <Col lg={3}>
              <input type="text" name="" id="" placeholder="HH:MM" />
            </Col>
            <Col lg={3}>
              <input type="text" name="" id="" placeholder="DD/MM/YY" />
            </Col>
            <Col lg={3}>
              <input type="text" name="" id="" placeholder="HH:MM" />
            </Col>
          </Row>
          <Inputs props={{ lable: "Location" }} />
          <label htmlFor="" className="subHeading">
            Add Guest
          </label>
          <div>
            <span className="guest">
              <img src={guest} alt="" /> josiahg@hanstechnology.biz
            </span>
            <span className="guest">
              <img src={guest} alt="" /> daniele@gen128bs.com
            </span>
            <span className="guest">+</span>
          </div>

          <div className="meetings">
            <img src={gmeet} alt="" />
            <Link to="">Add Google Meet link</Link>
            <img src={team} alt="" className="ms-5" />
            <Link to="">Add MS Team link</Link>
            <br></br>
            <img src={zoom} alt="" className="mt-5" />
            <Link to="">Add Zoom link</Link>
          </div>
          <Inputs props={{ lable: "Link", placeh: "meet.google.com/yi9Dcw" }} />
          <label htmlFor="" className="subHeading">
            Description
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="popUpTextArea"
            placeholder="Enter Description"
          ></textarea>
          <div className="text-center mt-5">
            <Link to="" className="mainBtn green">
              Save
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={show2} onHide={handleClose2} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add New Company</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Inputs
            props={{ lable: "Company Name", placeh: "Enter company name" }}
          />
          <Inputs
            props={{ lable: "Company Type", placeh: "Enter company type" }}
          />
          <Row>
            <Col lg={6}>
              <Inputs props={{ lable: "Website" }} />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Email" }} />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Phone Number" }} />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Mobile Number" }} />
            </Col>
          </Row>
          <label htmlFor="" className="subHeading">
            Description
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="popUpTextArea"
            placeholder="Enter Description"
          ></textarea>
          <div className="text-center mt-5">
            <Link to="" className="mainBtn green">
              Save
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="rightSideBar">
        <div className="commonHeader">
          <div className="dropdown">
            <Link
              className="btn"
              to=""
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Notifications <span>All</span>
              <img src={downsm} alt="" />
            </Link>

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
          <h6 className="smText">
            Mark all as read <img src={mark} alt="" />
          </h6>
        </div>
        <Notification />

        <div className="commonHeader">
          <h1 className="mainHeading">Client Data </h1>
          <Link to="" className="commonBtn" onClick={handleShow2}>
            <span>+</span> Add Client
          </Link>
        </div>
        <ContactTable />
        <div className="commonHeader">
          <h1 className="mainHeading">Appointments</h1>
          <Link to="" className="commonBtn" onClick={handleShow}>
            <span>+</span>Add Appointment
          </Link>
        </div>
        <select name="" id="" className="monthSeclect">
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <DateCarousel />
        <h5 className="subHeading mt-3">
          Meeting Mr. Gabriel <span>09:35 - 10:20</span>
        </h5>
        <p className="mainText">
          Remember to pick up your system by 9:35. John Doe already sent you a
          reminder.
        </p>
      </div>
    </div>
  );
}
