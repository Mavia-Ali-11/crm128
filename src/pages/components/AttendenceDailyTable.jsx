import React from 'react'
import edit from "../../assets/Edit.svg"
import eye from "../../assets/tableEye.svg"
import { Link } from 'react-router-dom'
export default function AttendenceDailyTable() {
  return (
    <div className='commanTable attendence'>
           <table>
            <thead>
                <tr>
                    <th>date</th>
                    <th>Staff ID</th>
                    <th>Employee Name</th>
                    <th>time in</th>
                    <th>time out</th>
                    <th>options</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={eye} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={eye} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={eye} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={eye} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={eye} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={eye} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={eye} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={eye} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={eye} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>10035</td>
                    <td>Deborah Jill</td>
                    <td>08:00</td>
                    <td>17:00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={eye} alt="" /></Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
