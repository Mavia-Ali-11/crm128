import React from 'react'
import CandidateTable from "./components/CandidateTable"
import PaginationCom from './components/PaginationComp'
import { Link } from 'react-router-dom'
export default function Canditate() {
  return (
    <div className='clientData'>
             <div className="clientHeader mt-3 mb-4">
            <p>Human  Resources  |  Recruitment  |  Job Post List  |  <Link to="">Candidates List</Link></p>
          
        </div>
      <CandidateTable/>
      <PaginationCom/>
    </div>
  )
}
