import React from "react";
import open from "../assets/soeye.svg";
import close from "../assets/sceye.svg";
import { Col, Row } from "react-bootstrap";
import AccSubstTable from "./components/AccSubstTable";
import PaginationCom from "./components/PaginationComp";
import { Link } from 'react-router-dom'
export default function AccSubstitute() {
  return (
    <div className="clientData">
      <div className="clientHeader substitute">
        <p>
          Accounting | <Link to="">Income</Link>
        </p>
        <div>
          <Link to="" className="mainBtn white">
            Add Expense
          </Link>
          <Link to="" className="mainBtn">
            Add Income
          </Link>
        </div>
      </div>
      <Row>
        <Col lg={4}>
            <div className="substitudeCard">
                <div className="mainText">
                INCOME
                <img src={open} alt="" className="ms-4"/>
                </div>
                <h1>
                N200,000.00
                </h1>
            </div>
        </Col>
        <Col lg={4}>
        <div className="substitudeCard blur">
                <div className="mainText">
                INCOME
                <img src={close} alt="" className="ms-4"/>
                </div>
                <h1>
                N200,000.00
                </h1>
            </div>
        </Col>
        <Col lg={4}>
        <div className="substitudeCard red">
                <div className="mainText">
                INCOME
                <img src={open} alt="" className="ms-4"/>
                </div>
                <h1>
                N200,000.00
                </h1>
            </div>
        </Col>
      </Row>
      <AccSubstTable/>
      <PaginationCom/>
    </div>
  );
}
