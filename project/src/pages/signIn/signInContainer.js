import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import PropTypes from 'prop-types'; // ES6


export const SignInContainer = ({onFinish, onFinishFailed}) => {
    return (
      <>
        <p className="signIn__title"> Авторизация </p>
        <Form
         name="signIn__form"
         initialValues={{ remember: true }}
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}
         >
         <Form.Item
           label="Username"
           name="signIn__username"
           rules={[{ required: true, message: 'Please input your username!' }]}
         >
           <Input />
         </Form.Item>

         <Form.Item
           label="Password"
           name="signIn__password"
           rules={[{ required: true, message: 'Please input your password!' }]}
         >
           <Input.Password />
         </Form.Item>

         <Form.Item>
           <Button type="primary" htmlType="submit">
             Submit
           </Button>
         </Form.Item>
       </Form>
      </>
  )
}

SignInContainer.propTypes = {
  onFinish: PropTypes.func,
  onFinishFailed: PropTypes.func,
}
