import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function ActivitiesTable() {
  const navigate=useNavigate()
  return (
    <div className='commanTable activitiesTable'>
        <table>
            <thead>
                <tr>
                    <th>Tasks</th>
                    <th>Unit</th>
                    <th>Assigned to</th>
                    <th>Due Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Installation of A Mechanical... </td>
                    <td onClick={()=>{navigate("/dashboard/Mechanical")}}>Mechanical</td>
                    <td>John Doe</td>
                    <td>30 Jun 2023</td>
                </tr>
                <tr>
                <td>Installation of A Mechanical... </td>
                    <td>Electrical</td>
                    <td>John Doe</td>
                    <td>30 Jun 2023</td>
                </tr>
                <tr>
                <td>Installation of A Mechanical... </td>
                <td onClick={()=>{navigate("/dashboard/Mechanical")}}>Mechanical</td>
                    <td>John Doe</td>
                    <td>30 Jun 2023</td>
                </tr>
                <tr>
                <td>Installation of A Mechanical... </td>
                    <td>Civil</td>
                    <td>John Doe</td>
                    <td>30 Jun 2023</td>
                </tr>
                <tr>
                <td>Installation of A Mechanical... </td>
                    <td>HAVC</td>
                    <td>John Doe</td>
                    <td>30 Jun 2023</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
