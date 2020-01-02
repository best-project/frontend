import React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { routingService, authService } from '../services';
import { StorageService } from '../services/storage';

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

const Paragraph = styled.p`
    display: flex;
    justify-content: right;
    flex-wrap: wrap;
    padding: 0rem 1rem;
    margin: auto;
    max-width: 1200px;
`;

export const HeaderComponent = () => {
    const storageService = new StorageService();
    const data = JSON.parse(storageService.getItem('currentUser'));
    if (!data) {
        routingService.push('/');
    }

    return (
        <>
            <Navigation>
                <Link to="/">
                    <h1>Learn.IT</h1>
                </Link>
                <MenuWrapper>
                    <Menu mode="horizontal" selectable={false}>
                        <Menu.Item onClick={() => routingService.push('/')}>Courses</Menu.Item>
                        <Menu.Item onClick={() => routingService.push('/settings')}>Settings</Menu.Item>
                        <Menu.Item onClick={authService.logout}>
                            <Link to="/">Log out</Link>
                        </Menu.Item>
                    </Menu>
                </MenuWrapper>
            </Navigation>
            <Paragraph>
                You are logged as
                <strong>
                    &nbsp;{data && data.firstName} {data && data.lastName}
                </strong>
            </Paragraph>
        </>
    );
};
