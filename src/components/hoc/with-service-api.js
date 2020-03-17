import React from "react";
import { ServiceConsumer } from "../service-context";

const withServiceApi = mapMethodsToProps => Wrapped => {
  return props => {
    return (
      <ServiceConsumer>
        {api => {
          const serviceProps = mapMethodsToProps(api);
          return <Wrapped {...props} {...serviceProps}></Wrapped>;
        }}
      </ServiceConsumer>
    );
  };
};

export default withServiceApi;
