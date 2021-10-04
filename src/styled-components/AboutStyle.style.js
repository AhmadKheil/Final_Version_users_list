import { Content } from "antd/lib/layout/layout";
import styled from "styled-components";

export const AboutStyle = styled(Content)`
  margin-top: 4%;
  background: rgb(23, 22, 23);
  background: linear-gradient(
    90deg,
    rgba(23, 22, 23, 0.8914916308320203) 6%,
    rgba(91, 91, 93, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  h6 {
    color: white;
    opacity: 0.5;
  }
`;
