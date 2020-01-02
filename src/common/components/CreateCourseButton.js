import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { CreateCourseModalComponent } from '../../components/CreateCourseModal';
import { SubmitButton } from '../../common/components/SubmitButton';
import { courseService } from '../../services';
import { showNotification, notificationType } from '../../common/helpers/notifications';

export const Wrapper = styled.div`
    margin-bottom: 20px;
`;

const CreateCourseButtonComponent = ({ setCourses }) => {
    const [visible, setVisible] = useState(false);
    const [formRef, setFormRef] = useState(null);
    const [currentFileList, setCurrentFileList] = useState([]);

    const handleCreate = () => {
        formRef.validateFields((err, values) => {
            if (err) {
                return;
            }

            const data = {
                ...values,
                image: values.image.file.originFileObj,
            };
            courseService
                .postCourse(data)
                .then(() => {
                    showNotification({
                        type: notificationType.Success,
                        message: 'Course has been added.',
                    });
                })
                .catch(() => {
                    showNotification({
                        type: notificationType.Success,
                        message: 'Word has been added.',
                    });
                })
                .then(() => {
                    courseService.getCoursesMeta().then(setCourses);
                });

            formRef.resetFields();
            setVisible(false);
        });
    };

    const saveFormRef = useCallback(node => {
        if (node !== null) {
            setFormRef(node);
        }
    }, []);

    return (
        <Wrapper>
            <SubmitButton type="primary" onClick={() => setVisible(true)} value="Create new course" />
            <CreateCourseModalComponent
                ref={saveFormRef}
                visible={visible}
                onCancel={() => setVisible(false)}
                onCreate={() => handleCreate()}
                fileList={currentFileList}
                setCurrentList={setCurrentFileList}
            />
        </Wrapper>
    );
};

export default CreateCourseButtonComponent;
