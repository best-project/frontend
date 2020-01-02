import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Meta } = Card;

const CardStyled = styled(Card)`
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
    margin-bottom: 15px;
`;

export const CourseCard = ({ courseId, image, title, description }) => {
    const link = '/course/' + courseId;
    return (
        <Link to={link}>
            <CardStyled
                hoverable
                style={{ width: 240 }}
                cover={<img style={{ height: 180 }} alt="example" src={image} />}
            >
                <Meta title={title} description={description} />
            </CardStyled>
        </Link>
    );
};
