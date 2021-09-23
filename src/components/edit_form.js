import React , {useContext} from 'react'
import { Layout, Form, Input , Button , Select , Row , Col ,message } from 'antd'
import {FileSyncOutlined} from '@ant-design/icons'
import {editContext , updatedUserContext} from './context'

function Edit()
{
    const {Content} = Layout
    const [userInfo, setUserInfo] = useContext(editContext)
    const [userUpdate, setUserUpdate] = useContext(updatedUserContext)

    const success = () => {
        message.success('Information updated successfully!!');
    };

    const handleSubmit = () => {
        console.log(userUpdate)
        setUserUpdate(userInfo)
        setUserInfo({ ...userInfo, id: '', first_name: '', last_name: '', email: '', avatar: '', disable: true })
        success()
    }
    const { Option } = Select;
    const selectBefore = (
    <Select defaultValue="http://" className="select-before">
        <Option value="http://">http://</Option>
        <Option value="https://">https://</Option>
    </Select>
    );
    const selectAfter = (
    <Select defaultValue=".jpg" className="select-after">
        <Option value=".jpg">.jpg</Option>
        <Option value=".png">.png</Option>
    </Select>
    );
    return (
        <>
            <Layout style={{backgroundColor : 'white', border : 3 , borderColor: 'gray' , borderRadius : '50%' , margin : '0 7% 0 7%'}}>
                <Content className='search align-items-center' id='edit'>
                    <center><h2><u>Choose the user who you want to update his information</u></h2></center><br/>     
                    <Form style={{ margin: '0% 1% 0% 1%' }} onFinish={handleSubmit}>
                    <Row gutter={[8, 24]}>
                        <Col span={8}>
                            <Form.Item label={<h5>Fisrt Name</h5>} style={{marginTop : '2%'}} rules={[{ required: true, message: 'Please input the first name!' }]}> 
                                    <Input
                                        placeholder='Enter your first name'
                                        value={userInfo.first_name}
                                        onChange={(e) => setUserInfo({ ...userInfo, first_name: e.target.value })}
                                    />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                                <Form.Item label={<h5>Last Name</h5>} style={{ marginTop: '2%' }} rules={[{ required: true, message: 'Please input the last name!' }]}>
                                    <Input
                                        placeholder='Enter your last name'
                                        value={userInfo.last_name}
                                        onChange={(e) => setUserInfo({ ...userInfo, last_name: e.target.value })}
                                    />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                                <Form.Item label={<h5>Email</h5>} style={{ marginTop: '2%' }} rules={[{ required: true, message: 'Please input the email!' }]}>
                                    <Input
                                        placeholder='Enter your email'
                                        value={userInfo.email}
                                        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                                    />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={24}>
                        <Form.Item label={<h5>New Profile Photo</h5> } style={{marginTop : '2%'}}>
                            <Input addonBefore={selectBefore} addonAfter={selectAfter} placeholder="Enter photo's url" />
                        </Form.Item>
                        </Col>
                    </Row>
                    <center>
                    <Form.Item>    
                        <Button type='primary' htmlType="submit" style={{marginBottom : '1%'}} disabled = {userInfo.id === undefined? true : userInfo.disable}><FileSyncOutlined />{' '}Update Information</Button>
                    </Form.Item>
                    </center>
                    </Form>
                </Content>
            </Layout>
        </>
    )
}
export default Edit