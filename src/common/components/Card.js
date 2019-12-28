import React from 'react';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

export const CourseCard = ({ imgUrl, title, description }) => (
    <Card
        style={{ width: 280 }}
        cover={<img alt="example" src={imgUrl} />}
        actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />,
        ]}
    >
        <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={title}
            description={description}
        />
    </Card>
);
