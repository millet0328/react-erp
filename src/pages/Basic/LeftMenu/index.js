import React from "react";
import {Link} from "react-router-dom";
import {Icon, Layout, Menu} from "antd";

const {Sider} = Layout;
const {SubMenu} = Menu;

function LeftMenu() {
    return (
        <Sider className="sider" collapsible>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <SubMenu
                    key="1"
                    title={
                        <span>
                        <Icon type="team"/>
                        <span>员工管理</span>
                    </span>
                    }
                >
                    <Menu.Item key="1-1">
                        <Link to="/basic/staff/list">员工列表</Link>
                    </Menu.Item>
                    <Menu.Item key="1-2">
                        <Link to="/basic/staff/department">部门设置</Link>
                    </Menu.Item>
                    <Menu.Item key="1-3">
                        <Link to="/basic/staff/position">岗位设置</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    key="2"
                    title={
                        <span>
                        <Icon type="shopping"/>
                        <span>商品管理</span>
                    </span>
                    }
                >
                    <Menu.Item key="2-1">商品资料</Menu.Item>
                    <Menu.Item key="2-2">商品分类</Menu.Item>
                    <Menu.Item key="2-3">商品规格</Menu.Item>
                    <Menu.Item key="2-4">商品品牌</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="3"
                    title={
                        <span>
                        <Icon type="solution"/>
                        <span>客户管理</span>
                    </span>
                    }
                >
                    <Menu.Item key="3-1">客户资料</Menu.Item>
                    <Menu.Item key="3-2">客户类别</Menu.Item>
                    <Menu.Item key="3-3">客户标签</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="4"
                    title={
                        <span>
                        <Icon type="deployment-unit"/>
                        <span>供应商管理</span>
                    </span>
                    }
                >
                    <Menu.Item key="4-1">供应商列表</Menu.Item>
                    <Menu.Item key="4-2">证书管理</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="5"
                    title={
                        <span>
                        <Icon type="setting"/>
                        <span>系统设置</span>
                    </span>
                    }
                >
                    <Menu.Item key="5-1">通讯对接</Menu.Item>
                    <Menu.Item key="5-2">站点信息</Menu.Item>
                    <Menu.Item key="5-3">系统日志</Menu.Item>
                    <Menu.Item key="5-4">物流管理</Menu.Item>
                    <Menu.Item key="5-5">基础设置</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>

    )
}

export default LeftMenu;
