import React, { Component, Fragment } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';

import Contact from '../../components/contact/index';

export class ContactsContainer extends Component {
  render() {
    const {
      contacts, username, onFinish, onFinishFailed, handleOnChange, isDisabled,
      handleOnSearch
    } = this.props;
    return (
      <Fragment>
        <div className="contacts__header">
          <div className="contacts__tittle">Контакты пользователя
            <h2>{username}</h2>
          </div>
        </div>
        <div className="contacts__content">
          <div className="contacts__entryField">
            <div className="contacts__search">
              <p className="contacts__search__title"> Найти конктакт </p>
              <div className="contacts__search__name">
                <p className="contacts__search__label"> Имя: </p>
                <Input
                  onChange={handleOnChange}
                  name="name"
                  disabled={isDisabled}
                  />
              </div>
              <div className="contacts__search__tel">
                <p className="contacts__search__label"> Номер телефона: </p>
                <Input
                  onChange={handleOnChange}
                  name="tel"
                  disabled={isDisabled}
                  />
              </div>

              <Button type="primary" onClick={handleOnSearch} disabled={isDisabled}>
                Найти
              </Button>
            </div>
            <div className="contacts__addNew">
              <p className="contacts__addNew__title"> Добавить новый контакт</p>
              <Form
               name="contacts__form"
               initialValues={{ remember: true }}
               onFinish={onFinish}
               onFinishFailed={onFinishFailed}
               >
               <Form.Item
                 label="Имя"
                 name="username"
                 rules={[{ required: true, message: 'Пожалуйста введите имя!' }]}
               >
                 <Input />
               </Form.Item>

               <Form.Item
                 label="Номер телефона"
                 name="telephone"
                 rules={[{ required: true, message: 'Пожалуйста введите номер телефона!' }]}
               >
                 <Input />
               </Form.Item>

               <Form.Item>
                 <Button type="primary" htmlType="submit">
                   Добавить
                 </Button>
               </Form.Item>
             </Form>
            </div>
          </div>
          <div className="connects__data">
            <div className="connects__data__tittle">
              <p className="connects__name">Имя</p>
              <p className="connects__phone">Номер телефона</p>
            </div>

            {contacts.map((value, index) =>
              <Fragment key={index}>
                <Contact name={value.contact_name} tel={value.tel} id={value.id}/>
              </Fragment>
            )}
          </div>
        </div>
      </Fragment>
    )
  }
}

ContactsContainer.propTypes = {
  contacts: PropTypes.array,
  username: PropTypes.string,
  onFinish: PropTypes.func,
  onFinishFailed: PropTypes.func,
  handleOnChange: PropTypes.func,
  isDisabled: PropTypes.bool,
}

ContactsContainer.defaultProps = {
  onFinish: () => {},
  onFinishFailed: () => {},
  handleOnChange: () => {},
  contacts: [],
  username: '',
  isDisabled: false,
}
