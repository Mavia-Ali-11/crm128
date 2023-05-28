import React, { useState } from "react";
import edit from "../../assets/Edit.svg";
import delet from "../../assets/Delete.svg";
import { Row, Col, Modal } from "react-bootstrap";
import Inputs from "./Inputs";
import Select from "./Select";
import { Link } from 'react-router-dom'

export default function AttendenceTable() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="commanTable attendence">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="subHeading">Summary details</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={6}>
              <Inputs props={{ lable: "Staff ID", placeh: "10035" }} />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Staff Name", placeh: "Deborah Jill" }} />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Time In", placeh: "8:00am" }} />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Time Out", placeh: "8:00am" }} />
            </Col>
            <Col lg={6}>
              <Inputs props={{ lable: "Date", placeh: "01/02/2023" }} />
            </Col>
            <Col lg={6}>
              <Inputs
                props={{ lable: "Total Working Hours", placeh: "9 Hours" }}
              />
            </Col>
            <Col lg={6}>
              <Select props={{ lable: "Late" }} />
            </Col>
            <Col lg={6}>
              <Select props={{ lable: "Status" }} />
            </Col>
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
      <table>
        <thead>
          <tr>
            <th>date</th>
            <th>Staff ID</th>
            <th>Employee Name</th>
            <th>Time In</th>
            <th>Time out</th>
            <th>Working Hours</th>
            <th>Late</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01/02/2023</td>
            <td>10035</td>
            <td>Deborah Jill</td>
            <td>08:00</td>
            <td>17:00</td>
            <td>9hours</td>
            <td>No</td>
            <td>Absent</td>
            <td>
              <Link to="" onClick={handleShow}>
                <img src={edit} alt="" />
              </Link>
              <Link to="">
                <img src={delet} alt="" />
              </Link>
            </td>
          </tr>
          {/* <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>9hours</td>
                    <td>No</td>
                    <td>Absent</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>9hours</td>
                    <td>No</td>
                    <td>Absent</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>9hours</td>
                    <td>No</td>
                    <td>Absent</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>9hours</td>
                    <td>No</td>
                    <td>Absent</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>9hours</td>
                    <td>No</td>
                    <td>Absent</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>9hours</td>
                    <td>No</td>
                    <td>Absent</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>9hours</td>
                    <td>No</td>
                    <td>Absent</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>9hours</td>
                    <td>No</td>
                    <td>Absent</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>9hours</td>
                    <td>No</td>
                    <td>Absent</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>9hours</td>
                    <td>No</td>
                    <td>Absent</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr> */}
        </tbody>
      </table>
    </div>
  );
}
