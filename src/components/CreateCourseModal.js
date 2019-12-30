import React from 'react';
import { Form, Modal, Upload, Button, Icon } from 'antd';
import { Input } from '../common/components/Input';
import { Select } from '../common/components/Select';
import { dummyUploadPhotoRequest } from '../common/helpers/dummyUploadPhotoRequest';

const CreateCourseModal = ({ visible, onCancel, onCreate, fileList, setCurrentList, form }) => {
    const initialValue = 'standard';
    const selectTypes = [
        {
            name: 'Standard',
            value: 'standard',
        },
        {
            name: 'Puzzle',
            value: 'puzzle',
        },
    ];

    const handleOnChange = info => {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-1);

        setCurrentList(fileList);
    };

    return (
        <Modal title="Create new course" visible={visible} onOk={onCreate} onCancel={onCancel}>
            <Form>
                <Input id="name" form={form} label="Course Name" initialValue="" />
                <Input id="description" form={form} label="Description" initialValue="" />
                <Select initialValue={initialValue} options={selectTypes} form={form} id="type" />
                {/* Upload trzeba przenieść do innego componentu i zrobić injecta z form */}
                <Upload
                    onChange={handleOnChange}
                    listType="image"
                    multiple={false}
                    fileList={fileList}
                    customRequest={dummyUploadPhotoRequest}
                >
                    <Button>
                        <Icon type="upload" /> Upload course's image
                    </Button>
                </Upload>
            </Form>
        </Modal>
    );
};

export const CreateCourseModalComponent = Form.create()(CreateCourseModal);
