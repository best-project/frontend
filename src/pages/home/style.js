import styled from 'styled-components';
import { Layout } from 'antd';

export const LayoutStyled = styled(Layout)`
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 60px;
    background-color: white;
    min-height: 100%;
    text-align: center;
    display: flex;
    align-items: stretch;
`;

export const Image = styled.img`
    width: 500px;
    margin: 1.25rem 0 0;
    display: none;
    @media only screen and (min-width: 1075px) {
        display: block;
    }
`;

export const BrandWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 1075px) {
        margin-right: 125px;
    }
`;

export const LoginPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(28, 68, 131, 1) 100%);
`;

export const Wrapper = styled(LoginPanelWrapper)`
    @media only screen and (min-width: 1075px) {
        flex-direction: row;
    }
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin-bottom: 20px;
    width: 330px;
    background: white;
    border-radius: 3px;
    @media only screen and (min-width: 576px) {
        width: 400px;
    }
`;
