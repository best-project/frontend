import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { courseService } from '../../services';
import { CourseCard } from '../../common/components/Card';
import { apiBase } from '../../config/variables';
import { HeaderComponent } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';
import { ContentComponent } from '../../components/Content';
import { CoursesWrapperComponent } from '../../components/CoursesWrapper';

const ListCoursesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 15px;
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
            </ContentComponent>
            <FooterComponent />
        </CoursesWrapperComponent>
    );
};

export default CoursesPage;
