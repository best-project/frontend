import React from 'react';
import { Form, Modal, Button, Icon } from 'antd';
import { Input } from '../common/components/Input';
import { Select } from '../common/components/Select';
import { Upload } from '../common/components/Upload';

const CreateCourseModal = ({ visible, onCancel, onCreate, fileList, setCurrentList, form }) => {
    const initialValue = 'normal';
    const selectTypes = [
        {
            name: 'Normal',
            value: 'normal',
        },
        {
            name: 'Puzzle',
            value: 'puzzle',
        },
    ];

    return (
        <Modal title="Create new course" visible={visible} onOk={onCreate} onCancel={onCancel}>
            <Form>
                <Input id="name" form={form} label="Course Name" initialValue="" />
                <Input id="description" form={form} label="Description" initialValue="" />
                <Select initialValue={initialValue} options={selectTypes} form={form} id="type" />
                <Upload
                    listType="image"
                    multiple={false}
                    fileList={fileList}
                    setCurrentList={setCurrentList}
                    form={form}
                    id="image"
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
