import React from "react";
import AttendenceDailyTable from "./components/AttendenceDailyTable";
import PaginationCom from "./components/PaginationComp";
import { Link } from 'react-router-dom'
export default function AttendenceDaily() {
  return (
    <div className="clientData">
      <div className="clientHeader mt-4 mb-3">
        <p>
          Human Resources | Attendance | <Link to="">Daily Attendance</Link>
        </p>
        <Link to="" className="mainBtn">
          Add Attendance
        </Link>
      </div>
      <AttendenceDailyTable />
      <PaginationCom />
    </div>
  );
}
