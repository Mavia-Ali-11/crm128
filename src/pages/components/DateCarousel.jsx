import React from 'react'
import { Carousel } from "react-bootstrap";
export default function DateCarousel() {
  return (
    <div className="carouselBox">
    <Carousel>
  <Carousel.Item>
    <div className="carouselItem">
    <div className="dateBox">
    <div className="mainText">Sat</div>
   <div className="mainText">9</div>
    </div>
    <div className="dateBox">
    <div className="mainText">Sun</div>
   <div className="mainText">10</div>
    </div>
    <div className="dateBox">
    <div className="mainText">Mon</div>
   <div className="mainText">11</div>
   <span></span>
    </div>
    <div className="dateBox">
    <div className="mainText">Tue</div>
   <div className="mainText">12</div>
    </div>
    <div className="dateBox">
    <div className="mainText">Wed</div>
   <div className="mainText">13</div>
   <span></span>
    </div>
    <div className="dateBox thu">
    <div className="mainText">Thu</div>
   <div className="mainText">14</div>
   <span></span>
    </div>
    <div className="dateBox">
    <div className="mainText">Fri</div>
   <div className="mainText">15</div>
    </div>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className="carouselItem">
    <div className="dateBox">
    <div className="mainText">Sat</div>
   <div className="mainText">9</div>
    </div>
    <div className="dateBox">
    <div className="mainText">Sun</div>
   <div className="mainText">10</div>
    </div>
    <div className="dateBox">
    <div className="mainText">Mon</div>
   <div className="mainText">11</div>
   <span></span>
    </div>
    <div className="dateBox">
    <div className="mainText">Tue</div>
   <div className="mainText">12</div>
    </div>
    <div className="dateBox">
    <div className="mainText">Wed</div>
   <div className="mainText">13</div>
   <span></span>
    </div>
    <div className="dateBox thu">
    <div className="mainText">Thu</div>
   <div className="mainText">14</div>
   <span></span>
    </div>
    <div className="dateBox">
    <div className="mainText">Fri</div>
   <div className="mainText">15</div>
    </div>
    </div>
  </Carousel.Item>
 </Carousel>
    </div>
  )
}
