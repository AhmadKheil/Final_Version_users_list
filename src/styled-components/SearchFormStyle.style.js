import { Alert, Layout, Row } from "antd";
import styled from "styled-components";

export const SearchLayoutStyle = styled(Layout)`
  background-color: white;
  border: 3px;
  border-color: gray;
  border-radius: 50%;
  margin: 0 7% 0 7%;
`;

export const RowStyle = styled(Row)`
  margin: 0 4% 0 4%;
  h3 {
    @media (max-width: 500px) {
      text-align: center;
      font-size: 12px;
      font-weight: bold;
    }
  }
`;

export const AlertStyle = styled(Alert)`
  margin: 0 4% 0 4%;
  height: 100px;
`;
