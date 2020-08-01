import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import PropTypes from 'prop-types';


export const SignInContainer = ({onFinish, onFinishFailed, error}) => {
    return (
      <>
        <p className="signIn__title"> Авторизация </p>
          {error &&
            <p className="signIn__error"> Такого пользователя не существует </p>
          }
        <Form
         name="signIn__form"
         initialValues={{ remember: true }}
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}
         >
         <Form.Item
           label="Имя"
           name="username"
           rules={[{ required: true, message: 'Пожалуйста введите ваше имя!' }]}
         >
           <Input />
         </Form.Item>

         <Form.Item
           label="Пароль"
           name="password"
           rules={[{ required: true, message: 'Пожалуйста введите ваш пароль!' }]}
         >
           <Input.Password />
         </Form.Item>

         <Form.Item>
           <Button type="primary" htmlType="submit">
             Войти
           </Button>
         </Form.Item>
       </Form>
      </>
  )
}

SignInContainer.propTypes = {
  onFinish: PropTypes.func,
  onFinishFailed: PropTypes.func,
  error: PropTypes.string,
}

SignInContainer.defaultProps = {
  onFinish: () => {},
  onFinishFailed: () => {},
  error: '',
}
