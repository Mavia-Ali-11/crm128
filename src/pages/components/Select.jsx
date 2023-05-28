import React from 'react'
import { Dropdown } from 'react-bootstrap'
import arrow from "../../assets/arrow.svg"
export default function Select({props}) {
  return (
    <div className='selectOption'>
        <label htmlFor="" className="subHeading">{props.lable}</label>
        <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
      <div className="dropDownArrow">
      Select <img src={arrow} alt="" />
      </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Planed</Dropdown.Item>
        <Dropdown.Item href="#/action-2">In Progress</Dropdown.Item>
        <Dropdown.Item href="#/action-3">In Review</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Overdue</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Done</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Extra option</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}
