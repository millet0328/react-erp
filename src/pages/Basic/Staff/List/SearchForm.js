import React from "react";
import {Form, Row, Col, Input, Button, Icon} from 'antd';
import './SearchForm.css';

class SearchForm extends React.Component {
    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        return (
            <Form className="search-form" onSubmit={this.handleSearch}>
                <Row gutter={40}>
                    <Col span={5}>
                        <Form.Item label="职工编号">
                            <Input placeholder="placeholder"/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item label="真实姓名">
                            <Input placeholder="placeholder"/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item label="所属部门">
                            <Input placeholder="placeholder"/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item label="岗位名称">
                            <Input placeholder="placeholder"/>
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item style={{textAlign: 'right'}}>
                            <Button type="primary" htmlType="submit">
                                搜索
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const WrappedSearchForm = Form.create({name: 'advanced_search'})(SearchForm);
export default WrappedSearchForm;
