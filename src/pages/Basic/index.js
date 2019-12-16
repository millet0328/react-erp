import React from "react";
import {Layout} from "antd";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import LeftMenu from "./LeftMenu";
//员工管理
import StaffList from './Staff/List';
import StaffDepartment from './Staff/Department';
import StaffPosition from './Staff/Position';
const {Content} = Layout;

function Basic() {
    let match = useRouteMatch();
    return (
        <Layout>
            <LeftMenu/>
            <Content className="content">
                <Switch>
                    <Route path={`${match.url}/staff/position`}>
                        <StaffPosition/>
                    </Route>
                    <Route path={`${match.url}/staff/department`}>
                        <StaffDepartment/>
                    </Route>
                    <Route path={`${match.url}/staff/list`}>
                        <StaffList/>
                    </Route>
                    <Route exact path={match.path}>
                        <StaffList/>
                    </Route>
                </Switch>
            </Content>
        </Layout>
    )
}

export default Basic;
