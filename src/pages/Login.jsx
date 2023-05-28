import React,{useState} from 'react'
import {Container,Row,Col} from "react-bootstrap"
import { Link } from 'react-router-dom'
import eye from "../assets/eye.svg"
import obstacle1 from "../assets/obstacles1.png"
import obstacle2 from "../assets/obstacles2.png"
import obstacle3 from "../assets/obstacles3.png"
export default function Login() {
    const [hideShow, setHideShow] = useState(false)
  return (
    <div className='loginPage'>
        <img src={obstacle1} alt="" className='obstacle1'/>
        <img src={obstacle2} alt="" className='obstacle2'/>
        <img src={obstacle3} alt="" className='obstacle3'/>
        <Container>
            <Row>
                <Col lg={6}>
                    <h1 className="loginHeading">CRM<span>128</span></h1>
                    <p className="mainText">
                        Collect more leads manage your projects and staff, keep record of your finances, all in one place CRM128
                    </p>
                </Col>
                <Col lg={6} className="mx-auto">
                    <form action="#">
                        <label htmlFor="email">Email/Staff ID</label>
                        <input type="email" placeholder='sample@mail.com/10035' required id='email'/>
                        <label htmlFor="password">Password</label>
                        <div className="passwordBox">
                        <input type={hideShow?"text":"password"} required id='password'/>
                        <img src={eye} alt="" onClick={()=>{
                            setHideShow(!hideShow)
                        }}/>
                        </div>
                        <div className="forgot">
                            <div><input type="checkbox" id='check'/>
                            <label htmlFor='check' className='ms-2'>Remember me </label></div>
                            <Link to="">Forgot Password?</Link>
                        </div>
                        <div className='text-center'>
                        <Link to={"/dashboard"} className='mainBtn'>Login</Link>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
