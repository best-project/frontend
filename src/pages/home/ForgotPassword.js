import React from 'react';
import { BrandWrapper, Image, Wrapper } from './style';
import loginIcon from '../../images/loginIcon.svg';
import { GradientLayout } from '../../common/components/gradientLayout';
import { ForgotPasswordForm } from './ForgotPasswordForm';

const ForgotPasswordPage = () => {
    return (
        <GradientLayout>
            <Wrapper>
                <BrandWrapper>
                    <Image src={loginIcon} />
                </BrandWrapper>
                <ForgotPasswordForm />
            </Wrapper>
        </GradientLayout>
    );
};

export default ForgotPasswordPage;
