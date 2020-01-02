import React from 'react';
import { Modal, Form, Input, Button, Icon } from 'antd';
import { Upload } from '../common/components/Upload';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        state = {
            fileList: [],
        };
        setCurrentfileList = items => {
            this.setState({ fileList: items });
            return items;
        };

        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;

            return (
                <Modal
                    visible={visible}
                    title="Add new word"
                    okText="Add new word"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="Word">
                            {getFieldDecorator('word', {
                                rules: [
                                    { required: true, message: 'Please input the title of collection!' },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Translation">
                            {getFieldDecorator('translation', {
                                rules: [
                                    { required: true, message: 'Please input the title of collection!' },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Upload
                            listType="image"
                            multiple={false}
                            fileList={this.fileList}
                            setCurrentList={this.setCurrentfileList}
                            form={form}
                            id="image"
                        >
                            <Button>
                                <Icon type="upload" /> Upload image for word
                            </Button>
                        </Upload>
                    </Form>
                </Modal>
            );
        }
    },
);

export default CollectionCreateForm;
