import { Layout } from "antd";
import styled from "styled-components";
import { Form } from "antd";

export const AddFormLayoutStyle = styled(Layout)`
  background-color: white;
  border: 3px;
  border-color: gray;
  border-radius: 50%;
  margin: 0 7% 0 7%;
`;

export const Div = styled.div`
  text-align: center;
`;

export const FormStyle = styled(Form)`
  margin: 0% 1% 0% 1%;
`;

export const FormItem = styled(Form.Item)`
  margin-top: 2%;
`;
