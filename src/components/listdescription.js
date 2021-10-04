import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { LaptopOutlined } from "@ant-design/icons";
import { Layout, Button, Tooltip } from "antd";
import {
  ContentStyle,
  LayoutStyle,
} from "../styled-components/ListDescriptionStyle.style";

function Description() {
  const { Content } = Layout;
  return (
    <>
      <LayoutStyle>
        <ContentStyle className="desc">
          <h1>Users List</h1>
          <h4>
            <LoremIpsum p={1} />
          </h4>
        </ContentStyle>
      </LayoutStyle>
      <LayoutStyle>
        <Content>
          <center>
            <Button type="primary">Read more</Button>{" "}
            <Tooltip title="Watch demo">
              <Button icon={<LaptopOutlined />}>Watch Demo</Button>
            </Tooltip>
          </center>
        </Content>
      </LayoutStyle>
    </>
  );
}
export default Description;
