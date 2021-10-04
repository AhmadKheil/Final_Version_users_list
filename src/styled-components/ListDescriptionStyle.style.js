import styled from "styled-components";
import { Layout } from "antd";

export const LayoutStyle = styled(Layout)`
  background-color: white;
  margin: 3% 7% 0 7%;
  h4 {
    @media (max-width: 700px) {
      text-align: center;
    }
  }
`;

export const ContentStyle = styled(Layout.Content)`
  @media (max-width: 800px) {
    margin-top: 15%;
  }
`;
