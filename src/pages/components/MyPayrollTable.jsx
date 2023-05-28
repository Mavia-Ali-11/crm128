import React from 'react'
import img from "../../assets/hr (8).png"
import dots from "../../assets/dots.svg";
import backarrow from "../../assets/backarrow.svg";
import { Link } from 'react-router-dom'
export default function MyPayrollTable() {
  return (
    <div className='commanTable payrollTable'>
         <div className="clientHeader mt-4 mb-3">
        <p>
          Human Resources | Payroll | <Link to="">My Payroll</Link>
        </p>
      </div>
      <Link to="" className='mainBtn back'><img src={backarrow} alt="" /> Back</Link>
         <table>
            <thead>
                <tr>
                    <th>Employee Name</th>
                    <th>Month</th>
                    <th>Pay Grade</th>
                    <th>Net Salary</th>
                    <th>Gross Salary</th>
                    <th>Status</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                 <td>
                    <img src={img} alt="" />
                    John c. Joe
                 </td>
                 <td>Project Engineer</td>
                 <td>Senior<br></br>Management</td>
                 <td>350,000</td>
                 <td>380,000</td>
                 <td>Paid</td>
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
                 </td>
                </tr>
                <tr>
                 <td>
                    <img src={img} alt="" />
                    John c. Joe
                 </td>
                 <td>Project Engineer</td>
                 <td>Senior<br></br>Management</td>
                 <td>350,000</td>
                 <td>380,000</td>
                 <td>Paid</td>
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
                 </td>
                </tr>
                <tr>
                 <td>
                    <img src={img} alt="" />
                    John c. Joe
                 </td>
                 <td>Project Engineer</td>
                 <td>Senior<br></br>Management</td>
                 <td>350,000</td>
                 <td>380,000</td>
                 <td>Paid</td>
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
                 </td>
                </tr>
                <tr>
                 <td>
                    <img src={img} alt="" />
                    John c. Joe
                 </td>
                 <td>Project Engineer</td>
                 <td>Senior<br></br>Management</td>
                 <td>350,000</td>
                 <td>380,000</td>
                 <td>Paid</td>
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
                 </td>
                </tr>
                <tr>
                 <td>
                    <img src={img} alt="" />
                    John c. Joe
                 </td>
                 <td>Project Engineer</td>
                 <td>Senior<br></br>Management</td>
                 <td>350,000</td>
                 <td>380,000</td>
                 <td>Paid</td>
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
                 </td>
                </tr>
                <tr>
                 <td>
                    <img src={img} alt="" />
                    John c. Joe
                 </td>
                 <td>Project Engineer</td>
                 <td>Senior<br></br>Management</td>
                 <td>350,000</td>
                 <td>380,000</td>
                 <td>Paid</td>
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
                 </td>
                </tr>
                <tr>
                 <td>
                    <img src={img} alt="" />
                    John c. Joe
                 </td>
                 <td>Project Engineer</td>
                 <td>Senior<br></br>Management</td>
                 <td>350,000</td>
                 <td>380,000</td>
                 <td>Paid</td>
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
                 </td>
                </tr>
                <tr>
                 <td>
                    <img src={img} alt="" />
                    John c. Joe
                 </td>
                 <td>Project Engineer</td>
                 <td>Senior<br></br>Management</td>
                 <td>350,000</td>
                 <td>380,000</td>
                 <td>Paid</td>
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
                 </td>
                </tr>
                <tr>
                 <td>
                    <img src={img} alt="" />
                    John c. Joe
                 </td>
                 <td>Project Engineer</td>
                 <td>Senior<br></br>Management</td>
                 <td>350,000</td>
                 <td>380,000</td>
                 <td>Paid</td>
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
                 </td>
                </tr>
                <tr>
                 <td>
                    <img src={img} alt="" />
                    John c. Joe
                 </td>
                 <td>Project Engineer</td>
                 <td>Senior<br></br>Management</td>
                 <td>350,000</td>
                 <td>380,000</td>
                 <td>Paid</td>
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
                 </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
