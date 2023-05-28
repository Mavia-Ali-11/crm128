import React, { useState } from "react";
import edit from "../../assets/Edit.svg";
import delet from "../../assets/Delete.svg";
import backarrow from "../../assets/backarrow.svg";
import Inputs from "./Inputs";
import Select from "./Select";
import { Row, Col, Offcanvas, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom'
export default function PayGradeTable() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  return (
    <div className="commanTable payrollTable">
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Pay GradeAdd Pay Grade</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Inputs
            props={{ lable: "Pay Grade Name*", placeh: "Transportation" }}
          />
          <Row>
            <Col lg={6}>
              <Inputs
                props={{ lable: "Gross Salary*", placeh: "Gross Salary" }}
              />
            </Col>
            <Col lg={6}>
              <Select props={{ lable: "Percentage Of Basic*" }} />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Basic Salary*", placeh: "350,000" }} />
            </Col>
            <Col lg={6}>
              <Inputs
                props={{ lable: "Overtime Rate (Per Hour)*", placeh: "3,500" }}
              />
            </Col>
            <Col lg={6} className="checkBoxes">
              <h1 className="subHeading">Allowance*</h1>
              <div>
                <input type="checkbox" id="chk1" />
                <label htmlFor="chk1" className="mainText">
                  Select All
                </label>
              </div>
              <div>
                <input type="checkbox" id="chk2" />
                <label htmlFor="chk2" className="mainText">
                  Housing
                </label>
              </div>
              <div>
                <input type="checkbox" id="chk3" />
                <label htmlFor="chk3" className="mainText">
                  Transportation
                </label>
              </div>
              <div>
                <input type="checkbox" id="chk4" />
                <label htmlFor="chk4" className="mainText">
                  Wardrobe{" "}
                </label>
              </div>
            </Col>
            <Col lg={6} className="checkBoxes">
              <h1 className="subHeading">Deduction*</h1>
              <div>
                <input type="checkbox" id="chk5" />
                <label htmlFor="chk5" className="mainText">
                  Lateness
                </label>
              </div>
              <div>
                <input type="checkbox" id="chk6" />
                <label htmlFor="chk6" className="mainText">
                  Tax
                </label>
              </div>
              <div>
                <input type="checkbox" id="chk7" />
                <label htmlFor="chk7" className="mainText">
                  Deduction 1
                </label>
              </div>
              <div>
                <input type="checkbox" id="chk8" />
                <label htmlFor="chk8" className="mainText">
                  Deduction 2
                </label>
              </div>
            </Col>
          </Row>

          <div className="text-center mt-5">
            <Link to="" className="mainBtn green">
              Save
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="subHeading">Edit  Pay Grade</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Inputs
            props={{ lable: "Pay Grade Name*", placeh: "Transportation" }}
          />
          <Row>
            <Col lg={6}>
              <Inputs
                props={{ lable: "Gross Salary*", placeh: "Gross Salary" }}
              />
            </Col>
            <Col lg={6}>
              <Select props={{ lable: "Percentage Of Basic*" }} />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Basic Salary*", placeh: "350,000" }} />
            </Col>
            <Col lg={6}>
              <Inputs
                props={{ lable: "Overtime Rate (Per Hour)*", placeh: "3,500" }}
              />
            </Col>
            <Col lg={6} className="checkBoxes">
              <h1 className="subHeading">Allowance*</h1>
              <div>
                <input type="checkbox" id="chk1" />
                <label htmlFor="chk1" className="mainText">
                  Select All
                </label>
              </div>
              <div>
                <input type="checkbox" id="chk2" />
                <label htmlFor="chk2" className="mainText">
                  Housing
                </label>
              </div>
              <div>
                <input type="checkbox" id="chk3" />
                <label htmlFor="chk3" className="mainText">
                  Transportation
                </label>
              </div>
              <div>
                <input type="checkbox" id="chk4" />
                <label htmlFor="chk4" className="mainText">
                  Wardrobe
                </label>
              </div>
            </Col>
            <Col lg={6} className="checkBoxes">
              <h1 className="subHeading">Deduction*</h1>
              <div>
                <input type="checkbox" id="chk5" />
                <label htmlFor="chk5" className="mainText">
                  Lateness
                </label>
              </div>
              <div>
                <input type="checkbox" id="chk6" />
                <label htmlFor="chk6" className="mainText">
                  Tax
                </label>
              </div>
              <div>
                <input type="checkbox" id="chk7" />
                <label htmlFor="chk7" className="mainText">
                  Deduction 1
                </label>
              </div>
              <div>
                <input type="checkbox" id="chk8" />
                <label htmlFor="chk8" className="mainText">
                  Deduction 2
                </label>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-5 mb-5">
            <Link to="" className="mainBtn modalBtn">
              Update
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      <div className="clientHeader mt-4 mb-3">
        <p>
          Human Resources | Payroll | <Link to="">Pay Grade</Link>
        </p>
        <Link to="" className="mainBtn" onClick={handleShow}>
          Add Pay Grade
        </Link>
      </div>
      <Link to="" className="mainBtn back">
        <img src={backarrow} alt="" /> Back
      </Link>
      <table>
        <thead>
          <tr>
            <th>Pay Grade Name</th>
            <th>Gross Salary</th>
            <th>% of Net</th>
            <th>Net Salary</th>
            <th>Overtime</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Junior Staff</td>
            <td>100,000</td>
            <td>50%</td>
            <td>50,000</td>
            <td>1000</td>
            <td>
              <Link to="" onClick={handleShow2}>
                <img src={edit} alt="" />
              </Link>
              <Link to="">
                {" "}
                <img src={delet} alt="" />
              </Link>
            </td>
          </tr>
          {/* <tr>
            <td>Junior Staff</td>
            <td>100,000</td>
            <td>50%</td>
            <td>50,000</td>
            <td>1000</td>
            <td>
              <Link to="">
                <img src={edit} alt="" />
              </Link>
              <Link to="">
                {" "}
                <img src={delet} alt="" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>Junior Staff</td>
            <td>100,000</td>
            <td>50%</td>
            <td>50,000</td>
            <td>1000</td>
            <td>
              <Link to="">
                <img src={edit} alt="" />
              </Link>
              <Link to="">
                {" "}
                <img src={delet} alt="" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>Junior Staff</td>
            <td>100,000</td>
            <td>50%</td>
            <td>50,000</td>
            <td>1000</td>
            <td>
              <Link to="">
                <img src={edit} alt="" />
              </Link>
              <Link to="">
                {" "}
                <img src={delet} alt="" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>Junior Staff</td>
            <td>100,000</td>
            <td>50%</td>
            <td>50,000</td>
            <td>1000</td>
            <td>
              <Link to="">
                <img src={edit} alt="" />
              </Link>
              <Link to="">
                {" "}
                <img src={delet} alt="" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>Junior Staff</td>
            <td>100,000</td>
            <td>50%</td>
            <td>50,000</td>
            <td>1000</td>
            <td>
              <Link to="">
                <img src={edit} alt="" />
              </Link>
              <Link to="">
                {" "}
                <img src={delet} alt="" />
              </Link>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
