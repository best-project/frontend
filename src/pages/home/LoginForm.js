import * as React from 'react';
import { Form } from 'antd';
import { Input } from '../../common/components/Input';
import { SubmitButton } from '../../common/components/SubmitButton';
import { FormWrapper, Header, JoinParagraph, CenteredParagraph } from './style';
import { authService, routingService } from '../../services/index';

const LoginFormComponent = ({ form }) => {
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
                <SubmitButton value="Continue with Facebook" type="primary" size="large" href="" />
                <Input
                    id="email"
                    form={form}
                    placeholder="Email"
                    message="Email is required"
                    type="email"
                />
                <Input id="password" type="password" form={form} placeholder="Password" />
                <SubmitButton value="Log in" type="primary" htmlType="submit" size="large" />
                <JoinParagraph onClick={() => routingService.push('/forgot')}>
                    I forgot my password!
                </JoinParagraph>
                <CenteredParagraph>Don't have an account?</CenteredParagraph>
                <JoinParagraph onClick={() => routingService.push('/register')}>
                    Join Learn.IT
                </JoinParagraph>
            </Form>
        </FormWrapper>
    );
};

export const LoginForm = Form.create()(LoginFormComponent);
