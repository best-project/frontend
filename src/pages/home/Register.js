import React from 'react';
import { BrandWrapper, Image, Wrapper } from './style';
import loginIcon from '../../images/loginIcon.svg';
import { GradientLayout } from '../../common/components/gradientLayout';
import { RegisterForm } from './RegisterForm';

const RegisterPage = () => {
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
