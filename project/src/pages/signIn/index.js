import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { SignInContainer } from './SignInContainer'
import './style.scss';

export class SignIn extends Component {
  state = {
    password: '',
    username: '',
  }

  onFinish = (values) => {
    console.log('Success:', values);
    this.setState({
      password: values.password,
      username: values.username,
    })
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <div className="signIn">
        <SignInContainer onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}/>
      </div>
    )
  }
}
