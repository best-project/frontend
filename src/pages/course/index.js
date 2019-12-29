import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CoursesWrapperComponent } from '../../components/CoursesWrapper';
import { HeaderComponent } from '../../components/Header';
import { ContentComponent } from '../../components/Content';
import { FooterComponent } from '../../components/Footer';
import { courseService } from '../../services';

const CoursePage = props => {
    const [courseDetails, setCourseDetails] = useState([]);

    useEffect(() => {
        courseService.getCourseDetails(props.match.params.courseId).then(setCourseDetails);
    }, [props.match.params.courseId]);

    return (
        <CoursesWrapperComponent>
            <HeaderComponent />
            <ContentComponent>{console.log(courseDetails)}</ContentComponent>
            {/* <FooterComponent /> */}
        </CoursesWrapperComponent>
    );
};

export default CoursePage;
