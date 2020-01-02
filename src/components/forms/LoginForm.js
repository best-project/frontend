import * as React from 'react';
import { Form } from 'antd';
import { Input } from '../../common/components/Input';
import { SubmitButton } from '../../common/components/SubmitButton';
import { FormWrapper, Header, JoinParagraph, CenteredParagraph } from '../../pages/home/style';
import { authService, routingService } from '../../services/index';
import { showNotification, notificationText } from '../../common/helpers/notifications';

const LoginFormComponent = ({ form }) => {
    const handleSubmit = event => {
        event.preventDefault();

        form.validateFields((err, { email, password }) => {
            if (!err) {
                authService
                    .login(email, password)
                    .then(user => {
                        routingService.push('/courses');
                        return user;
                    })
                    .catch(err =>
                        err.detail
                            ? showNotification({ type: Notification.Success, message: err.detail })
                            : showNotification({
                                  type: Notification.Warning,
                                  message: notificationText.Warning,
                              }),
                    );
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
                <SubmitButton value="Sign in" type="primary" htmlType="submit" size="large" />
                <CenteredParagraph>Don't have an account?</CenteredParagraph>
                <JoinParagraph onClick={() => routingService.push('/register')}>
                    Join Learn.IT
                </JoinParagraph>
            </Form>
        </FormWrapper>
    );
};

export const LoginForm = Form.create()(LoginFormComponent);
