import React from 'react'
import edit from "../../assets/Edit.svg"
import delet from "../../assets/Delete.svg"
import { Link } from 'react-router-dom'
export default function AccSubstTable() {
  return (
    <div className='commanTable subs'>
        <table>
            <thead>
                <tr>
                    <th>date</th>
                    <th>Source</th>
                    <th>Category</th>
                    <th>description</th>
                    <th>Amount</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01/02/2023</td>
                    <td>Client 1</td>
                    <td>Contract won</td>
                    <td>Direct discussion with a Client</td>
                    <td>n200,000.00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>Client 2</td>
                    <td>Contract won</td>
                    <td>Direct discussion with a Client</td>
                    <td>n200,000.00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>Client 3</td>
                    <td>Contract won</td>
                    <td>Direct discussion with a Client</td>
                    <td>n200,000.00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>Client 4</td>
                    <td>Contract won</td>
                    <td>Direct discussion with a Client</td>
                    <td>n200,000.00</td>
                    <td>
                        <Link to=""><img src={edit} alt="" /></Link>
                        <Link to=""><img src={delet} alt="" /></Link>
                    </td>
                </tr>
                <tr>
                    <td>01/02/2023</td>
                    <td>Client 5</td>
                    <td>Contract won</td>
                    <td>Direct discussion with a Client</td>
                    <td>n200,000.00</td>
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
