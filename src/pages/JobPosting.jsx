import React from 'react'
import JobPostingBtn from './components/JobPostingBtn'
import JobPostingTable from './components/JobPostingTable'
import PaginationCom from './components/PaginationComp'
import { Link } from 'react-router-dom'
export default function JobPosting() {
  return (
    <div className='clientData'>
            <div className="clientHeader mt-3 mb-4">
            <p>Human  Resources| Recruitment | <Link to="">Job Post List</Link></p>
            <div>
              <JobPostingBtn props={{btnName:"Create New Job Post",job:"Create New Job Post"}}/>
            </div>
        </div>
        <JobPostingTable/>
        <PaginationCom/>
    </div>
  )
}
