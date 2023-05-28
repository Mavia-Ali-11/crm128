import React from 'react';
import ProgressCard from "./ProgressCard";
import CommanTable from "./CommanTable";
import Inputs from "./Inputs";
import { Offcanvas, Row, Col } from "react-bootstrap";


const PMOverviewGridView= () => {
  return (
    <div className="overview">
        <Row>
          <Col lg={12}>
            <h6 className="mainHeading">Ongoing Projects</h6>
            <Row>
              <Col lg={3}>
                <ProgressCard url="/dashboard/AtlanticHallSchool" mainHeading="Atlantic Hall School"/>
              </Col>
              <Col lg={3}>
                <ProgressCard mainHeading="Atlantic Hall School" />
              </Col>
              <Col lg={3}>
                <ProgressCard mainHeading="Atlantic Hall School" />
              </Col>
              <Col lg={3}>
                <ProgressCard mainHeading="Atlantic Hall School" />
              </Col>
            </Row>
            <div className="mt-5">
              <h6 className="mainHeading">Completed Projects</h6>
              <Row>
                <Col lg={3}>
                  <ProgressCard mainHeading="Atlantic Hall School" />
                </Col>
                <Col lg={3}>
                  <ProgressCard mainHeading="Atlantic Hall School" />
                </Col>
                <Col lg={3}>
                  <ProgressCard mainHeading="Atlantic Hall School" />
                </Col>
                <Col lg={3}>
                  <ProgressCard mainHeading="Atlantic Hall School" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
  )
}

export default PMOverviewGridView