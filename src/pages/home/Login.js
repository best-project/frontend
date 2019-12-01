import React from 'react';
import { BrandWrapper, Image, Wrapper } from './style';
import loginIcon from '../../images/loginIcon.svg';
import { GradientLayout } from '../../common/components/gradientLayout';
import { LoginForm } from './LoginForm';
import { authService, routingService } from '../../services';

const LoginPage = () => {
    if (authService.currentUserValue()) {
        routingService.push('/courses');
    }

    return (
        <GradientLayout>
            <Wrapper>
                <BrandWrapper>
                    <Image src={loginIcon} />
                </BrandWrapper>
                <LoginForm />
            </Wrapper>
        </GradientLayout>
    );
};

export default LoginPage;
