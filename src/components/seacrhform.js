import React, { useState, useContext } from "react";
import { styleContext } from "./context";
import { Layout, Row, Col, Form, Input, Button, Alert, Divider } from "antd";
import { Content } from "antd/lib/layout/layout";
import { SearchOutlined } from "@ant-design/icons";

function Search({ users }) {
  const [styleId, setStyleId] = useContext(styleContext);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [alertId, setAlertId] = useState([]);
  const [variant, setVariant] = useState("");

  var results = [];
  var ids_of_results = [];
  var final_ids = [];
  var count = 0;

  const handlesubmit = () => {
    const first_names = users.map((user) => {
      return user.first_name;
    });
    const last_names = users.map((user) => {
      return user.last_name;
    });

    for (let i = 0; i < first_names.length; i++) {
      if (first_names[i].search(name) !== -1) {
        results[results.length] = first_names[i];
        // eslint-disable-next-line array-callback-return
        const id = users.map((user) => {
          if (user.first_name === first_names[i]) {
            return user.id;
          }
        });
        ids_of_results[ids_of_results.length] = id;
      }
      if (last_names[i].search(name) !== -1) {
        results[results.length] = last_names[i];
        // eslint-disable-next-line array-callback-return
        const id = users.map((user) => {
          if (user.last_name === last_names[i]) {
            return user.id;
          }
        });
        ids_of_results[ids_of_results.length] = id;
      }
    }

    for (let i = 0; i < ids_of_results.length; i++) {
      for (let j = 0; j < ids_of_results[0].length; j++) {
        if (ids_of_results[i][j] !== undefined) {
          final_ids[final_ids.length] = ids_of_results[i][j];
        }
      }
    }

    if (results.length > 0) {
      setShowMessage(true);
      setMessage(
        "This name is correct , the search operation was finished successfully!!"
      );
      setVariant("success");
      setAlertId(
        // eslint-disable-next-line array-callback-return
        final_ids.map((id) => {
          return (
            <>
              <Button
                key={id}
                type="link"
                onClick={() => {
                  setStyleId(id);
                  window.location.href = "#" + id;
                }}
              >
                {"Go to " + results[count++]}
              </Button>
              <Divider type="vertical" style={{ backgroundColor: "gray" }} />
            </>
          );
        })
      );
      setName("");
      return;
    } else {
      setShowMessage(true);
      setMessage(
        "This name is incorrect , search operation failed, please try another Name !"
      );
      setVariant("error");
      setStyleId("");
      setAlertId(undefined);
      setName("");
      console.log(styleId);
      return;
    }
  };

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
        <Content className="search align-items-center">
          <Row style={{ margin: "0 4% 0 4%" }}>
            <Col sm={18}>
              {" "}
              <h3>
                <u>
                  If you want to seacrh a specific user , enter his First/Last
                  name here!
                </u>
              </h3>
            </Col>
            <Col sm={6}>
              <Form className="searchform" onFinish={handlesubmit}>
                <Row className="align-items-center">
                  <Col className="customcol">
                    <Form.Item>
                      <Input
                        style={{ width: "90%" }}
                        placeholder="Enter ID"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item>
                      {" "}
                      <Button
                        htmlType="submit"
                        style={{ borderRadius: "7px" }}
                        type="primary"
                        icon={<SearchOutlined />}
                      >
                        Search
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          {showMessage ? (
            <>
              {" "}
              <Alert
                style={{ margin: "0 4% 0 4%", height: "100px" }}
                type={variant === "success" ? "success" : "error"}
                message={message}
                action={alertId}
                showIcon
                closable
                afterClose={() => setShowMessage(false)}
              />
              <br />
            </>
          ) : null}
        </Content>
      </Layout>
    </>
  );
}
export default Search;
