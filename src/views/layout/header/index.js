import { Layout, Button } from 'antd';
import logo from '../../../logo.svg';

const { Header } = Layout;

const HeaderBar = () => (
    <Layout>
        <Header className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <Button type="primary">退出</Button>
        </Header>
    </Layout>
);

export default HeaderBar;