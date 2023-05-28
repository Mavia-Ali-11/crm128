import React from 'react'
import hrprofile from "../assets/hrprofile.png"
import {Row,Col} from "react-bootstrap"
import { Link } from 'react-router-dom'
export default function HrDashboardProfile() {
  return (
    <div className="clientData profile">
    <div className="clientHeader">
      <p>Human  Resources | <Link to="">Profile</Link></p>
    </div>
    <div className='userTitle'>
        <h1 className="mainHeading">Josiah Chukuma Femi</h1>
        <Link to="" className="mainBtn">Edit</Link>
    </div>
    <div className="profileCard">
      <div className="container-fluid">
        <Row>
          <Col lg={3}>
            <img src={hrprofile} alt="" />{" "}
          </Col>
          <Col lg={9} className="my-lg-auto">
            <Row>
              <Col lg={4}>
                <h6 className="smText">Full Name</h6>
                <h4 className="mb-3">Josiah Chukuma Femi</h4>
                <h6 className="smText">EMAIL</h6>
                <h4>sample@mail.com</h4>
                <h6 className="smText">PHONE NUMBER</h6>
                <h4>+234 703 603 9249</h4>
              </Col>
              <Col lg={4}>
                <h6 className="smText">Title</h6>
                <h4 className="mb-3">Engineer</h4>
                <h6 className="smText">DEPARTMENT</h6>
                <h4>Project Management</h4>
                <h6 className="smText">STATUS</h6>
                <h4>Probation</h4>
              </Col>
              <Col lg={4}>
                <h6 className="smText">STAFF ID</h6>
                <h4 className="mb-3">455</h4>
                <h6 className="smText">JOINING DATAR</h6>
                <h4>22 January 2023</h4>
                <h6 className="smText">PHONE NUMBER</h6>
                <h4>+234 703 603 9249</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  </div>
  )
}
