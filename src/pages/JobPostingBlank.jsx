import React from 'react'
import JobPostingBtn from './components/JobPostingBtn'
import NothingHere from './components/NothingHere'
import { Link } from 'react-router-dom'
export default function JobPostingBlank() {
  return (
    <div className='clientData'>
         <div className="clientHeader">
      <p>Human  Resources | Recruitment | <Link to="">Job Post</Link></p>
      {/* <Link to="" className='mainBtn'>Add New Job Post</Link> */}
      <JobPostingBtn props={{btnName:"Add New Job Post",job:"Add New Job Post"}}/>
    </div>
    <NothingHere/>
    </div>
  )
}
