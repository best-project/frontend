import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterStyled = styled(Footer)`
    background-image: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(28, 68, 131, 1) 100%);
    color: white;
    position: fixed;
    left: 0;
    bottom: -20px;
    right: 0;
`;

export const FooterComponent = () => <FooterStyled>Learn.IT</FooterStyled>;
