import React from 'react'
import { Link } from 'react-router-dom'
export default function ContactTable() {
  return (
    <div className='commanTable odd'>
        <table>
            <thead>
                <tr>
                <th>Company Name</th>
                <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>GEN122</td>
                    <td>(239) 555-0108</td>
                </tr>
                <tr>
                    <td>Facebook</td>
                    <td>(603) 555-0123</td>
                </tr>
                <tr>
                    <td>Pizza Hut</td>
                    <td>(307) 555-0133</td>
                </tr>
                <tr>
                    <td>IBM</td>
                    <td>(239) 555-0108</td>
                </tr>
                <tr>
                    <td>L'Oréal</td>
                    <td>(480) 555-0103</td>
                </tr>
                <tr>
                    <td>eBay</td>
                    <td>(270) 555-0117</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
