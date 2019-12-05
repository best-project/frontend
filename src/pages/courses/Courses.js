import React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { authService } from '../../services';
import { Card, Icon, Avatar } from 'antd';
import { Layout } from 'antd';
const { Meta } = Card;

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
`;

const Content = styled.div`
    margin: 2rem auto;
    padding: 0 1rem;
    max-width: 1200px;
`;

const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 1.5rem 1rem;
    margin-bottom: 2rem;
    margin: auto;
    max-width: 1200px;
`;

const MenuWrapper = styled.div`
    display: none;

    @media only screen and (min-width: 576px) {
        display: flex;
        align-items: center;
    }
`;

const ListCoursesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 15px;
`;

const { Footer } = Layout;

const FooterStyled = styled(Footer)`
    background-image: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(28, 68, 131, 1) 100%);
    color: white;
`;

const CoursesPage = () => (
    <Wrapper>
        <Navigation>
            <h1>Learn.IT</h1>
            <MenuWrapper>
                <Menu mode="horizontal" selectable={false}>
                    <Menu.Item onClick={() => console.log('XD')}>Courses</Menu.Item>
                    <Menu.Item onClick={() => console.log('XD')}>Settings</Menu.Item>

                    <Menu.Item onClick={authService.logout}>
                        <Link to="/">Log out</Link>
                    </Menu.Item>
                </Menu>
            </MenuWrapper>
        </Navigation>
        <Content>
            <h2>All available courses</h2>
            <ListCoursesWrapper>
                <Card
                    style={{ width: 280 }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <Icon type="setting" key="setting" />,
                        <Icon type="edit" key="edit" />,
                        <Icon type="ellipsis" key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Angielski A1"
                        description="Przedstaw się, pokręć się po okolicy i poznaj masę potocznych angielskich zwrotów, które wywołają parę uśmiechów."
                    />
                </Card>
                <Card
                    style={{ width: 280 }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <Icon type="setting" key="setting" />,
                        <Icon type="edit" key="edit" />,
                        <Icon type="ellipsis" key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="A1 - Początkujący z Audio"
                        description="Zbuduj swoją bazę angielskich słówek. Naucz się liczyć, robić zakupy i poznaj masę zabawnych potocznych zwrotów."
                    />
                </Card>
                <Card
                    style={{ width: 280 }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <Icon type="setting" key="setting" />,
                        <Icon type="edit" key="edit" />,
                        <Icon type="ellipsis" key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                <Card
                    style={{ width: 280 }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <Icon type="setting" key="setting" />,
                        <Icon type="edit" key="edit" />,
                        <Icon type="ellipsis" key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                <Card
                    style={{ width: 280 }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <Icon type="setting" key="setting" />,
                        <Icon type="edit" key="edit" />,
                        <Icon type="ellipsis" key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </ListCoursesWrapper>
        </Content>
        <FooterStyled>Learn.IT</FooterStyled>
    </Wrapper>
);

export default CoursesPage;
