import * as React from 'react';
import { Button, Form } from 'antd';
import styled from 'styled-components';

const Container = styled(Form.Item)`
    width: 100%;
    margin: 0.5rem 0;
`;

const ButtonStyled = styled(Button)`
    width: 100%;
    margin: 0.5rem 0;
`;

export const SubmitButton = ({ value, ...props }) => (
    <Container>
        <ButtonStyled type="primary" htmlType="submit" {...props}>
            {value}
        </ButtonStyled>
    </Container>
);
