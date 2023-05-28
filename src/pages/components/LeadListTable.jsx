import React from "react";
import dots from "../../assets/dots.svg";
import fail from "../../assets/fail2.svg";
import win from "../../assets/win2.svg";
import { Link } from 'react-router-dom'
export default function LeadListTable() {
  return (
    <div className="commanTable">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Company</th>
            <th>Contact</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sample Deal Title</td>
            <td>350,000,000,000</td>
            <td>eBay</td>
            <td>Henry, Arthur</td>
            <td>30 Jun 2023</td>
            <td>Contact Made</td>
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
              <span className="resp gray">Reopen</span>
              <span className="resp lost">Lost <img src={fail} alt="" /></span>
            </td>
          </tr>
          <tr>
            <td>Sample Deal Title</td>
            <td>350,000,000,000</td>
            <td>Gillette</td>
            <td>Henry, Arthur</td>
            <td>30 Jun 2023</td>
            <td>Contact Made</td>
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
              <span className="resp win">Won <img src={win} alt="" /></span>
              <span className="resp gray">Reopen</span>
            </td>
          </tr>
          <tr>
            <td>Sample Deal Title</td>
            <td>350,000,000,000</td>
            <td>Louis Vuitton</td>
            <td>Henry, Arthur</td>
            <td>30 Jun 2023</td>
            <td>Contact Made</td>
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
              <span className="resp win silent">Lost <img src={win} alt="" /></span>
              <span className="resp lost silent">Lost <img src={fail} alt="" /></span>
            </td>
          </tr>
          <tr>
            <td>Sample Deal Title</td>
            <td>350,000,000,000</td>
            <td>Mitsubishi</td>
            <td>Black, Marvin</td>
            <td>30 Jun 2023</td>
            <td>Contact Made</td>
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
              <span className="resp win silent">Lost <img src={win} alt="" /></span>
              <span className="resp lost silent">Lost <img src={fail} alt="" /></span>
            </td>
          </tr>
          <tr>
            <td>Sample Deal Title</td>
            <td>350,000,000,000</td>
            <td>L'Oréal</td>
            <td>Henry, Arthur</td>
            <td>30 Jun 2023</td>
            <td>Contact Made</td>
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
              <span className="resp gray">Reopen</span>
              <span className="resp lost">Lost <img src={fail} alt="" /></span>
            </td>
          </tr>
          <tr>
            <td>Sample Deal Title</td>
            <td>350,000,000,000</td>
            <td>Nintendo</td>
            <td>Miles, Esther</td>
            <td>30 Jun 2023</td>
            <td>Contact Made</td>
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
              <span className="resp gray">Reopen</span>
              <span className="resp lost">Lost <img src={fail} alt="" /></span>
            </td>
          </tr>
          <tr>
            <td>Sample Deal Title</td>
            <td>350,000,000,000</td>
            <td>MasterCard</td>
            <td>Esther</td>
            <td>30 Jun 2023</td>
            <td>Contact Made</td>
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
              <span className="resp win">Lost <img src={win} alt="" /></span>
              <span className="resp gray">Reopen</span>
            </td>
          </tr>
          <tr>
            <td>Sample Deal Title</td>
            <td>350,000,000,000</td>
            <td>Facebook</td>
            <td>Black, Marvin</td>
            <td>30 Jun 2023</td>
            <td>Contact Made</td>
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
              <span className="resp win">Lost <img src={win} alt="" /></span>
              <span className="resp gray">Reopen</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
