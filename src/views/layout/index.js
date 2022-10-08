import { Layout } from 'antd';
import React from 'react';
import HeaderBar from './header';
import SiderBar from './sider';
import Main from './content';
import './index.scss'

const App = () => (
    <Layout>
        <HeaderBar />
        <Layout className='sider content'>
            <SiderBar />
            <Main />
        </Layout>
    </Layout>
);

export default App;