import * as React from 'react';
import { Form, Upload as AntdUpload, Button, Icon } from 'antd';
import { dummyUploadPhotoRequest } from '../helpers/dummyUploadPhotoRequest';

export const Upload = props => {
    const handleOnChange = info => {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-1);

        props.setCurrentList(fileList);
    };

    return (
        <Form.Item>
            {props.form.getFieldDecorator(props.id, {
                initialValue: props.initialValue,
                rules: [{ required: true, message: props.message }],
            })(
                <AntdUpload
                    onChange={handleOnChange}
                    listType="image"
                    multiple={false}
                    fileList={props.fileList}
                    customRequest={dummyUploadPhotoRequest}
                >
                    <Button>
                        <Icon type="upload" /> Upload course's image
                    </Button>
                </AntdUpload>,
            )}
        </Form.Item>
    );
};
