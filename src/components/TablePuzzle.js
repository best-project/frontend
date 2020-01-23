import React from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import CollectionCreateForm from './AddWordModal';
import { SubmitButton } from '../common/components/SubmitButton';
import { apiBase } from '../config/variables';
import { courseService } from '../services';
import {
    notificationType,
    showNotification,
} from '../common/helpers/notifications';

// w trybie puzzle dodajemy Sentence oraz Translation czyli
// Przy dodawaniu słówka mam usunać fotke oraz

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    state = {
        editing: false,
    };

    toggleEdit = () => {
        const editing = !this.state.editing;
        this.setState({ editing }, () => {
            if (editing) {
                this.input.focus();
            }
        });
    };

    save = e => {
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error && error[e.currentTarget.id]) {
                return;
            }
            this.toggleEdit();
            handleSave({ ...record, ...values });
        });
    };

    renderCell = form => {
        this.form = form;
        const { children, dataIndex, record, title } = this.props;
        const { editing } = this.state;
        return editing ? (
            <Form.Item style={{ margin: 0 }}>
                {form.getFieldDecorator(dataIndex, {
                    rules: [
                        {
                            required: true,
                            message: `${title} is required.`,
                        },
                    ],
                    initialValue: record[dataIndex],
                })(
                    <Input
                        ref={node => (this.input = node)}
                        onPressEnter={this.save}
                        onBlur={this.save}
                    />,
                )}
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{ paddingRight: 24 }}
                onClick={this.toggleEdit}
            >
                {children}
            </div>
        );
    };

    render() {
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            children,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>
                        {this.renderCell}
                    </EditableContext.Consumer>
                ) : (
                    children
                )}
            </td>
        );
    }
}

export default class EditableTablePuzzle extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'word',
                dataIndex: 'word',
                width: '30%',
                editable: false,
            },
            {
                title: 'translation',
                dataIndex: 'translation',
                editable: false,
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm
                            title="Sure to delete?"
                            onConfirm={() => this.handleDelete(record.key)}
                        >
                            <a>Delete</a>
                        </Popconfirm>
                    ) : null,
            },
        ];

        let courseDetails = [];
        if (
            props.courseDetails &&
            props.courseDetails[0] &&
            props.courseDetails[0].data
        ) {
            courseDetails = props.courseDetails[0].data;
            courseDetails = courseDetails.map(({ translate, word, id }) => {
                return {
                    key: id,
                    word: word,
                    translation: translate,
                };
            });
        }

        this.state = {
            dataSource: courseDetails,
            count: courseDetails.length,
            visible: false,
        };
    }

    showModal = () => {
        this.setState({ visible: true });
    };

    handleDelete = key => {
        courseService.deleteWord(key);
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter(item => item.key !== key),
        });
    };

    handleCreate = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            let obj = new Blob(['hello world'], { type: 'image/jpeg' });
            const data = {
                courseId: this.props.courseId,
                word: values.word,
                translate: values.translation,
                image: obj,
            };
            form.resetFields();

            courseService.addWordToCourse(data);

            const { count, dataSource } = this.state;
            const newData = {
                key: count,
                word: values.word,
                translation: values.translation,
            };
            this.setState({ visible: false });

            this.setState({
                dataSource: [...dataSource, newData],
                count: count + 1,
            });

            showNotification({
                type: notificationType.Success,
                message: 'Word has been added.',
            });
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            name: `Edward King ${count}`,
            age: 32,
            address: `London, Park Lane no. ${count}`,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });

        this.setState({ visible: true });
    };

    handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        this.setState({ dataSource: newData });
    };

    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div>
                <SubmitButton
                    type="primary"
                    onClick={this.showModal}
                    value="Add new word"
                />
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    courseDetails={this.props.courseDetails}
                />
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        );
    }
}
