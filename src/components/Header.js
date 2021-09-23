import React from 'react'
import { Layout, Menu } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import 'antd/dist/antd.css';
import { HomeOutlined , UnorderedListOutlined , EditOutlined , InfoCircleOutlined} from '@ant-design/icons';

function Header()
{
    const { Header } = Layout;
    return (
        <>
        <Layout>
            <Header className="header">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><a href="#1"><HomeOutlined /> Home</a></Menu.Item>
                <Menu.Item key="2"><a href="#cards"><UnorderedListOutlined /> Users List</a></Menu.Item>
                <Menu.Item key="3"><a href="#edit"><EditOutlined /> Edit Form</a></Menu.Item>
                <Menu.Item key="4"><a href="#about"><InfoCircleOutlined /> About</a></Menu.Item>
            </Menu>
            </Header>
        </Layout>
         </>
    )
}
export default Header