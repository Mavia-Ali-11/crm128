import React from "react";
import AddminLeaveTable from "./components/AddminLeaveTable";
import PaginationCom from "./components/PaginationComp";
import { Link } from 'react-router-dom'
export default function AddminLeave() {
  return (
    <div className="clientData">
      <div className="clientHeader mt-4 mb-3">
        <p>
          Dashboard | Leave Management | Leave Applications |{" "}
          <Link to="">Human Resources</Link>
        </p>
      </div>
      <AddminLeaveTable />
      <PaginationCom />
    </div>
  );
}
