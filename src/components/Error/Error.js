import React from "react";
import {ErrorIcon, Text, Container} from "./Error.css";
import {useCalcPath} from "../../utils";

const Error = ({calc}) => {
  // const isCalcPath = useCalcPath();
  return (
    <Container>
      <ErrorIcon />
      <Text>
        {/* {isCalcPath ? "the number is too big!" : "something wrong :("} */}
        {calc ? "the number is too big!" : "something wrong :("}
      </Text>
    </Container>
  );
};

export default Error;
