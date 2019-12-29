import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { CreateCourseModalComponent } from '../../components/CreateCourseModal';
import { SubmitButton } from '../../common/components/SubmitButton';

export const Wrapper = styled.div`
    margin-bottom: 20px;
`;

const CreateCourseButtonComponent = () => {
    const [visible, setVisible] = useState(false);
    const [formRef, setFormRef] = useState(null);

    const handleCreate = () => {
        formRef.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
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
            />
        </Wrapper>
    );
};

export default CreateCourseButtonComponent;
