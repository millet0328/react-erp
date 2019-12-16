import {Icon, Layout, Row, Col, Menu, Dropdown, Avatar} from "antd";
import {Link} from "react-router-dom";
import React from "react";
import './index.css';
import logo from "../../assets/img/common/logo.png";

const {Header} = Layout;
const menu = (
    <Menu>
        <Menu.Item>
            <Link to="/">
                <span>账户中心</span>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/">
                <span>消息中心</span>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/">
                <span>退出账户</span>
            </Link>
        </Menu.Item>
    </Menu>
);

function NavHeader() {
    return (
        <Header className="header">
            <div className="logo">
                <img width="100%" src={logo} alt=""/>
            </div>
            <Row className="nav">
                <Col span={2}>
                    <Icon className="trigger am-padding-left-sm" type='menu-unfold'/>
                </Col>
                <Col span={2}>
                    <Link to="/basic/">
                        <Icon type="home"/>
                        <span className="text">基础模块</span>
                    </Link>
                </Col>
                <Col span={2}>
                    <Link to="/purchase/">
                        <Icon type="import"/>
                        <span className="text">采购管理</span>
                    </Link>
                </Col>
                <Col span={2}>
                    <Link to="/">
                        <Icon type="file-done"/>
                        <span className="text">销售管理</span>
                    </Link>
                </Col>
                <Col span={2}>
                    <Link to="/">
                        <Icon type="code-sandbox"/>
                        <span className="text">仓库管理</span>
                    </Link>
                </Col>
                <Col span={2}>
                    <Link to="/">
                        <Icon type="account-book"/>
                        <span className="text">财务管理</span>
                    </Link>
                </Col>
                <Col span={2}>
                    <Link to="/">
                        <Icon type="area-chart"/>
                        <span className="text">数据中心</span>
                    </Link>
                </Col>
                <Col span={3} offset={7}>
                    <Link to="/">
                        <Dropdown overlay={menu}>
                            <div>
                                <Avatar icon="user"/>
                                <span className="text">Admin</span>
                                <Icon type="down" className="am-margin-left-sm"/>
                            </div>
                        </Dropdown>
                    </Link>
                </Col>
            </Row>
        </Header>
    )
}

export default NavHeader;
