import styled from "styled-components";
import {Error} from "@styled-icons/boxicons-solid/Error";

export const ErrorIcon = styled(Error)`
  color: ${({theme}) => theme.color.orange.normal};
`;

export const Text = styled.p`
  font-size: 2em;
`;
