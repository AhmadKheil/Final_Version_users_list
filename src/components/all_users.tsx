import React from "react";
import { Layout, Row } from "antd";
import Single from "./single_user";
import { User } from "../App";

function Users({
  users,
  updateCallbackfunc,
  deleteUserFunc,
}: {
  users: User[];
  updateCallbackfunc: CallableFunction;
  deleteUserFunc: CallableFunction;
}) {
  const { Content } = Layout;
  const handleCallback = (information: User) => {
    updateCallbackfunc(information);
  };

  const handleDelete = (id: number) => {
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
            {users.map((user: User) => {
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
