import React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { routingService, authService } from '../services';

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

export const HeaderComponent = () => (
    <Navigation>
        <Link to="/">
            <h1>Learn.IT</h1>
        </Link>
        <MenuWrapper>
            <Menu mode="horizontal" selectable={false}>
                <Menu.Item onClick={() => routingService.push('/')}>Courses</Menu.Item>
                <Menu.Item onClick={() => routingService.push('settings')}>Settings</Menu.Item>
                <Menu.Item onClick={authService.logout}>
                    <Link to="/">Log out</Link>
                </Menu.Item>
            </Menu>
        </MenuWrapper>
    </Navigation>
);
