import React from 'react';
import './WhoWeAre.css';
import { Typography, Row, Col } from "antd";

import CRM from '../Images/CRM.jpg';
import About from '../pages/About';

const WhoWeAre = () => {
  return (
       <div className="new-section" id="our-services">
      <Row gutter={[24, 24]} align="middle">
        <Col xs={24} md={12}>
          <h2 style={{ fontSize: "2.5em" }}>Who We Are</h2>
          <p className="italic-text" style={{lineHeight: "1.6"}}>
          Consulting Firm Powered by Analytics! <br />
We support leaders to EVOLVE their organizations using our consulting services.
          </p>
          <ul>
            <li>
            We’re a growing group of IT professionals providing businesses worldwide with solutions and services of Data Management, Reporting & Visualization, Digital marketing, Automations & Integrations. ANALYZINN will provide you with a steady stream of actionable insights to fuel intelligent technologies; visibility to boost relevance and revenue, and accelerate innovation!
            </li>
          </ul>
        </Col>
        <Col xs={24} md={12}>
          <img
            src={CRM}
            alt="Services img"
            style={{
              width: "100%",
              maxWidth: "450px",
    
              display: "block",
              margin: "1% auto",
              borderRadius: "10px",
              marginRight: "10px"
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default WhoWeAre;
