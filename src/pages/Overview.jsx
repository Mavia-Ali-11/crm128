import React from "react";
import { Row, Col} from "react-bootstrap";
import ProgressCard from "./components/ProgressCard";
import CommanTable from "./components/CommanTable";
import chart from "../assets/chart.png";
import RightBar from "./components/RightBar";
import { Link } from 'react-router-dom'
export default function Overview() {
  return (
    <div className="overview">
          <div className="container">
            <Row>
              <Col lg={8}>
                <div className="overviewCard">
                  <h6 className="mainHeading">Ongoing Projects</h6>
                  <Row>
                    <Col lg={4}>
                      <ProgressCard />
                    </Col>
                    <Col lg={4}>
                      <ProgressCard />
                    </Col>
                    <Col lg={4}>
                      <ProgressCard />
                    </Col>
                  </Row>
                </div>
                <div className="overviewCard">
                  <div className="commonHeader">
                    <h6 className="mainHeading">List of Task</h6>
                    <Link to="" className="commonBtn">
                      <span>+</span> Add Task
                    </Link>
                  </div>
                  <CommanTable />
                </div>
                <div className="overviewCard">
                <div className="commonHeader">
                    <h6 className="mainHeading">Income vs Expenses</h6>
                     <select className="leadSelect">
                      <option value="">Monthly</option>
                     </select>
                  </div>
                  <img src={chart} alt="" className="testChart" />
                </div>
              </Col>
              <Col lg={4}>
                    <RightBar/>
              </Col>
            </Row>
          </div>
    </div>
  );
}
