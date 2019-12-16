import React from "react";
import {Button, Row, Col, Table} from 'antd';
import SearchForm from './SearchForm';


const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

const columns = [
    {
        title: 'ID',
        dataIndex: 'ID',
        key: 'ID',
    },
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '手机',
        dataIndex: 'tel',
        key: 'tel',
    },
    {
        title: '部门',
        dataIndex: 'department',
        key: 'department',
    },
    {
        title: '岗位',
        dataIndex: 'position',
        key: 'position',
    },
    {
        title: '提成系数',
        dataIndex: 'coefficient',
        key: 'coefficient',
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: '状态更新',
        dataIndex: 'update',
        key: 'update',
    },
    {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
    },
];
// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
function List() {
    return (
        <div>
            {/*搜索框*/}
            <SearchForm/>
            {/*按钮组*/}
            <Row type="flex" gutter={16}>
                <Col span={2}>
                    <Button type="primary" style={{fontSize: 12}} block>添加员工</Button>
                </Col>
                <Col span={2}>
                    <Button style={{fontSize: 12}} block>导出</Button>
                </Col>
                <Col span={2}>
                    <Button style={{fontSize: 12}} block>禁用</Button>
                </Col>
                <Col span={2}>
                    <Button style={{fontSize: 12}} block>删除</Button>
                </Col>
                <Col span={2}>
                    <Button style={{fontSize: 12}} block>自定义显示</Button>
                </Col>
                <Col span={3} offset={11}>
                    <div className="am-text-xs am-text-right">
                        共n条数据
                    </div>
                </Col>
            </Row>
            {/*表格*/}
            <Table size="middle" rowSelection={rowSelection} dataSource={dataSource} columns={columns} className="am-margin-top-sm"/>;
        </div>
    )
}

export default List;
