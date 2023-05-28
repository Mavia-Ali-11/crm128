import React from "react";
import { Link } from 'react-router-dom'
import dots from "../../assets/dots.svg";
export default function ClientList() {
  return (
    <div className="commanTable">
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>contact</th>
            <th>Company type</th>
            <th>Email</th>
            <th>Website</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daniel & Sons Ltd.</td>
            <td>+2346478999810</td>
            <td>School</td>
            <td>atlantichall.edu@gmail.com</td>
            <td>atlantichall.edu.ng</td>
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
            <td>Daniel & Sons Ltd.</td>
            <td>+2346478999810</td>
            <td>School</td>
            <td>atlantichall.edu@gmail.com</td>
            <td>atlantichall.edu.ng</td>
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
            <td>Daniel & Sons Ltd.</td>
            <td>+2346478999810</td>
            <td>School</td>
            <td>atlantichall.edu@gmail.com</td>
            <td>atlantichall.edu.ng</td>
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
            <td>Daniel & Sons Ltd.</td>
            <td>+2346478999810</td>
            <td>IT</td>
            <td>atlantichall.edu@gmail.com</td>
            <td>atlantichall.edu.ng</td>
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
  );
}
