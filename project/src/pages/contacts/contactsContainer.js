import React, { Component, Fragment } from 'react';
import { Form, Input, Button } from 'antd';

import Contact from '../../components/contact/index';

export class ContactsContainer extends Component {
  render() {
    const { contacts, username, onFinish, onFinishFailed } = this.props;
    return (
      <Fragment>
        <div className="contacts__header">
          <div className="contacts__tittle">Контакты пользователя
            <h2>{username}</h2>
          </div>
        </div>
        <div className="contacts__content">
          <div className="contacts__addNew">
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
                 Submit
               </Button>
             </Form.Item>
           </Form>
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
