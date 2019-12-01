import React from 'react';
import { BrandWrapper, Image, Wrapper } from './style';
import loginIcon from '../../images/loginIcon.svg';
import { GradientLayout } from '../../common/components/gradientLayout';
import { LoginForm } from './LoginForm';

const LoginPage = () => {
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
