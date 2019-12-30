import React from 'react';
import { Card, Icon, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Meta } = Card;

const CardStyled = styled(Card)`
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
    margin-bottom: 15px;
`;

export const CourseCard = ({ courseId, image, title, description }) => {
    // <Card
    //     style={{ width: 280 }}
    //     cover={<img alt="example" src={imgUrl} />}
    //     actions={[
    //         <Icon type="setting" key="setting" />,
    //         <Icon type="edit" key="edit" />,
    //         <Icon type="ellipsis" key="ellipsis" />,
    //     ]}
    // >
    //     <Meta
    //         avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
    //         title={title}
    //         description={description}
    //     /
    // </Card>
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
