import React from 'react';
import { BrandWrapper, Image, Wrapper, LoginPanelWrapper } from './style';
import loginIcon from '../../images/loginIcon.svg';
import { GradientLayout } from '../../common/components/gradientLayout';
import { LoginForm } from './LoginForm';

const HomePage = () => {
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

export default HomePage;
