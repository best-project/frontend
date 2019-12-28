import * as React from 'react';
import { Form } from 'antd';
import { Input } from '../../common/components/Input';
import { SubmitButton } from '../../common/components/SubmitButton';
import { FormWrapper, Header, JoinParagraph, CenteredParagraph } from '../../pages/home/style';
import { authService, routingService } from '../../services/index';
import { showNotification, notificationType } from '../../common/helpers/notifications';

const RegisterFormComponent = ({ form }) => {
    const handleSubmit = event => {
        event.preventDefault();

        form.validateFields((err, { firstName, lastName, email, password }) => {
            if (!err) {
                authService
                    .registerUser(firstName, lastName, email, password)
                    .then(user => {
                        showNotification({
                            type: notificationType.Success,
                            message: 'Account has been created.',
                        });
                        routingService.push('/');
                        return user;
                    })
                    .catch(err => console.log(err));
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
