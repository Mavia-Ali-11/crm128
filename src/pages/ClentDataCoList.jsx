import React from 'react'
import ClientList from './components/ClientList'
import blocks from "../assets/blocks.svg"
import vector from "../assets/vector.svg"
import { Link } from 'react-router-dom'
export default function ClentDataCoList() {
  return (
    <div className='clientData'>
             <div className="clientHeader">
            <p>Client Data | <Link to="">Company List</Link></p>
            <div>
               <Link to=""> <img src={vector} alt="" /></Link>
               <Link to=""> <img src={blocks} alt="" /></Link>
            </div>
        </div>
        <div className='text-end mb-3 mt-3'>
              <Link to="" className="mainBtn">Add New Company</Link>
            </div>
        <ClientList/>
    </div>
  )
}
