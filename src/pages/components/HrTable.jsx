import React from "react";
import { Link,useNavigate } from 'react-router-dom'
import h1 from "../../assets/hr (1).png";
import h2 from "../../assets/hr (2).png";
import h3 from "../../assets/hr (3).png";
import h4 from "../../assets/hr (4).png";
import h5 from "../../assets/hr (5).png";
import h6 from "../../assets/hr (6).png";
import h7 from "../../assets/hr (7).png";
import h8 from "../../assets/hr (8).png";
import h9 from "../../assets/hr (9).png";
import dots from "../../assets/dots.svg"
import edit from "../../assets/Edit.svg"
import eye from "../../assets/soeye.svg"
import delet from "../../assets/Delete.svg"
export default function HrTable() {
  const navigate=useNavigate()
  return (
    <div className="commanTable hrTable">
        <table>
      <thead>
          <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Department</th>
          <th>Phone</th>
          <th>Staff ID</th>
          <th>Date Joined</th>
          <th>Status</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr onClick={()=>{navigate("/dashboard/HrDashboardProfile")}}>
          <td>
            <img src={h1} alt="" />
            Josiah Chukuma Femi
          </td>
          <td>Project Engineer</td>
          <td>Electrical</td>
          <td>+234 703 603 9249</td>
          <td>433</td>
          <td>27 January 2022</td>
        <td>Probation</td>
          <td>
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
                   <img src={edit} alt=""/>Edit
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                   <img src={eye} alt=""/>View
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item deleteOption" to="">
                <img src={delet} alt=""/>Delete User
                  </Link>
                </li>
              </ul>
            </div>
          </td>
        </tr>
          <tr onClick={()=>{navigate("/dashboard/HrDashboardProfile")}}>
          <td>
            <img src={h2} alt="" />
            Josiah Chukuma Femi
          </td>
          <td>Project Engineer</td>
          <td>Electrical</td>
          <td>+234 703 603 9249</td>
          <td>433</td>
          <td>27 January 2022</td>
        <td>Probation</td>
          <td>
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
                   <img src={edit} alt=""/>Edit
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                   <img src={eye} alt=""/>View
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item deleteOption" to="">
                <img src={delet} alt=""/>Delete User
                  </Link>
                </li>
              </ul>
            </div>
          </td>
        </tr>
          <tr onClick={()=>{navigate("/dashboard/HrDashboardProfile")}}>
          <td>
            <img src={h3} alt="" />
            Josiah Chukuma Femi
          </td>
          <td>Project Engineer</td>
          <td>Electrical</td>
          <td>+234 703 603 9249</td>
          <td>433</td>
          <td>27 January 2022</td>
        <td>Probation</td>
          <td>
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
                   <img src={edit} alt=""/>Edit
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                   <img src={eye} alt=""/>View
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item deleteOption" to="">
                <img src={delet} alt=""/>Delete User
                  </Link>
                </li>
              </ul>
            </div>
          </td>
        </tr>
          <tr onClick={()=>{navigate("/dashboard/HrDashboardProfile")}}>
          <td>
            <img src={h4} alt="" />
            Josiah Chukuma Femi
          </td>
          <td>Project Engineer</td>
          <td>Electrical</td>
          <td>+234 703 603 9249</td>
          <td>433</td>
          <td>27 January 2022</td>
        <td>Probation</td>
          <td>
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
                   <img src={edit} alt=""/>Edit
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                   <img src={eye} alt=""/>View
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item deleteOption" to="">
                <img src={delet} alt=""/>Delete User
                  </Link>
                </li>
              </ul>
            </div>
          </td>
        </tr>
          <tr onClick={()=>{navigate("/dashboard/HrDashboardProfile")}}>
          <td>
            <img src={h5} alt="" />
            Josiah Chukuma Femi
          </td>
          <td>Project Engineer</td>
          <td>Electrical</td>
          <td>+234 703 603 9249</td>
          <td>433</td>
          <td>27 January 2022</td>
        <td>Probation</td>
          <td>
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
                   
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                   <img src={eye} alt=""/>View
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item deleteOption" to="">
                <img src={delet} alt=""/>Delete User
                  </Link>
                </li>
              </ul>
            </div>
          </td>
        </tr>
          <tr onClick={()=>{navigate("/dashboard/HrDashboardProfile")}}>
          <td>
            <img src={h6} alt="" />
            Josiah Chukuma Femi
          </td>
          <td>Project Engineer</td>
          <td>Electrical</td>
          <td>+234 703 603 9249</td>
          <td>433</td>
          <td>27 January 2022</td>
        <td>Probation</td>
          <td>
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
                   <img src={edit} alt=""/>Edit
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                   <img src={eye} alt=""/>View
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item deleteOption" to="">
                <img src={delet} alt=""/>Delete User
                  </Link>
                </li>
              </ul>
            </div>
          </td>
        </tr>
          <tr onClick={()=>{navigate("/dashboard/HrDashboardProfile")}}>
          <td>
            <img src={h7} alt="" />
            Josiah Chukuma Femi
          </td>
          <td>Project Engineer</td>
          <td>Electrical</td>
          <td>+234 703 603 9249</td>
          <td>433</td>
          <td>27 January 2022</td>
        <td>Probation</td>
          <td>
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
                   <img src={edit} alt=""/>Edit
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                   <img src={eye} alt=""/>View
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item deleteOption" to="">
                <img src={delet} alt=""/>Delete User
                  </Link>
                </li>
              </ul>
            </div>
          </td>
        </tr>
          <tr onClick={()=>{navigate("/dashboard/HrDashboardProfile")}}>
          <td>
            <img src={h8} alt="" />
            Josiah Chukuma Femi
          </td>
          <td>Project Engineer</td>
          <td>Electrical</td>
          <td>+234 703 603 9249</td>
          <td>433</td>
          <td>27 January 2022</td>
        <td>Probation</td>
          <td>
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
                   <img src={edit} alt=""/>Edit
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                   <img src={eye} alt=""/>View
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item deleteOption" to="">
                <img src={delet} alt=""/>Delete User
                  </Link>
                </li>
              </ul>
            </div>
          </td>
        </tr>
          <tr onClick={()=>{navigate("/dashboard/HrDashboardProfile")}}>
          <td>
            <img src={h9} alt="" />
            Josiah Chukuma Femi
          </td>
          <td>Project Engineer</td>
          <td>Electrical</td>
          <td>+234 703 603 9249</td>
          <td>433</td>
          <td>27 January 2022</td>
        <td>Probation</td>
          <td>
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
                   <img src={edit} alt=""/>Edit
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                   <img src={eye} alt=""/>View
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item deleteOption" to="">
                <img src={delet} alt=""/>Delete User
                  </Link>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
        </table>
    </div>
  );
}
