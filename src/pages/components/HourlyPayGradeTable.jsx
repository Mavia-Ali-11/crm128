import React,{useState} from "react";
import edit from "../../assets/Edit.svg";
import delet from "../../assets/Delete.svg";
import backarrow from "../../assets/backarrow.svg";
import Inputs from "./Inputs";
import { Offcanvas, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom'
export default function HourlyPayGradeTable() {
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
          <Offcanvas.Title>Add Hourly Pay Grade</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Inputs
            props={{ lable: "Pay Grade Name*", placeh: "Transportation" }}
          />
          <Inputs
            props={{ lable: "Hourly Rate*", placeh: "Transportation" }}
          />

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
            <span className="subHeading">Edit  Hourly Pay Grade</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Inputs
            props={{ lable: "Pay Grade Name*", placeh: "Transportation" }}
          />
          <Inputs
            props={{ lable: "Hourly Rate*", placeh: "Transportation" }}
          />
    
          <div className="text-center mt-5 mb-5">
            <Link to="" className="mainBtn modalBtn">
              Update
            </Link>
          </div>
        </Modal.Body>
      </Modal>
             <div className="clientHeader mt-4 mb-3">
        <p>
          Human Resources | Payroll | <Link to="">Hourly Pay Grade</Link>
        </p>
        <Link to="" className="mainBtn" onClick={handleShow}>
        Add Pay Grade 
        </Link>
      </div>
      <Link to="" className="mainBtn back"><img src={backarrow} alt="" /> Back</Link>
      <table>
        <thead>
          <tr>
            <th>Pay Grade Name</th>
            <th>Overtime Rate</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Junior Staff</td>
            <td>1000</td>
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
            <td>Junior Staff</td>
            <td>1000</td>
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
            <td>Junior Staff</td>
            <td>1000</td>
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
            <td>Junior Staff</td>
            <td>1000</td>
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
            <td>Junior Staff</td>
            <td>1000</td>
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
            <td>Junior Staff</td>
            <td>1000</td>
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
