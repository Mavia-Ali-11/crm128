import React from 'react'
export default function AttendenceTableNoData() {
  return (
    <div className='commanTable'>
        <table>
            <thead>
                <tr>
                    <th>date</th>
                    <th>Employee Name</th>
                    <th>Time In</th>
                    <th>Time out</th>
                    <th>Working Time</th>
                    <th>Late</th>
                    <th>Status</th>
                    <th>Options</th>
                </tr>
            </thead>
        </table>
              <h1 className='subHeading emptyTable'>No data Available !</h1>
    </div>
  )
}
