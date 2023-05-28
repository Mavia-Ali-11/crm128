import React, { useState } from "react";
import HrTable from "./components/HrTable";
import PaginationCom from "./components/PaginationComp";
import Select from "./components/Select";
import { Offcanvas, Row, Col } from "react-bootstrap";
import Inputs from "./components/Inputs";
import { Link, useNavigate } from "react-router-dom";
export default function HrDashboard() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="clientData hrDashboard">
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Employee</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
            <Col lg={6}>
              <Inputs props={{ lable: "First Name", placeh: "Josiah" }} />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Last Name", placeh: "Bolaji" }} />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Role", placeh: "Designer" }} />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Title", placeh: "UI/UX Designer" }} />
            </Col>
            <Col lg={6}>
              <Select props={{ lable: "Status*" }} />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Staff ID*", placeh: "3234C" }} />
            </Col>
            <Col lg={6}>
              <Inputs
                props={{ lable: "Department", placeh: "Location/Branch" }}
              />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Location/Branch", placeh: "Lagos" }} />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Phone", placeh: "0703 889 8888" }} />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Email", placeh: "sample@mail.com" }} />
            </Col>
            <Col lg={6}>
              <label htmlFor="" className="subHeading">
                Gender
              </label>
              <div className="genders">
                <input type="radio" name="gender" />
                <span>Male</span>
                <input type="radio" name="gender" className="ms-2" />
                <span>Female</span>
                <br></br>
                <input type="radio" name="gender" id="" />
                <span>Prefer not to say</span>
              </div>
            </Col>
            <Col lg={6}>
              <Inputs
                props={{ lable: "Date of Birth", placeh: "DD-MM-YYYY" }}
              />
            </Col>
          </Row>
          <span
            to=""
            onClick={() => {
              navigate("/dashboard/HrDashboardEmp");
            }}
          >
            {" "}
            <Link to={""}>More Details</Link>
          </span>
          <div className="text-center mt-3">
            <Link to="" className="mainBtn green">
              Save
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="clientHeader">
        <p>
          Human Resources | <Link to="">Employee List</Link>
        </p>
        <div>
          <div className="sortSelect">
            <label htmlFor="" className="subHeading">
              Filter:
            </label>{" "}
            <div className="filter">
              <span>Project Engineer</span>
              <span>Electrical</span>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-end mb-4">
        <Link to="" className="mainBtn" onClick={handleShow}>
          Add employee
        </Link>
      </div>
      <HrTable />
      <PaginationCom />
    </div>
  );
}
