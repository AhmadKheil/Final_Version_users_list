import React from "react";
import { Layout, Row } from "antd";
import Single from "./single_user";
import { User, CallbackType1, CallbackType2 } from "../App";

function Users({
  users,
  updateCallbackfunc,
  deleteUserFunc,
}: {
  users: User[];
  updateCallbackfunc: CallbackType1;
  deleteUserFunc: CallbackType2;
}) {
  const { Content } = Layout;
  const handleCallback: CallbackType1 = (information: User) => {
    updateCallbackfunc(information);
  };

  const handleDelete: CallbackType2 = (id: number) => {
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
