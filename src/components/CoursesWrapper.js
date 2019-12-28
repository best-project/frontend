import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
`;

export const CoursesWrapperComponent = props => <Wrapper>{props.children}</Wrapper>;
