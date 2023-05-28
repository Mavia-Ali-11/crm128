import React from 'react'
import edit from "../../assets/Edit.svg"
import delet from "../../assets/Delete.svg"
import { Link } from 'react-router-dom'
export default function AttendenceSummaryTable() {
  return (
    <div className='commanTable attendence'>
        <table>
            <thead>
                <tr>
                    <th>date</th>
                    <th>Staff ID</th>
                    <th>Employee Name</th>
                    <th>Position</th>
                    <th>Total Working Hours</th>
                    <th>Status</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>UI/UX Designer</td>
                    <td>9hours</td>
                    <td>Absent</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>UI/UX Designer</td>
                    <td>9hours</td>
                    <td>Absent</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>UI/UX Designer</td>
                    <td>9hours</td>
                    <td>Present</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>UI/UX Designer</td>
                    <td>9hours</td>
                    <td>Present</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>UI/UX Designer</td>
                    <td>9hours</td>
                    <td>Present</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>UI/UX Designer</td>
                    <td>9hours</td>
                    <td>Present</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>UI/UX Designer</td>
                    <td>9hours</td>
                    <td>Present</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>UI/UX Designer</td>
                    <td>9hours</td>
                    <td>Present</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>UI/UX Designer</td>
                    <td>9hours</td>
                    <td>Present</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>UI/UX Designer</td>
                    <td>9hours</td>
                    <td>Present</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>UI/UX Designer</td>
                    <td>9hours</td>
                    <td>Present</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
               
            </tbody>
        </table>
    </div>
  )
}
