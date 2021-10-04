import React from "react";
import { Layout, Menu } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import "antd/dist/antd.css";
import {
  HomeOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import {
  HeaderFixed,
  MenuStyle,
  RightSide,
} from "../styled-components/HeaderStyle.style";

function Header() {
  return (
    <>
      <Layout>
        <HeaderFixed>
          <RightSide>
            <svg>
              <image href="https://static.thenounproject.com/png/402528-200.png" />
            </svg>
            <h3>Users List</h3>
          </RightSide>
          <MenuStyle theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              {/* eslint-disable-next-line */}
              <a href="#">
                <HomeOutlined /> Home
              </a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="#cards">
                <UnorderedListOutlined /> Users List
              </a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="#add">
                <UserAddOutlined /> Add Form
              </a>
            </Menu.Item>
            <Menu.Item key="4">
              <a href="#about">
                <InfoCircleOutlined /> About
              </a>
            </Menu.Item>
          </MenuStyle>
        </HeaderFixed>
      </Layout>
    </>
  );
}
export default Header;
