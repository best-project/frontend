import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    margin: 2rem auto;
    padding: 0 1rem;
    max-width: 1200px;
`;

export const ContentComponent = props => <Content>{props.children}</Content>;
