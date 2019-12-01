import React from 'react';
import { Form, Input as AntdInput } from 'antd';

export const Input = ({
    placeholder,
    label,
    type = 'string',
    required = true,
    disabled = false,
    ...props
}) => (
    <Form.Item>
        {props.form.getFieldDecorator(props.id, {
            initialValue: props.initialValue,
            rules: [{ required, message: props.message }],
        })(
            <AntdInput
                type={type}
                placeholder={placeholder || label}
                disabled={disabled}
                addonAfter={props.addonAfter}
            />,
        )}
    </Form.Item>
);
