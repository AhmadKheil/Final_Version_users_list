import React , {useContext} from 'react'
import {Layout , Row} from 'antd'
import Single from './single_user'
import { addUserContext } from './context'

function Users({users})
{
    const { Content } = Layout
    const [addUser,setAddUser] = useContext(addUserContext)
    if (addUser.id !== undefined) {
        users.push(addUser)
        setAddUser({})
    }
    return (
        <>
            <Layout id='cards' style={{marginTop: '4%' , marginLeft : '7%' , backgroundColor : 'white'}}>
                <Content>
                    <Row>
                    {
                        users.map(user => {
                            return <Single key={user.id} data={user}/>
                        })
                    }
                </Row>
                </Content>
            </Layout>
        </>
    )
}
export default Users