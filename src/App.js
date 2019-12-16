import React, {Component} from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//主页样式
import './App.css';
//组件
import NavHeader from "./components/NavHeader";
import Basic from "./pages/Basic";
import Purchase from './pages/Purchase';

class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <NavHeader/>
                    <Switch>
                        <Route path="/purchase/" component={Purchase}></Route>
                        <Route path="/basic/" component={Basic}></Route>
                        <Route path="/" component={Basic}></Route>
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default App;
