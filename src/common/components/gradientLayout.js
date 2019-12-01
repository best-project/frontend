import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-image: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(28, 68, 131, 1) 100%);
`;

export const GradientLayout = props => <Wrapper>{props.children}</Wrapper>;
