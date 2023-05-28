import React from 'react'
import { Link } from 'react-router-dom'
import arrow from "../../assets/arrow.svg"
import c1 from "../../assets/candidate (1).png"
import c2 from "../../assets/candidate (2).png"
import c3 from "../../assets/candidate (3).png"
import c4 from "../../assets/candidate (4).png"
import c5 from "../../assets/candidate (5).png"
import c6 from "../../assets/candidate (6).png"
import c7 from "../../assets/candidate (7).png"
import c8 from "../../assets/candidate (8).png"
import c9 from "../../assets/candidate (9).png"
import c10 from "../../assets/candidate (10).png"
export default function CandidateTable() {
  return (
    <div className='commanTable candidate'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Salary Expectation</th>
                    <th>Notice Period</th>
                    <th>Date Applied</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src={c1} alt="" />
                        Josiah Haruna Bawa
                    </td>
                    <td>2464 Royal Ln. Mesa, New<br></br> Jersey 45463</td>
                    <td>610,000</td>
                    <td>2 Weeks</td>
                    <td>27 January 2023</td>
                    <td>
                    <div className="dropdown">
                <button
                  className="btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    Suspended
                  <img src={arrow} alt="" />
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
                        <img src={c2} alt="" />
                        Josiah Haruna Bawa
                    </td>
                    <td>2464 Royal Ln. Mesa, New<br></br> Jersey 45463</td>
                    <td>610,000</td>
                    <td>2 Weeks</td>
                    <td>27 January 2023</td>
                    <td>
                    <div className="dropdown">
                <button
                  className="btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    Suspended
                  <img src={arrow} alt="" />
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
                        <img src={c3} alt="" />
                        Josiah Haruna Bawa
                    </td>
                    <td>2464 Royal Ln. Mesa, New<br></br> Jersey 45463</td>
                    <td>610,000</td>
                    <td>2 Weeks</td>
                    <td>27 January 2023</td>
                    <td>
                    <div className="dropdown">
                <button
                  className="btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    Suspended
                  <img src={arrow} alt="" />
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
                        <img src={c4} alt="" />
                        Josiah Haruna Bawa
                    </td>
                    <td>2464 Royal Ln. Mesa, New<br></br> Jersey 45463</td>
                    <td>610,000</td>
                    <td>2 Weeks</td>
                    <td>27 January 2023</td>
                    <td>
                    <div className="dropdown">
                <button
                  className="btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    Suspended
                  <img src={arrow} alt="" />
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
                        <img src={c5} alt="" />
                        Josiah Haruna Bawa
                    </td>
                    <td>2464 Royal Ln. Mesa, New<br></br> Jersey 45463</td>
                    <td>610,000</td>
                    <td>2 Weeks</td>
                    <td>27 January 2023</td>
                    <td>
                    <div className="dropdown">
                <button
                  className="btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    Suspended
                  <img src={arrow} alt="" />
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
                        <img src={c6} alt="" />
                        Josiah Haruna Bawa
                    </td>
                    <td>2464 Royal Ln. Mesa, New<br></br> Jersey 45463</td>
                    <td>610,000</td>
                    <td>2 Weeks</td>
                    <td>27 January 2023</td>
                    <td>
                    <div className="dropdown">
                <button
                  className="btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    Suspended
                  <img src={arrow} alt="" />
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
                        <img src={c7} alt="" />
                        Josiah Haruna Bawa
                    </td>
                    <td>2464 Royal Ln. Mesa, New<br></br> Jersey 45463</td>
                    <td>610,000</td>
                    <td>2 Weeks</td>
                    <td>27 January 2023</td>
                    <td>
                    <div className="dropdown">
                <button
                  className="btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    Suspended
                  <img src={arrow} alt="" />
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
                        <img src={c8} alt="" />
                        Josiah Haruna Bawa
                    </td>
                    <td>2464 Royal Ln. Mesa, New<br></br> Jersey 45463</td>
                    <td>610,000</td>
                    <td>2 Weeks</td>
                    <td>27 January 2023</td>
                    <td>
                    <div className="dropdown">
                <button
                  className="btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    Suspended
                  <img src={arrow} alt="" />
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
                        <img src={c9} alt="" />
                        Josiah Haruna Bawa
                    </td>
                    <td>2464 Royal Ln. Mesa, New<br></br> Jersey 45463</td>
                    <td>610,000</td>
                    <td>2 Weeks</td>
                    <td>27 January 2023</td>
                    <td>
                    <div className="dropdown">
                <button
                  className="btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    Suspended
                  <img src={arrow} alt="" />
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
                        <img src={c10} alt="" />
                        Josiah Haruna Bawa
                    </td>
                    <td>2464 Royal Ln. Mesa, New<br></br> Jersey 45463</td>
                    <td>610,000</td>
                    <td>2 Weeks</td>
                    <td>27 January 2023</td>
                    <td>
                    <div className="dropdown">
                <button
                  className="btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    Suspended
                  <img src={arrow} alt="" />
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
