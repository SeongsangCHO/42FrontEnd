import "antd/dist/antd.css";
import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import wrapper from '../redux/store/configureStore'
const Nodebird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Nodebird</title>
        <meta charSet="utf-8" />
      </Head>
      <Component />
    </>
  );
};

Nodebird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(Nodebird);
