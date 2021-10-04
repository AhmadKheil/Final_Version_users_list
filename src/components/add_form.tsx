import React, { useState } from "react";
import { Layout, Form, Input, Button, Select, Row, Col } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { User, CallbackType1 } from "../App";
import {
  AddFormLayoutStyle,
  Div,
  FormStyle,
  FormItem,
} from "../styled-components/AddFormStyle.style";

function Adduser({ addUserfunc }: { addUserfunc: CallbackType1 }) {
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
      <AddFormLayoutStyle>
        <Content className="search align-items-center" id="add">
          <Div>
            <h2>
              <u>Enter this information if you want to add a user!</u>
            </h2>
          </Div>
          <br />
          <FormStyle onFinish={handleSubmit}>
            <Row gutter={[8, 24]}>
              <Col xs={24} xl={8}>
                <FormItem label={<h5>Fisrt Name</h5>}>
                  <Input
                    placeholder="Enter your first name"
                    required
                    value={addUser.first_name}
                    onChange={(e) =>
                      setAddUser({ ...addUser, first_name: e.target.value })
                    }
                  />
                </FormItem>
              </Col>
              <Col xs={24} xl={8}>
                <FormItem label={<h5>Last Name</h5>}>
                  <Input
                    placeholder="Enter your last name"
                    required
                    value={addUser.last_name}
                    onChange={(e) =>
                      setAddUser({ ...addUser, last_name: e.target.value })
                    }
                  />
                </FormItem>
              </Col>
              <Col xs={24} xl={8}>
                <FormItem label={<h5>Email</h5>}>
                  <Input
                    placeholder="Enter your email"
                    required
                    value={addUser.email}
                    onChange={(e) =>
                      setAddUser({ ...addUser, email: e.target.value })
                    }
                  />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={[8, 24]}>
              <Col sm={24}>
                <FormItem label={<h5>New Profile Photo</h5>}>
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
                </FormItem>
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
          </FormStyle>
        </Content>
      </AddFormLayoutStyle>
    </>
  );
}
export default Adduser;
