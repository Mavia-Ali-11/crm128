import React from "react";
import NothingHere from "./components/NothingHere";
import { Link } from 'react-router-dom'
export default function AddminBlank() {
  return (
    <div className="clientData">
      <div className="clientHeader">
        <p>
          Dashboard | Leave Management | Leave Applications | <Link to="">Human Resources</Link>
        </p>
      </div>
        <NothingHere/>
    </div>
  );
}
