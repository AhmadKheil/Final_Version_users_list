import styled from "styled-components";
import { Menu, Layout } from "antd";

export const RightSide = styled.div`
  float: left;
  display: flex;
  flex-direction: row;
  h3 {
    margin-left: 10px;
    margin-top: 15px;
    color: white;
  }

  svg {
    margin-top: 15px;
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 11px;
  }
  image {
    width: 40px;
    height: 40px;
    color: white;
  }
`;

export const MenuStyle = styled(Menu)`
  display: flex;
  float: right;

  @media (min-width: 700px) {
    flex-direction: row;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const HeaderFixed = styled(Layout.Header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;
