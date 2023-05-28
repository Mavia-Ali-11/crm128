import React from "react";
import ProgressCard from "./ProgressCard";
import Inputs from "./Inputs";
import { Offcanvas, Row, Col } from "react-bootstrap";
import user from "../../assets/user2.png";
import DropdownMenu from "./DropdownMenu";

const PMOverviewListView = () => {
  return (
    <>
      <div className="commanTable">
        <h6 className="mainHeading">Ongoing Projects</h6>
        <table>
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Project Lead</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>%completion</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ATLANTIC HALL SCHOOL </td>
              <td>John Doe</td>
              <td>24 Nov. 2022</td>
              <td>30 Jun 2023</td>
              <td>In Progress</td>
              <td>78% Complete</td>
              <td>
                
                <DropdownMenu />
              </td>
            </tr>
            <tr>
              <td>ATLANTIC HALL SCHOOL </td>
              <td>John Doe</td>
              <td>24 Nov. 2022</td>
              <td>30 Jun 2023</td>
              <td>In Progress</td>
              <td>78% Complete</td>
              <td>
                
                <DropdownMenu />
              </td>
            </tr>
            <tr>
              <td>ATLANTIC HALL SCHOOL </td>
              <td>John Doe</td>
              <td>24 Nov. 2022</td>
              <td>30 Jun 2023</td>
              <td>In Progress</td>
              <td>78% Complete</td>
              <td>
                
                <DropdownMenu />
              </td>
            </tr>
            <tr>
              <td>ATLANTIC HALL SCHOOL </td>
              <td>John Doe</td>
              <td>24 Nov. 2022</td>
              <td>30 Jun 2023</td>
              <td>In Progress</td>
              <td>78% Complete</td>
              <td>
                
                <DropdownMenu />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="commanTable mt-5 ">
        <h6 className="mainHeading">Completed Projects</h6>
        <table>
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Project Lead</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>%completion</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ATLANTIC HALL SCHOOL </td>
              <td>John Doe</td>
              <td>24 Nov. 2022</td>
              <td>30 Jun 2023</td>
              <td>In Progress</td>
              <td>78% Complete</td>
              <td>
                
                <DropdownMenu />
              </td>
            </tr>
            <tr>
              <td>ATLANTIC HALL SCHOOL </td>
              <td>John Doe</td>
              <td>24 Nov. 2022</td>
              <td>30 Jun 2023</td>
              <td>In Progress</td>
              <td>78% Complete</td>
              <td>
                <DropdownMenu />
              </td>
            </tr>
            <tr>
              <td>ATLANTIC HALL SCHOOL </td>
              <td>John Doe</td>
              <td>24 Nov. 2022</td>
              <td>30 Jun 2023</td>
              <td>In Progress</td>
              <td>78% Complete</td>
              <td>
                
                <DropdownMenu />
              </td>
            </tr>
            <tr>
              <td>ATLANTIC HALL SCHOOL </td>
              <td>John Doe</td>
              <td>24 Nov. 2022</td>
              <td>30 Jun 2023</td>
              <td>In Progress</td>
              <td>78% Complete</td>
              <td>
                
                <DropdownMenu />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PMOverviewListView;
