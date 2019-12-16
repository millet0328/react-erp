import React from "react";
import {Link} from "react-router-dom";
import {Icon, Layout, Menu} from "antd";

const {Sider} = Layout;

function LeftMenu() {
    return (
        <Sider className="sider" collapsible>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/purchase/to-purchase/">待采购列表</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/purchase/price-enquiry/">采购询价</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/purchase/returned/">采购退货</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/purchase/returned/">销售定价</Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to="/purchase/returned/">采购执行状况</Link>
                </Menu.Item>

            </Menu>
        </Sider>

    )
}

export default LeftMenu;
