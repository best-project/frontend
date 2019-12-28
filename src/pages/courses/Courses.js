import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { authService, courseService, routingService } from '../../services';
import { Layout } from 'antd';
import { CourseCard } from '../../common/components/Card';
import { apiBase } from '../../config/variables';

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
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
`;

const CoursesPage = () => {
    const [coursesMeta, setCoursesMeta] = useState([]);

    useEffect(() => {
        courseService.getCoursesMeta().then(setCoursesMeta);
    }, []);

    return (
        <Wrapper>
            <Navigation>
                <h1>Learn.IT</h1>
                <MenuWrapper>
                    <Menu mode="horizontal" selectable={false}>
                        <Menu.Item onClick={() => console.log('XD')}>Courses</Menu.Item>
                        <Menu.Item onClick={() => routingService.push('settings')}>Settings</Menu.Item>

                        <Menu.Item onClick={authService.logout}>
                            <Link to="/">Log out</Link>
                        </Menu.Item>
                    </Menu>
                </MenuWrapper>
            </Navigation>
            <Content>
                <h2>All available courses</h2>
                <ListCoursesWrapper>
                    {coursesMeta.map(({ id, name, description, image }) => {
                        console.log(apiBase + image);
                        return (
                            <CourseCard
                                key={id}
                                title={name}
                                description={description}
                                image={apiBase + image}
                            />
                        );
                    })}
                </ListCoursesWrapper>
            </Content>
            <FooterStyled>Learn.IT</FooterStyled>
        </Wrapper>
    );
};

export default CoursesPage;
