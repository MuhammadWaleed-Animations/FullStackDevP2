import React from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './contact.css';

const ContactPage = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // Here you would typically handle form submission to your backend
  };

  return (
    <div className="contact-container">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card className="contact-card">
            <h2>Contact Us</h2>
            <Form
              name="contact"
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Please enter your email' }]}
              >
                <Input placeholder="Your Email" />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <Input.TextArea rows={4} placeholder="Your Message" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card className="contact-info-card">
            <h2>Get in Touch</h2>
            <p><PhoneOutlined /> +1 234 567 890</p>
            <p><MailOutlined /> contact@example.com</p>
            <p><EnvironmentOutlined /> 1234 Street Name, City, Country</p>
            <div className="map-placeholder">
              <p>Map Placeholder</p>
              <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13610.206048358172!2d74.3030141!3d31.4815212!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903f08ebc7e8b%3A0x47e934f4cd34790!2sFAST%20NUCES%20Lahore!5e0!3m2!1sen!2s!4v1723476102607!5m2!1sen!2s"
    width="100%"
    height="100%"
    style={{ border: 0, borderRadius: '8px' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;

