import React from "react";
import {ErrorIcon, Text, Container} from "./Error.css";

const Error = ({calc}) => {
  return (
    <Container>
      <ErrorIcon />
      <Text>{calc ? "the number is too big!" : "something wrong :("}</Text>
    </Container>
  );
};

export default Error;
