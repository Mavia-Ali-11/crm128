import React from "react";
import {Tab, Tabs } from "react-bootstrap";
import AllownceTable from "./components/AllownceTable";
import DeductionTable from "./components/DeductionTable";
import HourlyPayGradeTable from "./components/HourlyPayGradeTable";
import MyPayrollTable from "./components/MyPayrollTable";
import PaginationCom from "./components/PaginationComp";
import PayGradeTable from "./components/PayGradeTable";
import PaymentHistoryTable from "./components/PaymentHistoryTable";
import SalerySheetTable from "./components/SalerySheetTable";
export default function Payroll() {
  return (
    <div className="clientData payroll">
      {/* <div className="clientHeader mt-4 mb-3">
        <p>
          Human Resources | Payroll | <Link to="">Generate Salary Sheet</Link>
        </p>
        <Link to="" className="mainBtn">
        Generate Payslip
        </Link>
      </div>
      <Row>
        <Col lg={3}></Col>
        <Col lg={3}>
          <Inputs props={{lable:"Month*",placeh:"DD-MM-YYYY"}}/>
        </Col>
        <Col lg={3}>
          <Select props={{lable:"Status"}}/>
        </Col>
        <Col lg={3}></Col>
      </Row> */}
      <Tabs defaultActiveKey={"tab1"}>
        <Tab eventKey="tab1" title="Allowance">
          <AllownceTable />
        </Tab>
        <Tab eventKey="tab2" title="Deduction">
          <DeductionTable />
        </Tab>
        <Tab eventKey="tab3" title="Pay Grade">
          <PayGradeTable />
        </Tab>
        <Tab eventKey="tab4" title="Hourly Pay Grade">
          <HourlyPayGradeTable />
        </Tab>
        <Tab eventKey="tab5" title="My Payroll">
          <MyPayrollTable />
        </Tab>
        <Tab eventKey="tab6" title="Payment History">
          <PaymentHistoryTable />
        </Tab>
        <Tab eventKey="tab7" title="Bonus">
          Content for Tab 7
        </Tab>
        <Tab eventKey="tab8" title="Generate Salary Sheet">
          <SalerySheetTable />
        </Tab>
      </Tabs>
      <PaginationCom />
    </div>
  );
}
