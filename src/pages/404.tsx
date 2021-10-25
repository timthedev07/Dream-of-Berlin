import React from "react";
import { useRouter } from "next/router";
import { Nav } from "../components/Nav";
import { GetStaticProps, NextPage } from "next";

const NotFound: NextPage = () => {
  const { back } = useRouter();
  return (
    <>
      <Nav />
      <div id="not-found-page" className="page-content">
        <div className="not-found-content">
          <h1>
            4<img src="/images/earth.svg" style={{ width: "" }} alt="" />4
          </h1>
          <h3>The page you were looking for was not found.</h3>
          <button
            onClick={() => {
              back();
            }}
            className="animated-btn"
          >
            Go Back
          </button>
        </div>
        <img id="not-found-bg" alt="404bg" src="/images/404.jpg" />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
export default NotFound;
