import React , {useState , useContext} from 'react';
import { styleContext } from './context'
import {Layout , Row , Col , Form , Input ,  Button , Alert} from 'antd'
import { Content } from 'antd/lib/layout/layout';
import { SearchOutlined } from '@ant-design/icons'

function Search({users})
{
    const [styleId,setStyleId] = useContext(styleContext)
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')
    const [id, setId] = useState('')
    const [alertId , setAlertId] = useState('')
    const [variant, setVariant] = useState('')

    const handlesubmit = () => {
        const ids = users.map(user => {
            return user.id
        })
        for (let i = 0; i < ids.length; i++)
        {
            if(parseInt(id) === ids[i])
            {
                setShowMessage(true)
                setMessage('This id is correct , the search operation was finished successfully!!')
                setVariant('success')
                setStyleId(id)
                setAlertId(id)
                console.log(styleId , id)
                setId('')
                return
            }
        }
        setShowMessage(true)
        setMessage('This id is incorrect , search operation failed, please try another Id !')
        setVariant('error')
        setStyleId('')
        setAlertId(undefined)
        console.log("ahmad")
        setId('')
        return
    }


    if (showMessage)
    {
        return (
            <>
                <Layout style={{backgroundColor : 'white', border : 3 , borderColor: 'gray' , borderRadius : '50%' , margin : '0 7% 0 7%'}}>
                    <Content className='search align-items-center'>
                        <Row style={{margin : '0 4% 0 4%'}}>
                            <Col sm={15}> <h3><u>If you want to seacrh a specific user , enter his id here!</u></h3></Col>
                            <Col sm={9}>
                                <Form className='searchform' onFinish = {handlesubmit}>
                                    <Row className="align-items-center">
                                        <Col className='customcol'>
                                            <Form.Item><Input style={{width : '90%'}} placeholder="Enter ID" type='number' value={id} onChange={(e) => setId(e.target.value)} /></Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item> <Button htmlType='submit' style={{borderRadius : '7px'}} type="primary" icon={<SearchOutlined />}>Search</Button></Form.Item>
                                        </Col> 
                                     </Row>
                                </Form>
                            </Col>
                        </Row>
                        <br />
                        <Alert
                            style={{ margin: '0 4% 0 4%', height: '100px' }}
                            type={variant === 'success' ? 'success' : 'error'}
                            message={message}
                            action={
                                alertId ? <a href={'#' + styleId}>Go to this user</a> : ''
                            }
                            showIcon
                            closable
                            afterClose={() => setShowMessage(false)}
                        />
                        <br/>
                    </Content>
                </Layout>
        </>
        )
    }
    else {
        return (
            <>
                <Layout style={{backgroundColor : 'white', border : 3 , borderColor: 'gray' , borderRadius : '50%' , margin : '0 7% 0 7%'}}>
                    <Content className='search align-items-center'>
                        <Row style={{margin : '2% 4% 0 4%'}}>
                            <Col sm={15}> <h3><u>If you want to seacrh a specific user , enter his id here!</u></h3></Col>
                            <Col sm={9}>
                                <Form className='searchform' onFinish = {handlesubmit}>
                                    <Row className="align-items-center">
                                        <Col className='customcol'>
                                            <Form.Item><Input style={{width : '90%'}} placeholder="Enter ID" type='number' value={id} onChange={(e) => setId(e.target.value)} /></Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item> <Button htmlType="submit" style={{borderRadius : '7px'}} type="primary" icon={<SearchOutlined />}>Search</Button></Form.Item>
                                        </Col> 
                                     </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </>
        )
    }
}
export default Search;