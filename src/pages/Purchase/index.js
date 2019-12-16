import React from "react";
import {Layout} from "antd";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import LeftMenu from "./LeftMenu";
//采购管理
import PriceEnquiry from "./PriceEnquiry";
import ToPurchase from "./ToPurchase";

const {Content} = Layout;

function Purchase() {
    let match = useRouteMatch();
    return (
        <Layout>
            <LeftMenu/>
            <Content className="content">
                <Switch>
                    <Route path={`${match.url}/price-enquiry/`}>
                        <PriceEnquiry/>
                    </Route>
                    <Route path={`${match.url}/to-purchase/`}>
                        <ToPurchase/>
                    </Route>
                    <Route exact path={match.path}>
                        <ToPurchase/>
                    </Route>
                </Switch>
            </Content>
        </Layout>
    )
}

export default Purchase;
