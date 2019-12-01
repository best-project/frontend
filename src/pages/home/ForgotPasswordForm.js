import * as React from 'react';
import { Form } from 'antd';
import { Input } from '../../common/components/Input';
import { SubmitButton } from '../../common/components/SubmitButton';
import { FormWrapper, Header, JoinParagraph, CenteredParagraph } from './style';
import { authService, routingService } from '../../services/index';

const ForgotPasswordFormComponent = ({ form }) => {
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
                <CenteredParagraph>
                    We will send you instructions on how to reset your password by email.
                </CenteredParagraph>
                <Input
                    id="email"
                    form={form}
                    placeholder="Email"
                    message="Email is required"
                    type="email"
                />
                <SubmitButton value="Reset password" type="primary" htmlType="submit" size="large" />
                <JoinParagraph onClick={() => routingService.push('/')}>
                    Return to login page.
                </JoinParagraph>
            </Form>
        </FormWrapper>
    );
};

export const ForgotPasswordForm = Form.create()(ForgotPasswordFormComponent);
