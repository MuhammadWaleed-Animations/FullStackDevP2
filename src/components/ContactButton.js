import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import axios from 'axios';
import './css/ContactButton.css'; // Import the CSS file

const ContactButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/send-email', {
        name: values.name,
        email: values.email,
        message: values.message,
      });
      console.log('Response:', response.data);
      handleOk();
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <Button
        type="primary"
        shape="circle"
        icon={<MailOutlined />}
        size="large"
        className="contact-button"
        onClick={showModal}
      />
      <Modal
        title="Contact Us"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={handleSubmit}
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
            rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Please enter a valid email' }]}
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
      </Modal>
    </>
  );
};

export default ContactButton;
