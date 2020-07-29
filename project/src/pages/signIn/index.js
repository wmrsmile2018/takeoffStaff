import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import { SignInCall } from '../../redux/actions/signin';
import { SignInContainer } from './SignInContainer'

import './style.scss';

class SignIn extends Component {
  state = {
    password: '',
    username: '',
    error: ''
  }

  onFinish = (values) => {
    console.log('Success:', values);
    this.setState({
      password: values.password,
      username: values.username,
    })
    this.props.SignInCall({username: values.username, password: values.password})
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.error !== this.props.error) {
      this.setState({
        error: this.props.error
      })
    }
  }

  render() {
    const { error } = this.state;
    return (
      <div className="signIn">
        <SignInContainer error={error} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}/>
      </div>
    )
  }
}

export default connect(state => ({
  error: state.user.error,
}), { SignInCall })(SignIn);
