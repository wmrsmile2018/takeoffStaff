import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


import { ContactsContainer } from './contactsContainer';
import getHistory from '../../utils/history';
import { GetContactsCall, PostContactCall } from '../../redux/actions/contacts';

import './style.scss';

class Contacts extends Component {
  state = {
    contacts: [],
    telephone: '',
    username: '',
  }

  componentDidMount = () => {
    if (!this.props.user.access) {
      getHistory().push("/signin");
    } else {
      this.props.GetContactsCall({owner: this.props.user.username})
    }
  }

  componentDidUpdate = (prevProps) => {
    const { contacts, user } = this.props;
    if (prevProps.contacts !== contacts) {
      this.setState({
        contacts: contacts.contacts
      })
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

  render() {
    const { user } = this.props;
    const { contacts, telephone, username } = this.state;
    return (
      <div className="contacts">
        <ContactsContainer contacts={contacts} username={user.username}
          onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}
        />
      </div>
    )
  }
}

export default connect(state => ({
  user: state.user,
  contacts: state.contacts
}), { GetContactsCall, PostContactCall })(Contacts)
