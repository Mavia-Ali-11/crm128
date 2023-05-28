import React from 'react'
import folder from "../../assets/folder.png";
export default function NothingHere() {
  return (
    <div>
              <div className="addCompany">
        <img src={folder} alt="" />
        <h1>Nothing here to see.</h1>
        <h6>
          There are no items in this folder. The folder is currently empty
        </h6>
      </div>
    </div>
  )
}
