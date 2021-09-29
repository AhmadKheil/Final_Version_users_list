import React, { useContext, useState } from "react";
import { Card, Col, Divider, Button, Form, Input, Row } from "antd";
import { EditOutlined, SaveOutlined, DeleteOutlined } from "@ant-design/icons";
import { styleContext } from "./context";

function Single({ data, callbackfunc, deletefunc }) {
  const [styleId, setStyleId] = useContext(styleContext);
  const [disableButton, setDisableButton] = useState(true);
  const [information, setInformation] = useState({
    id: data.id,
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    avatar: data.avatar,
  });

  const handleSubmit = () => {
    callbackfunc(information);
    setDisableButton(true);
  };

  const handleDelete = () => {
    deletefunc(information.id);
  };

  const { Meta } = Card;
  return (
    <>
      <Col sm={8}>
        <Card
          style={
            styleId.toString() === data.id.toString()
              ? {
                  backgroundColor: "#d1e7dd",
                  width: "18rem",
                  marginTop: "2%",
                  borderRadius: "10px",
                }
              : { width: "18rem", marginTop: "2%", borderRadius: "10px" }
          }
          id={data.id}
          onClick={() => {
            setStyleId("");
          }}
          hoverable
          cover={
            <img
              style={{ height: 286, borderRadius: "10px" }}
              src={data.avatar}
              alt=""
            />
          }
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
            <center>
              <Form.Item>
                <Input
                  style={{
                    width: "90%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  type="text"
                  required
                  disabled={disableButton}
                  value={information.first_name}
                  onChange={(e) =>
                    setInformation({
                      ...information,
                      first_name: e.target.value,
                    })
                  }
                />
              </Form.Item>
            </center>
            <Divider>Last Name</Divider>
            <center>
              <Form.Item>
                <Input
                  style={{
                    width: "90%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  type="text"
                  required
                  disabled={disableButton}
                  value={information.last_name}
                  onChange={(e) =>
                    setInformation({
                      ...information,
                      last_name: e.target.value,
                    })
                  }
                />
              </Form.Item>
            </center>
            <Divider>Email</Divider>
            <center>
              <Form.Item>
                <Input
                  style={{
                    width: "90%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  type="text"
                  required
                  disabled={disableButton}
                  value={information.email}
                  onChange={(e) =>
                    setInformation({
                      ...information,
                      email: e.target.value,
                    })
                  }
                />
              </Form.Item>
            </center>
            <Divider />
            <Row>
              <Col span={8}>
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "red",
                    borderColor: "red",
                    marginRight: "15px",
                  }}
                  onClick={handleDelete}
                >
                  <DeleteOutlined /> Del
                </Button>
              </Col>
              <Col span={8}>
                <Button
                  type="primary"
                  onClick={() => setDisableButton(!disableButton)}
                  disabled={!disableButton}
                >
                  <EditOutlined /> Edit
                </Button>
              </Col>
              <Col span={8}>
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "#66CDAA",
                    borderColor: "#66CDAA",
                    marginLeft: "5px",
                  }}
                  htmlType="submit"
                  disabled={disableButton}
                >
                  <SaveOutlined /> Save
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </>
  );
}
export default Single;
