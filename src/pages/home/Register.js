import React from 'react';
import { BrandWrapper, Image, Wrapper } from './style';
import loginIcon from '../../images/loginIcon.svg';
import { GradientLayout } from '../../common/components/gradientLayout';
import { RegisterForm } from './RegisterForm';
import { routingService, authService } from '../../services';

const RegisterPage = () => {
    if (authService.currentUserValue()) {
        routingService.push('/courses');
    }

    return (
        <GradientLayout>
            <Wrapper>
                <BrandWrapper>
                    <Image src={loginIcon} />
                </BrandWrapper>
                <RegisterForm />
            </Wrapper>
        </GradientLayout>
    );
};

export default RegisterPage;
