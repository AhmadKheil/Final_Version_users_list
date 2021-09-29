import React from "react";
import { Layout, Row } from "antd";
import Single from "./single_user";

function Users({ users, updateCallbackfunc, deleteUserFunc }) {
  const { Content } = Layout;
  const handleCallback = (information) => {
    updateCallbackfunc(information);
  };

  const handleDelete = (id) => {
    deleteUserFunc(id);
  };
  return (
    <>
      <Layout
        id="cards"
        style={{ marginTop: "4%", marginLeft: "7%", backgroundColor: "white" }}
      >
        <Content>
          <Row>
            {users.map((user) => {
              return (
                <Single
                  key={user.id}
                  data={user}
                  callbackfunc={handleCallback}
                  deletefunc={handleDelete}
                />
              );
            })}
          </Row>
        </Content>
      </Layout>
    </>
  );
}
export default Users;
