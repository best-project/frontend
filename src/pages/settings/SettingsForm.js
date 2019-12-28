import React from 'react';
import { Input } from '../../common/components/Input';
import { Form } from 'antd';
import { SubmitButton } from '../../common/components/SubmitButton';
import { authService } from '../../services';

const SettingsFormComponent = ({ form }) => {
    const user = authService.currentUserValue();

    const handleSubmit = event => {
        event.preventDefault();

        form.validateFields((err, { email, password }) => {
            if (!err) {
                console.log('validate');
            }
        });
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Input id="email" form={form} label="E-mail" initialValue={user.email} />
            <Input id="firstName" form={form} label="First Name" initialValue={user.firstName} />
            <Input id="lastName" form={form} label="Last Name" initialValue={user.lastName} />

            <SubmitButton
                value="Submit changes"
                type="primary"
                htmlType="submit"
                size="large"
                onClick={handleSubmit}
            />
        </Form>
    );
};

export const SettingsForm = Form.create()(SettingsFormComponent);
