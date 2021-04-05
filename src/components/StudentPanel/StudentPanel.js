import './StudentPanel.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

import { Row, Col } from 'react-bootstrap';

function StudentPanel({props}) {
  const [selectedSubject, setSelectedSubject] = useState(props?.subject || "Physics");
  console.log(props);
    return (
       <div className="container">
           
    
        <div className="Dashboard__heading_row">
          <div className="arrow">
            <Link to="/dashboard"><img src={require('../../assets/images/arrow.png').default}  alt="arrow" width="40px"/></Link>
          </div>
          <div className="Dashboard__title">My&nbsp;Subjects</div>
          <div className="Dashboard__line" />
        </div>

         <section className="subjects_dropdown">
            <select className="browser-default" onChange={(e)=>setSelectedSubject(e.target.value)}>
                <option value="Maths" selected={props?.subject==="Maths"}>Maths</option>
                <option value="Physics" selected={props?.subject==="Physics"}>Physics</option>
                <option value="Chemistry" selected={props?.subject==="Chemistry"}>Chemistry</option>
                <option value="Computer" selected={props?.subject==="Computer"}>Computer</option>
                <option value="English" selected={props?.subject==="English"}>English</option>
                <option value="Literature" selected={props?.subject==="Literature"}>Literature</option>
           </select>
         </section>

         <section>
           <h3>Subject : {selectedSubject}</h3>
           <Row >
               <Col lg={3} md={4} sm={6} xs={12}>
                <div className="comp">
                  <div className="image">
                    <img src={require('../../assets/images/notes.png').default}  alt="notes"/>
                  </div>
                  <p>My Notes</p>
                </div>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
                <div className="comp">
                  <div className="image">
                    <img src={require('../../assets/images/slides.png').default}  alt="slides"/>
                  </div>
                  <p>My Slides</p>
                </div>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
                <div className="comp">
                  <div className="image">
                    <img src={require('../../assets/images/video.png').default}  alt="videos"/>
                  </div>
                  <p>My Videos</p>
                </div>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
                <div className="comp">
                  <div className="image">
                    <img src={require('../../assets/images/exam.png').default}  alt="tests"/>
                  </div>
                  <p>My Tests</p>
                </div>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
                <div className="comp">
                  <div className="image">
                    <img src={require('../../assets/images/notes.png').default}  alt="assignments"/>
                  </div>
                  <p>Assignments</p>
                </div>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
                <div className="comp">
                  <div className="image">
                    <img src={require('../../assets/images/practise.png').default}  alt="practise"/>
                  </div>
                  <p>Practise Now</p>
                </div>
              </Col>
           </Row>
          
         </section>

       </div>
    )
}

export default StudentPanel;