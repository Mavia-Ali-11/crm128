import React from 'react'
export default function Inputs({props}) {
  
  return (
    <div >
         <label htmlFor="" className="subHeading">{props.lable}</label>
            <input type={props.placeh==="DD-MM-YYYY"?"date":"text"} name="" id="" placeholder={props.placeh}  className='leadInput'/>
    </div>
  )
}
