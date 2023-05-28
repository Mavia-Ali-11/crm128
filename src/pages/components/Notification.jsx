import React from 'react'
import avatarContainer from "../../assets/avatarContainer.png"
import dot from "../../assets/bluedot.svg"
import { Link } from 'react-router-dom'
export default function Notification() {
  return (
    <div className='notification'>
        <div className="request">
          <div className="user">

          <img src={dot} alt="" className='dot'/>
          <img src={avatarContainer} alt="" />
            <p>
            Lex Murphy <span>requested access to</span> UNIX directory tree hierarchy  
            </p>
          </div>
            <Link to="" className='accept'>Accept</Link>
            <Link to="" className='reject'>Reject</Link>
            <p className='exsmText'>Today at 9:42 AM</p>
        </div>
        <div className="request">
            <div className="user">
          <img src={dot} alt="" className='dot'/>
            <img src={avatarContainer} alt="" />
            <p>
            Ray Arnold <span>left 6 comments on</span> Isla Nublar SOC2 compliance report
            </p>
            </div>
            <p className='exsmText'>Yesterday at 11:42 PM</p>
        </div>
        <div className="request">
            <div className="user">
            <img src={avatarContainer} alt="" />
            <p>
            Ray Arnold <span>left 6 comments on</span> Isla Nublar SOC2 compliance report
            </p>
            </div>
            <p className='exsmText'>Last Wednesday at 11:15 AM</p>
        </div>
    </div>
  )
}
