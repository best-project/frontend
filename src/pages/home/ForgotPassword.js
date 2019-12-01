import React from 'react';
import { BrandWrapper, Image, Wrapper } from './style';
import loginIcon from '../../images/loginIcon.svg';
import { GradientLayout } from '../../common/components/gradientLayout';
import { ForgotPasswordForm } from './ForgotPasswordForm';
import { authService, routingService } from '../../services';

const ForgotPasswordPage = () => {
    if (authService.currentUserValue()) {
        routingService.push('/courses');
    }

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
