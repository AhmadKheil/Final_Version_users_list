import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';
import {LaptopOutlined } from '@ant-design/icons';
import { Layout , Button , Tooltip} from 'antd'

function Description()
{
    const { Content } = Layout
    return (
        <>
            <Layout style={{backgroundColor : 'white' , margin : '0 7% 0 7%' }}>
                <Content className='desc'>
                    <h1>Users List</h1>
                    <h4><LoremIpsum p={1}/></h4>
                </Content>
            </Layout>
            <Layout style={{backgroundColor : 'white' , margin : '0 7% 0 7%' }}>
                <Content>
                    <center>
                    <Button type="primary">Read more</Button>{' '}<Tooltip title="Watch demo"><Button icon={<LaptopOutlined />}>Watch Demo</Button></Tooltip>
                    </center>
                </Content>
            </Layout>
        </>
    )
}
export default Description