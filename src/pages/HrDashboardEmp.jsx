import React from "react";
import { Col, Row } from "react-bootstrap";
import Inputs from "./components/Inputs";
import Select from "./components/Select";
import { Link } from 'react-router-dom'
export default function HrDashboardEmp() {
  return (
    <div className="clientData lead">
      <div className="clientHeader">
        <p>
        Human  Resources <Link to="">Profile</Link>
        </p>
      </div>
      <div className="inputBoxes">
        <div className="inputHeader">
          <h1 className="mainHeading">Account Type</h1>
          <div>
            <Link to="" className="mainBtn">
            Update
            </Link>
            </div>
          </div>
        </div>
        <div className="boxSection">
          <div className="container-fluid">
            <Row>
              <Col lg={3}>
                <Select props={{ lable: "Role*" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Username", placeh: "John" }} />
              </Col>
              <Col lg={3}>
              </Col>
              <Col lg={3}></Col>
            </Row>
          </div>
        </div>
        <div className="inputHeader border-0">
          <h1 className="mainHeading">Personal Information</h1>
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
                <Inputs props={{ lable: "Staff ID*", placeh: "John Doe" }} />
              </Col>
              <Col lg={3}>
              <Select props={{ lable: "Reports to*" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Department*", placeh: "This is a sample of a" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Title*", placeh: "John Doe" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Phone*", placeh: "John Doe" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Email", placeh: "John Doe" }} />
              </Col>

              <Col lg={3}>
              <Select props={{ lable: "Status*" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Date Joining", placeh: "DD-MM-YYYY"}} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Address", placeh: "John Doe" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Emergency Contact", placeh: "John Doe" }} />
              </Col>
              <Col lg={3}>
              <Select props={{ lable: "Gender" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Date of Birth", placeh: "DD-MM-YYYY"}} />
              </Col>
              <Col lg={3}>
              <Select props={{ lable: "Marital Status" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Photo", placeh: "John Doe" }} />
              </Col>
            </Row>
          </div>
        </div>
          <div className="inputHeader">
          <h1 className="mainHeading">Educational Background</h1>
          <Link to="" className="mainBtn white">Add</Link>
        </div>

        <div className="boxSection">
          <div className="container-fluid">
            <Row>
              <Col lg={3}>
              <Select props={{ lable: "Institution Type" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Name of Institution* ", placeh: "John" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Degree", placeh: "John Doe" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Graduation Year", placeh: "John Doe" }} />
              </Col>
            </Row>
            <div className="deleteField">
              <Row>
                <Col sm={3}>
                <Select props={{ lable: "Grade" }} />
                </Col>
                <Col sm={9} className="my-auto text-end">
                  <Link to="" className="mainBtn red">Delete</Link>
                </Col>
              </Row>
            </div>
            <Row>
            <Col lg={3}>
              <Select props={{ lable: "Institution Type" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Name of Institution* ", placeh: "John" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Degree", placeh: "John Doe" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Graduation Year", placeh: "John Doe" }} />
              </Col>
            </Row>
            <div className="deleteField">
              <Row>
                <Col sm={3}>
                <Select props={{ lable: "Grade" }} />
                </Col>
                <Col sm={9} className="my-auto text-end">
                  <Link to="" className="mainBtn red">Delete</Link>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="inputHeader">
          <h1 className="mainHeading">Work Experience</h1>
          <Link to="" className="mainBtn white">Add</Link>
        </div>
        <div className="boxSection">
          <div className="container-fluid">
          <Row>
              <Col lg={3}>
                <Inputs props={{ lable: "Organization", placeh: "This is a sample of a" }} />
              </Col>
              <Col lg={3}>
                <Inputs props={{ lable: "Title", placeh: "John Doe" }} />
              </Col>
              <Col lg={3}>
              <Select props={{ lable: "From" }} />
              </Col>
              <Col lg={3}>
              <Select props={{ lable: "To" }} />
              </Col>
            </Row>
            <div className="deleteField">
              <Row>
                <Col sm={3}>
                <Inputs props={{ lable: "Responsibility", placeh: "Responsibility" }} />
                </Col>
                <Col sm={9} className="my-auto text-end">
                  <Link to="" className="mainBtn red">Delete</Link>
                </Col>
              </Row>
            </div>
          </div>
          </div>
          <Link to="" className="mainBtn mt-4 mb-4">Update</Link>
      </div>
  );
}
