import styled from "styled-components";
import {Error} from "@styled-icons/boxicons-solid/Error";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorIcon = styled(Error)`
  width: 4em;
  color: ${({theme}) => theme.color.orange.normal};
`;

export const Text = styled.p`
  font-size: 1.2em;
`;
