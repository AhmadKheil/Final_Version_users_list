import React from 'react'
import {Layout , Row} from 'antd'
import Single from './single_user'

function Users({users})
{
    const {Content} = Layout
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