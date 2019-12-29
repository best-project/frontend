import React, { useState } from 'react';
import { Form, Modal } from 'antd';
import { Input } from '../common/components/Input';

// ten plik jest do refaktoru

const CreateCourseModal = ({ visible, onCancel, onCreate, form }) => {
    // const handleSubmit = event => {
    //     event.preventDefault();

    //     form.validateFields((err, { email, password }) => {
    //         if (!err) {
    //             // tutaj trzeba pamietac o zrobieniu update currentUser w localsotrage
    //             console.log('validate');
    //         }
    //     });

    return (
        <Modal title="Create new course" visible={visible} onOk={onCreate} onCancel={onCancel}>
            <Form>
                <Input id="email" form={form} label="E-mail" initialValue="" />
                <Input id="firstName" form={form} label="First Name" initialValue="" />
                <Input id="lastName" form={form} label="Last Name" initialValue="" />
            </Form>
        </Modal>
    );
};

export const CreateCourseModalComponent = Form.create()(CreateCourseModal);
