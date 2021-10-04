import React from "react";
import { Layout } from "antd";
import { LoremIpsum } from "react-lorem-ipsum";
import { AboutStyle } from "../styled-components/AboutStyle.style";

function About() {
  return (
    <>
      <Layout id="about" style={{ backgroundColor: "white" }}>
        <AboutStyle>
          <center>
            <br />
            <h1 className="h1title">About Users List Web Site</h1>
          </center>
          <center>
            <LoremIpsum p={2} />
          </center>
          <br />
          <center>
            <h6>Copyright © 1997 - 2021 · All Rights Reserved</h6>
          </center>
          <br />
        </AboutStyle>
      </Layout>
    </>
  );
}
export default About;
