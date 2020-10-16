import React from "react";
import {ErrorIcon, Text, Container} from "./Error.css";

const Error = () => {
  return (
    <Container>
      <ErrorIcon />
      <Text>something wrong :(</Text>
    </Container>
  );
};

export default Error;
