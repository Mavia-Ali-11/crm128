import React from "react";
import ds from "../assets/ds.png";
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
export default function ClientDataCoProfilt() {
  return (
    <div className="clientData profile">
      <div className="clientHeader">
        <p>Dashboard | Company List | <Link to="">Daniel & Sons Ltd.</Link></p>
      </div>
      <div className="profileCard">
        <div className="container-fluid">
          <Row>
            <Col lg={3}>
              <img src={ds} alt="" />{" "}
            </Col>
            <Col lg={9}>
              <Row>
                <h1>Daniel & Sons Ltd.</h1>
                <Col lg={4}>
                  <h6 className="smText">COMPANY TYPE</h6>
                  <h4 className="mb-3">Engineering Firm</h4>
                  <h6 className="smText">EMAIL</h6>
                  <h4>sample@mail.com</h4>
                </Col>
                <Col lg={4}>
                  <h6 className="smText">PHYSICAL ADDRESS</h6>
                  <h4 className="mb-3">No, 31, Unity Road, Ikeja</h4>
                  <h6 className="smText">WEBSITE</h6>
                  <h4>info.edu.ng</h4>
                </Col>
                <Col lg={4}>
                  <h6 className="smText">PHONE NUMBER</h6>
                  <h4 className="mb-3">+234 876 46 7777</h4>
                  <h6 className="smText">MOBLE NUMBER</h6>
                  <h4>01- 8373910</h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <h4>Notes</h4>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Enter Description"
      ></textarea>
    </div>
  );
}
