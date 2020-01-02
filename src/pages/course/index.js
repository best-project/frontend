import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CoursesWrapperComponent } from '../../components/CoursesWrapper';
import { HeaderComponent } from '../../components/Header';
import { ContentComponent } from '../../components/Content';
import { courseService, routingService, authService } from '../../services';
import { Card, Spin } from 'antd';
import { apiBase } from '../../config/variables';
import EditableTable from '../../components/Table';

const SpinWrapper = styled.div`
    flex-direction: column;
    justify-content: center;
    display: flex;
    min-height: 100vh;
`;

const CoursePage = props => {
    const user = authService.currentUserValue();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [courseDetails, setCourseDetails] = useState([]);

    const handleSetAdmin = async () => {
        console.log(courseDetails);
        console.log(user);

        setIsAdmin(false);
    };

    useEffect(() => {
        setIsLoading(true);
        courseService
            .getCourseDetails(props.match.params.courseId)
            .then(setCourseDetails)
            .then(() => setIsLoading(false))
            .catch(err => routingService.push('/'));
        user && handleSetAdmin();
    }, [props.match.params.courseId]);

    return (
        <>
            {isLoading ? (
                <SpinWrapper>
                    <Spin size="large" />
                </SpinWrapper>
            ) : (
                <CoursesWrapperComponent>
                    <HeaderComponent />
                    <ContentComponent>
                        <Card
                            title={courseDetails[0] && courseDetails[0].name}
                            extra={user && isAdmin ? <a href="#">Edit</a> : <></>}
                        >
                            <img
                                style={{ height: 180 }}
                                alt="example"
                                src={courseDetails[0] && apiBase + courseDetails[0].image}
                            />
                            <p>
                                <b>Description:</b> {courseDetails[0] && courseDetails[0].description}
                            </p>
                            <p>
                                <b>Type:</b> {courseDetails[0] && courseDetails[0].type}
                            </p>
                        </Card>
                        <EditableTable
                            courseDetails={courseDetails}
                            courseId={props.match.params.courseId}
                        />
                    </ContentComponent>
                </CoursesWrapperComponent>
            )}
        </>
    );
};

export default CoursePage;
