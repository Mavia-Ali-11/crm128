import React, { useState } from "react";
import { Link } from "react-router-dom";
import edit from "../../assets/Edit.svg";
import delet from "../../assets/Delete.svg";
import backarrow from "../../assets/backarrow.svg";
import Inputs from "./Inputs";
import arrow from "../../assets/arrow.svg";
import { Row, Col, Offcanvas, Modal, Dropdown } from "react-bootstrap";
export default function AllownceTable() {
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
          <Offcanvas.Title>Add New Allowance</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Inputs
            props={{ lable: "Allowance Name*", placeh: "Transportation" }}
          />
          <Row>
            <Col lg={6}>
              <div className="selectOption">
                <label htmlFor="" className="subHeading">
                  Allownce Type
                </label>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <div className="dropDownArrow">
                      Select <img src={arrow} alt="" />
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Percentage</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Fixed</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Percentage of Net", placeh: "5%" }} />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Limit Per Month*", placeh: "null" }} />
            </Col>
            <Col lg={6}></Col>
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
            <span className="subHeading">Edit Allowance</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Inputs
            props={{ lable: "Allowance Name*", placeh: "Transportation" }}
          />
          <Row>
            <Col lg={6}>
              <div className="selectOption">
                <label htmlFor="" className="subHeading">
                  Allownce Type
                </label>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <div className="dropDownArrow">
                      Select <img src={arrow} alt="" />
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Percentage</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Fixed</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Percentage of Net", placeh: "5%" }} />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Limit Per Month*", placeh: "null" }} />
            </Col>
            <Col lg={6}></Col>
          </Row>
          <div className="mt-4 mb-4">
            <Inputs props={{ lable: "Notes", placeh: "Notes" }} />
          </div>
          <div className="text-center mt-5 mb-5">
            <Link to="" className="mainBtn modalBtn">
              Update
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      <div className="clientHeader mt-4 mb-3">
        <p>
          Human Resources | Payroll | <Link to="">Allowance</Link>
        </p>
        <Link to="" className="mainBtn" onClick={handleShow}>
          Add Allowance
        </Link>
      </div>
      <Link to="" className="mainBtn back">
        <img src={backarrow} alt="" /> Back
      </Link>
      <table>
        <thead>
          <tr>
            <th>Allowance Name</th>
            <th>Allowance Type</th>
            <th>% of Net</th>
            <th>Limit Per Month</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Housing</td>
            <td>Percentage</td>
            <td>21%</td>
            <td>30,000</td>
            <td>
              <Link to="" onClick={handleShow2}>
                <img src={edit} alt="" />
              </Link>
              <Link to="">
                <img src={delet} alt="" />
              </Link>
            </td>
          </tr>
          {/* <tr>
            <td>Housing</td>
            <td>Percentage</td>
            <td>21%</td>
            <td>30,000</td>
            <td>
              <Link to="">
                <img src={edit} alt="" />
              </Link>
              <Link to="">
               
                <img src={delet} alt="" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>Housing</td>
            <td>Percentage</td>
            <td>21%</td>
            <td>30,000</td>
            <td>
              <Link to="">
                <img src={edit} alt="" />
              </Link>
              <Link to="">
               
                <img src={delet} alt="" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>Housing</td>
            <td>Percentage</td>
            <td>21%</td>
            <td>30,000</td>
            <td>
              <Link to="">
                <img src={edit} alt="" />
              </Link>
              <Link to="">
               
                <img src={delet} alt="" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>Housing</td>
            <td>Percentage</td>
            <td>21%</td>
            <td>30,000</td>
            <td>
              <Link to="">
                <img src={edit} alt="" />
              </Link>
              <Link to="">
               
                <img src={delet} alt="" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>Housing</td>
            <td>Percentage</td>
            <td>21%</td>
            <td>30,000</td>
            <td>
              <Link to="">
                <img src={edit} alt="" />
              </Link>
              <Link to="">
               
                <img src={delet} alt="" />
              </Link>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
