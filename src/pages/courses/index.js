import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { courseService } from '../../services';
import { CourseCard } from '../../common/components/Card';
import { apiBase } from '../../config/variables';
import { HeaderComponent } from '../../components/Header';
import { ContentComponent } from '../../components/Content';
import { CoursesWrapperComponent } from '../../components/CoursesWrapper';
import CreateCourseButtonComponent from '../../common/components/CreateCourseButton';

const ListCoursesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const FantomContainer = styled.div`
    margin: 5px;
    min-width: 240px;
    max-width: 240px;
    flex: 1;
`;

const CoursesPage = () => {
    const [coursesMeta, setCoursesMeta] = useState([]);

    useEffect(() => {
        courseService.getCoursesMeta().then(setCoursesMeta);
    }, []);

    return (
        <CoursesWrapperComponent>
            <HeaderComponent />
            <ContentComponent>
                <CreateCourseButtonComponent setCourses={setCoursesMeta} />
                <h2>All available courses</h2>
                <ListCoursesWrapper>
                    {coursesMeta.map(({ id, name, description, image }) => {
                        return (
                            <CourseCard
                                key={id}
                                courseId={id}
                                title={name}
                                description={description}
                                image={apiBase + image}
                            />
                        );
                    })}
                    {Array(4)
                        .fill(4)
                        .map(() => (
                            <FantomContainer key={Number(Math.random())} />
                        ))}
                </ListCoursesWrapper>
            </ContentComponent>
        </CoursesWrapperComponent>
    );
};

export default CoursesPage;
