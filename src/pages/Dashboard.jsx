import React from 'react'
import ClientDataBlank from './ClientDataBlank'
import PMOverview from './PMOverview'
import AtlanticHallSchool from './AtlanticHallSchool'
import Mechanical from './Mechanical'
import ClentDataCoList from './ClentDataCoList'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Overview from './Overview'
// import ClientDataCoProfilt from './ClientDataCoProfilt'
import Leads from './Leads'
import LeadsJobPosting from './LeadsJobPosting'
import LeadList from './LeadList'
import HrDashboard from './HrDashboard'
import HrDashboardProfile from './HrDashboardProfile'
import HrDashboardEmp from './HrDashboardEmp'
import AddminBlank from './AddminBlank'
import AddminLeave from './AddminLeave'
import UserLeave from './UserLeave'
import Attendance from './Attendance'
import AttendenceMonthly from './AttendenceMonthly'
import AttendenceSummary from './AttendenceSummary'
import AttendenceNoData from './AttendenceNoData'
import AttendenceDaily from './AttendenceDaily'
import JobPostingBlank from './JobPostingBlank'
import JobPosting from './JobPosting'
import Canditate from './Canditate'
import Payroll from './Payroll'
import AccIncome from './AccIncome'
import AccExpense from './AccExpense'
import AccSubstitute from './components/AddminLeaveTable'
import { Routes,Route } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div className='bodyWrapper'>
        <SideBar/>
        <div className="mainContent">
            <NavBar/>
            <Routes>
              <Route path='/' element={<Overview/>}/>
              <Route element={<ClientDataBlank/>} path='ClientDataBlank' />
              <Route path='PMOverview'  element={<PMOverview/>} />
              <Route path='AtlanticHallSchool'  element={<AtlanticHallSchool/>} />
              <Route path='Mechanical'  element={<Mechanical/>} />
              <Route path='ClentDataCoList' element={<ClentDataCoList/>}/>
              <Route path='Leads' element={<Leads/>}/>
              <Route path='LeadsJobPosting' element={<LeadsJobPosting/>}/>
              <Route path='LeadList' element={<LeadList/>}/>
              <Route path='JobPostingBlank' element={<JobPostingBlank/>}/>
              <Route path='HrDashboard' element={<HrDashboard/>}/>
              <Route path='HrDashboardProfile' element={<HrDashboardProfile/>}/>
              <Route path='HrDashboardEmp' element={<HrDashboardEmp/>}/>
              <Route path='AddminBlank' element={<AddminBlank/>}/>
              <Route path='AddminLeave' element={<AddminLeave/>}/>
              <Route path='UserLeave' element={<UserLeave/>}/>
              <Route path='Attendance' element={<Attendance/>}/>
              <Route path='AttendenceMonthly' element={<AttendenceMonthly/>}/>
              <Route path='AttendenceSummary' element={<AttendenceSummary/>}/>
              <Route path='AttendenceNoData' element={<AttendenceNoData/>}/>
              <Route path='AttendenceDaily' element={<AttendenceDaily/>}/>
              <Route path='JobPosting' element={<JobPosting/>}/>
              <Route path='Canditate' element={<Canditate/>}/>
              <Route path='Payroll' element={<Payroll/>}/>
              <Route path='AccIncome' element={<AccIncome/>}/>
              <Route path='AccExpense' element={<AccExpense/>}/>
              <Route path='AccSubstitute' element={<AccSubstitute/>}/>
            </Routes>
        </div>
    </div>
  )
}
