import * as React from 'react';
import { Form } from 'antd';
import { Input } from '../../common/components/Input';
import { SubmitButton } from '../../common/components/SubmitButton';
import { FormWrapper, Header, JoinParagraph, CenteredParagraph } from './style';
import { authService, routingService } from '../../services/index';

const RegisterFormComponent = ({ form }) => {
    const handleSubmit = event => {
        event.preventDefault();

        form.validateFields((err, { email, password }) => {
            if (!err) {
                authService.login(email, password).then(user => {
                    routingService.push('/courses');
                    return user;
                });
            }
        });
    };

    return (
        <FormWrapper>
            <Form onSubmit={handleSubmit}>
                <Header>Learn.IT</Header>
                <Input
                    id="email"
                    form={form}
                    placeholder="Email"
                    message="Email is required"
                    type="email"
                />
                <Input id="password" type="password" form={form} placeholder="Password" />
                <Input
                    id="firstName"
                    form={form}
                    placeholder="First Name"
                    message="First name is required"
                    type="text"
                />
                <Input
                    id="lastName"
                    form={form}
                    placeholder="Last name"
                    message="Last name is required"
                    type="text"
                />
                <SubmitButton value="Register" type="primary" htmlType="submit" size="large" />
                <CenteredParagraph>Already have an account?</CenteredParagraph>
                <JoinParagraph onClick={() => routingService.push('/')}>Login to Learn.IT</JoinParagraph>
            </Form>
        </FormWrapper>
    );
};

export const RegisterForm = Form.create()(RegisterFormComponent);
