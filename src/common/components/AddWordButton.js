import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { SubmitButton } from '../../common/components/SubmitButton';
import { courseService } from '../../services';
import { AddWordModalComponent } from '../../components/AddWordModal';

export const Wrapper = styled.div`
    margin-bottom: 20px;
`;

const AddWordButtonComponent = () => {
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
            courseService.postCourse(data);

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
            <SubmitButton type="primary" onClick={() => setVisible(true)} value="Add new word" />
            <AddWordModalComponent
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

export default AddWordButtonComponent;
