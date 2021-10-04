import { Card, Input, Button } from "antd";
import styled from "styled-components";

export const CardStyle = styled(Card)`
  width: 18rem;
  margin-top: 2%;
  border-radius: 10px;
  background-color: ${({ selected }) => (selected ? "#d1e7dd" : "white")};
  img {
    height: 286px;
    border-radius: 10px;
  }
`;

export const DivStyle = styled.div`
  text-align: center;
`;

export const InputStyle = styled(Input)`
  width: 90%;
  text-align: center;
  font-weight: bold;
`;

export const ButtonSyle = styled(Button)`
  color: "white";
  background-color: ${({ bgc }) => bgc};
  border-color: ${({ bgc }) => bgc};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};

  &:hover {
    background-color: ${({ bgc }) =>
      bgc === "#66CDAA" ? "#66ffc2" : "#0073e6"};
    border-color: ${({ bgc }) => (bgc === "#66CDAA" ? "#66ffc2" : "#0073e6")};
    transform: scale(0.9);
  }
`;
