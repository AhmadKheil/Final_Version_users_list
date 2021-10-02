import React, { useState } from "react";
import { Layout, Form, Input, Button, Select, Row, Col } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { User } from "../App";

function Adduser({ addUserfunc }: { addUserfunc: CallableFunction }) {
  const { Content } = Layout;
  const [addUser, setAddUser] = useState<User>({
    id: Math.floor(Math.random() * 1000000 + 10),
    first_name: "",
    last_name: "",
    email: "",
    avatar:
      "https://cdn2.iconfinder.com/data/icons/ecommerce-set-1-1/128/user_users_avatar_user_useri_icon-512.png",
  });

  const handleSubmit = (): void => {
    addUserfunc(addUser);
    setAddUser({
      id: Math.floor(Math.random() * 1000000 + 10),
      first_name: "",
      last_name: "",
      email: "",
      avatar:
        "https://cdn2.iconfinder.com/data/icons/ecommerce-set-1-1/128/user_users_avatar_user_useri_icon-512.png",
    });
  };

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
      <Layout
        style={{
          backgroundColor: "white",
          border: 3,
          borderColor: "gray",
          borderRadius: "50%",
          margin: "0 7% 0 7%",
        }}
      >
        <Content className="search align-items-center" id="add">
          <div style={{ textAlign: "center" }}>
            <h2>
              <u>Enter this information if you want to add a user!</u>
            </h2>
          </div>
          <br />
          <Form style={{ margin: "0% 1% 0% 1%" }} onFinish={handleSubmit}>
            <Row gutter={[8, 24]}>
              <Col span={8}>
                <Form.Item
                  label={<h5>Fisrt Name</h5>}
                  style={{ marginTop: "2%" }}
                >
                  <Input
                    placeholder="Enter your first name"
                    required
                    value={addUser.first_name}
                    onChange={(e) =>
                      setAddUser({ ...addUser, first_name: e.target.value })
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label={<h5>Last Name</h5>}
                  style={{ marginTop: "2%" }}
                >
                  <Input
                    placeholder="Enter your last name"
                    required
                    value={addUser.last_name}
                    onChange={(e) =>
                      setAddUser({ ...addUser, last_name: e.target.value })
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<h5>Email</h5>} style={{ marginTop: "2%" }}>
                  <Input
                    placeholder="Enter your email"
                    required
                    value={addUser.email}
                    onChange={(e) =>
                      setAddUser({ ...addUser, email: e.target.value })
                    }
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col sm={24}>
                <Form.Item
                  label={<h5>New Profile Photo</h5>}
                  style={{ marginTop: "2%" }}
                >
                  <Input
                    addonBefore={selectBefore}
                    addonAfter={selectAfter}
                    placeholder="Enter photo's url"
                    value={
                      addUser.avatar ===
                      "https://cdn2.iconfinder.com/data/icons/ecommerce-set-1-1/128/user_users_avatar_user_useri_icon-512.png"
                        ? ""
                        : addUser.avatar
                    }
                    onChange={(e) =>
                      setAddUser({ ...addUser, avatar: e.target.value })
                    }
                  />
                </Form.Item>
              </Col>
            </Row>
            <div style={{ textAlign: "center" }}>
              <Form.Item>
                <Button
                  type="primary"
                  style={{ marginBottom: "1%" }}
                  htmlType="submit"
                >
                  <UserAddOutlined /> Add User
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Content>
      </Layout>
    </>
  );
}
export default Adduser;
