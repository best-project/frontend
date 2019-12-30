import React from 'react';
import { Form, Select as AntdSelect } from 'antd';

const { Option } = AntdSelect;

export const Select = props => (
    <Form.Item>
        {props.form.getFieldDecorator(props.id, {
            initialValue: props.initialValue,
            rules: [{ required: true, message: props.message }],
        })(
            <AntdSelect initialValue={props.initialValue}>
                {props.options.map(({ value, name }) => (
                    <Option key={name} value={value}>
                        {name}
                    </Option>
                ))}
            </AntdSelect>,
        )}
    </Form.Item>
);
