import React, { useContext, useState } from "react";
import { Card, Col, Divider, Form, Row, Popconfirm } from "antd";
import { EditOutlined, SaveOutlined, DeleteOutlined } from "@ant-design/icons";
import { styleContext } from "./context";
import { CallbackType1, CallbackType2, User } from "../App";
import {
  ButtonSyle,
  CardStyle,
  DivStyle,
  InputStyle,
} from "../styled-components/SingleUserStyle.style";

function Single({
  data,
  callbackfunc,
  deletefunc,
}: {
  data: User;
  callbackfunc: CallbackType1;
  deletefunc: CallbackType2;
}) {
  const [styleId, setStyleId] = useContext(styleContext);
  const [disableButton, setDisableButton] = useState(true);
  const [information, setInformation] = useState<User>({
    id: data.id,
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    avatar: data.avatar,
  });

  const handleSubmit = (): void => {
    callbackfunc(information);
    setDisableButton(true);
  };

  const handleDelete = () => {
    deletefunc(information.id);
  };

  const cancel = () => console.log("delete operation canceled");

  const { Meta } = Card;
  return (
    <>
      <Col sm={8}>
        <CardStyle
          selected={styleId.toString() === data.id.toString()}
          id={data.id.toString()}
          onClick={() => {
            setStyleId("");
          }}
          hoverable
          cover={<img src={data.avatar} alt="" />}
        >
          <Meta
            title={
              <b>
                <u>{"User Info :"}</u>
              </b>
            }
            description="Lorem ipsum odor amet, consectetuer adipiscing elit.
                            Vel nullam eleifend vivamus. Augue urna sed velit elit.
                            Malesuada sodales ridiculus sodales. Tempor netus varius mauris."
          />
          <Form onFinish={handleSubmit}>
            <Divider>First Name</Divider>
            <DivStyle>
              <Form.Item>
                <InputStyle
                  type="text"
                  required
                  disabled={disableButton}
                  value={information.first_name}
                  onChange={(e: any) =>
                    setInformation({
                      ...information,
                      first_name: e.target.value,
                    })
                  }
                />
              </Form.Item>
            </DivStyle>
            <Divider>Last Name</Divider>
            <DivStyle>
              <Form.Item>
                <InputStyle
                  type="text"
                  required
                  disabled={disableButton}
                  value={information.last_name}
                  onChange={(e: any) =>
                    setInformation({
                      ...information,
                      last_name: e.target.value,
                    })
                  }
                />
              </Form.Item>
            </DivStyle>
            <Divider>Email</Divider>
            <DivStyle>
              <Form.Item>
                <InputStyle
                  type="text"
                  required
                  disabled={disableButton}
                  value={information.email}
                  onChange={(e: any) =>
                    setInformation({
                      ...information,
                      email: e.target.value,
                    })
                  }
                />
              </Form.Item>
            </DivStyle>
            <Divider />
            <Row>
              <Col span={8}>
                <Popconfirm
                  title="Are you sure you want to delete this user?"
                  onConfirm={handleDelete}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <ButtonSyle type="primary" danger>
                    <DeleteOutlined /> Del
                  </ButtonSyle>
                </Popconfirm>
              </Col>
              <Col span={8}>
                <ButtonSyle
                  type="primary"
                  onClick={() => setDisableButton(!disableButton)}
                  disabled={!disableButton}
                >
                  <EditOutlined /> Edit
                </ButtonSyle>
              </Col>
              <Col span={8}>
                <ButtonSyle
                  type="primary"
                  bgc="#66CDAA"
                  htmlType="submit"
                  disabled={disableButton}
                >
                  <SaveOutlined /> Save
                </ButtonSyle>
              </Col>
            </Row>
          </Form>
        </CardStyle>
      </Col>
    </>
  );
}
export default Single;
