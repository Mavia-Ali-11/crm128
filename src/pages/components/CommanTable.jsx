import React from 'react'
export default function CommanTable() {
  return (
    <div className='commanTable'>
        <table>
            <thead>
                <tr>
                    <th>Task Project</th>
                    <th>Unit</th>
                    <th>Assigned to</th>
                    <th>Due Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Installation of a... </td>
                    <td>Atlantic Hall School</td>
                    <td>Mechanical</td>
                    <td>Black, Marvin</td>
                    <td>30 Jun 2023</td>
                </tr>
                <tr>
                    <td>Construction of a...</td>
                    <td>Emzor Pham</td>
                    <td>Electrical</td>
                    <td>Henry, Arthur</td>
                    <td>30 Jun 2023</td>
                </tr>
                <tr>
                    <td>Roofing</td>
                    <td>Atlantic Hall School</td>
                    <td>Mechanical</td>
                    <td>Miles, Esther</td>
                    <td>30 Jun 2023</td>
                </tr>
                <tr>
                    <td>Installation of a...</td>
                    <td>Atlantic Hall School</td>
                    <td>Mechanical</td>
                    <td>Cooper, Kristin</td>
                    <td>30 Jun 2023</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
