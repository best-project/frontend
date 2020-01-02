import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CoursesWrapperComponent } from '../../components/CoursesWrapper';
import { HeaderComponent } from '../../components/Header';
import { ContentComponent } from '../../components/Content';
import { courseService } from '../../services';
import { Card } from 'antd';
import { apiBase } from '../../config/variables';
import EditableTable from '../../components/Table';

const CoursePage = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [courseDetails, setCourseDetails] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        courseService
            .getCourseDetails(props.match.params.courseId)
            .then(setCourseDetails)
            .then(() => setIsLoading(false));
    }, [props.match.params.courseId]);

    return (
        <CoursesWrapperComponent>
            <HeaderComponent />
            <ContentComponent>
                <Card title={courseDetails[0] && courseDetails[0].name} extra={<a href="#">Edit</a>}>
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
                {isLoading ? (
                    <div>Loading ...</div>
                ) : (
                    <EditableTable
                        courseDetails={courseDetails}
                        courseId={props.match.params.courseId}
                    />
                )}
            </ContentComponent>
        </CoursesWrapperComponent>
    );
};

export default CoursePage;
