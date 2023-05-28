import React from 'react'
import {Container, Navbar,Nav} from "react-bootstrap"
import search from "../../assets/Search.svg"
import userimg from "../../assets/userimg.png"
import right from "../../assets/right.svg"
// import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div className='navBarSection'>
            <Navbar bg="light" expand="lg">
              <img src={right} alt="" className='sideToggle' onClick={()=>{
                document.querySelector(".sideBar").classList.toggle("show")
              }}/>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
           <div className="navBar">
         
           
           <div className="searchBox">
           <input type="search" name="" id="" placeholder='Search'/>
            <img src={search} alt="" />
           </div>
           <div className="userInfo">
            <img src={userimg} alt="" />
            <div>
                <h1 className="username">Josiah Gana</h1>
                <h6 className="userScope">Admin</h6>
            </div>
           </div>
           </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
