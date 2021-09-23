import React , {useContext} from 'react'
import { Card, Col, Divider, Button } from 'antd'
import {EditOutlined} from '@ant-design/icons'
import {styleContext , editContext , updatedUserContext} from './context'

function Single({data})
{
    const [styleId, setStyleId] = useContext(styleContext);
    const [userInfo, setUserInfo] = useContext(editContext);
    const [userUpdate, setUserUpdate] = useContext(updatedUserContext)
    
    const handleEdit = (id) => {
        console.log(userInfo)
        const oneuser = [data].map(user => {
            if (user.id === id) {
                return { ...user, disable: false }
            }
            return null
        })
        setUserInfo(oneuser[0])
        setUserUpdate({})
        window.location.href="#edit"
    }

    const { Meta } = Card;
    return (
        <>
            <Col sm={8}>
                <Card
                    style={styleId === data.id.toString() ? { backgroundColor: '#d1e7dd', width: '18rem' , marginTop: '2%' , borderRadius : '10px'} : { width: '18rem' , marginTop: '2%' , borderRadius : '10px' }}  id={data.id} onClick={() => {setStyleId('')}}
                    hoverable
                    cover={<img style={{height : 286 , borderRadius : '10px'}} src={data.avatar} alt ="" />}
                >
                    <Meta
                        title={<b><u>{'User Info' + (data.id) + " :"}</u></b>}
                        description="Lorem ipsum odor amet, consectetuer adipiscing elit.
                            Vel nullam eleifend vivamus. Augue urna sed velit elit.
                            Malesuada sodales ridiculus sodales. Tempor netus varius mauris."
                    />
                    <Divider>First Name</Divider>
                    <center><Meta description={data.id === userUpdate.id ? data.first_name = userUpdate.first_name && userUpdate.first_name : data.first_name} /></center>
                    <Divider>Last Name</Divider>
                    <center><Meta description={data.id === userUpdate.id ? data.last_name = userUpdate.last_name && userUpdate.last_name : data.last_name} /></center>
                    <Divider>Email</Divider>
                    <center><Meta description={data.id === userUpdate.id ? data.email = userUpdate.email && userUpdate.email : data.email} /></center>
                    <Divider />
                    <center><Button type='primary' onClick={() => handleEdit(data.id)}><EditOutlined />{' '}Edit</Button></center>
                </Card>
            </Col>   
        </>
    )
}
export default Single