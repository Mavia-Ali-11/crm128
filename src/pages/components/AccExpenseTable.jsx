import React from 'react'
import edit from "../../assets/Edit.svg"
import delet from "../../assets/Delete.svg"
import { Link } from 'react-router-dom'
export default function AccExpenseTable() {
  return (
    <div className='commanTable acc'>
        <div className='mainText totalDetail red'>Total Income : <span className='subHeading'>n100,000.00</span></div>
        <table>
            <thead>
                <tr>
                    <th>date</th>
                    <th>Paid to</th>
                    <th>Category</th>
                    <th>description</th>
                    <th>Amount</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01/02/2023</td>
                    <td>mr. John </td>
                    <td>Maintenance & <br></br>Repairs</td>
                    <td>The water closest needs to be repaired</td>
                    <td>n100,000.00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>mr. John </td>
                    <td>Electrical works</td>
                    <td>Wiring</td>
                    <td>n100,000.00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>mr. John </td>
                    <td>Mechanical</td>
                    <td>Installation of Mechanical units</td>
                    <td>n100,000.00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>mr. John </td>
                    <td>HAVC</td>
                    <td>Installation of HVAC units</td>
                    <td>n100,000.00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>mr. John </td>
                    <td>Electrical works</td>
                    <td>Wiring</td>
                    <td>n100,000.00</td>
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
