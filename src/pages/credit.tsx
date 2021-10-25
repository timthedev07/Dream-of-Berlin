import { GetStaticProps, NextPage } from "next";
import React from "react";
import { Nav } from "../components/Nav";

const Credit: NextPage = () => {
  let spacer = [
    <br key="1" />,
    <br key="2" />,
    <br key="3" />,
    <br key="4" />,
    <br key="5" />,
    <br key="6" />,
    <br key="7" />,
    <br key="8" />,
    <br key="9" />,
    <br key="10" />,
  ];
  return (
    <>
      <Nav />
      <div className="page-content">
        <div className="policies-container">
          <h1 className="info-heading">Credit</h1>
          <h6 className="info-heading">
            Cristina: Information collection(political parties, traditional
            dishes, celebrities, tourism, food)
          </h6>
          <h6 className="info-heading">
            Tim: Dev and information collection(sports, brief history, dialects,
            attractions, olympians).
          </h6>
          {spacer}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default Credit;
