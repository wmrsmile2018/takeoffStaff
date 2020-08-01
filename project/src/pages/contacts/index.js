import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


import { ContactsContainer } from './contactsContainer';
import getHistory from '../../utils/history';
import {
  GetContactsCall,
  PostContactCall,
  SearchContactCall
 } from '../../redux/actions/contacts';

import './style.scss';

class Contacts extends Component {
  state = {
    contacts: [],
    telephone: '',
    username: '',
    name: '',
    tel: '',
    save: [],
    isDisabled: false
  }

  componentDidMount = () => {
    if (!this.props.user.access) {
      getHistory().push("/signin");
    } else {
      this.props.GetContactsCall({owner: this.props.user.username})
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { contacts, user, search } = this.props;
    if (prevProps.contacts !== contacts) {
      this.setState({
        save: contacts.contacts,
        contacts: contacts.contacts,
        isDisabled: !contacts.contacts.length
      })
    }
    if (prevProps.search !== search) {
      this.setState({
        contacts: search
      })
    }
    if(prevState !== this.state) {
      if (!this.state.name
        && !this.state.tel
        && JSON.stringify(this.state.contacts) !== JSON.stringify(this.state.save)) {
        this.setState({
          contacts: this.state.save
        })
      }
    }
  }

  onFinish = (values) => {
    const { user, PostContactCall } = this.props;
    this.setState({
      telephone: '',
      username: '',
    })
    PostContactCall({id: uuidv4(), tel: values.telephone, name: values.username, owner: user.username})
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  handleOnChange = ({target}) => {
    this.setState({ [target.name]: target.value })
  }

  handleOnSearch = () => {
    const { tel, name } = this.state;
    this.props.SearchContactCall({tel: tel, name: name})
  }

  render() {
    const { user } = this.props;
    const { contacts, telephone, username, isDisabled } = this.state;
    return (
      <div className="contacts">
        <ContactsContainer contacts={contacts} username={user.username}
          onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}
          isDisabled={isDisabled} handleOnChange={this.handleOnChange}
          handleOnSearch={this.handleOnSearch}
        />
      </div>
    )
  }
}

export default connect(state => ({
  user: state.user,
  contacts: state.contacts,
  search: state.contacts.search
}), { GetContactsCall, PostContactCall, SearchContactCall })(Contacts)
