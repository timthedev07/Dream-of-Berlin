import { GetStaticProps, NextPage } from "next";
import React from "react";
import { Nav } from "../components/Nav";

const Credit: NextPage = () => {
  let spacer = [
    <br />,
    <br />,
    <br />,
    <br />,
    <br />,
    <br />,
    <br />,
    <br />,
    <br />,
    <br />,
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
