import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';

import { DeleteContactCall, PatchContactCall } from '../../redux/actions/contacts';
import './style.scss';

class Contact extends Component {
  state = {
    isEditable: false,
    name: '',
    tel: '',
  }

  componentDidMount = () => {
    const { name, tel } = this.props;
    this.setState({name, tel})
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.name != this.props.name) {
        this.setState({name: this.props.name})
    }
    if (prevProps.tel != this.props.tel) {
      this.setState({tel: this.props.tel})
    }
  }

  handleOnClickRemove = ({target}) => {
    const { DeleteContactCall } = this.props;
    const id = target.dataset["id"]
    DeleteContactCall({id})
  }

  handleOnClickEdit = () => {
    this.setState({ isEditable: !this.state.isEditable })
  }

  handleOnClickSave = () => {
    const { PatchContactCall, id } = this.props;
    const { name, tel } = this.state;
    this.setState({ isEditable: !this.state.isEditable })
    PatchContactCall({id: id, tel: tel, name: name})
  }

  handleOnChange = ({target}) => {
    this.setState({[target.name]: target.value})
  }

  render() {
    const { id } = this.props;
    const { isEditable, name, tel } = this.state;
    return (
      <div className="contact" id={id}>
        { isEditable ?
          <>
          <Form
            layout="horizontal"
            initialValues={{ layout: "horizontal" }}
            >
            <Form.Item
              rules={[{ required: true, message: 'Please input your username!' }]}
              >
              <Input value={name} onChange={this.handleOnChange} name="name"/>
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: 'Please input your username!' }]}
              >
              <Input value={tel} onChange={this.handleOnChange} name="tel"/>
            </Form.Item>
          </Form>


          </>
          :
          <>
            <p className="contact__name">{name}</p>
            <p className="contact__tel">{tel}</p>
          </>
        }

        <div className="contact__buttons">
          <img
            src="https://cdn1.iconfinder.com/data/icons/shooping/64/trash_can-512.png"
            alt="remove"
            width="20"
            className="contact__remove"
            data-id={id}
            onClick={this.handleOnClickRemove}
          />
          {
          isEditable ?
            <img
              src="https://cdn2.iconfinder.com/data/icons/apple-classic/100/Apple_classic_10Icon_5px_grid-04-512.png"
              alt="save"
              width="20"
              className="contact__save"
              data-id={id}
              onClick={this.handleOnClickSave}
            />
            :
            <img
              src="https://img.icons8.com/carbon-copy/2x/pencil.png"
              alt="edit"
              width="20"
              className="contact__edit"
              data-id={id}
              onClick={this.handleOnClickEdit}
              />
          }
        </div>
      </div>
    )
  }
}

export default connect(state => ({
}), { DeleteContactCall, PatchContactCall })(Contact);
