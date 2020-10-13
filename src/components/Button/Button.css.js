import styled, {keyframes, css} from "styled-components";

const hearts = keyframes`
0% {
    transform: scale(1);
  }
  5% {
    transform: scale(1.1);
  }
  10% {
    transform: scale(1);
  }
  15% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
`;

const hover = keyframes`

  0% {
    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  1.8% {
    -webkit-transform: matrix3d(
      1.016,
      0,
      0,
      0,
      0,
      1.037,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.016, 0, 0, 0, 0, 1.037, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  3.5% {
    -webkit-transform: matrix3d(
      1.033,
      0,
      0,
      0,
      0,
      1.094,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.033, 0, 0, 0, 0, 1.094, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  4.7% {
    -webkit-transform: matrix3d(
      1.045,
      0,
      0,
      0,
      0,
      1.129,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.045, 0, 0, 0, 0, 1.129, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  5.31% {
    -webkit-transform: matrix3d(
      1.051,
      0,
      0,
      0,
      0,
      1.142,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.051, 0, 0, 0, 0, 1.142, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  7.01% {
    -webkit-transform: matrix3d(
      1.068,
      0,
      0,
      0,
      0,
      1.158,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.068, 0, 0, 0, 0, 1.158, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  8.91% {
    -webkit-transform: matrix3d(
      1.084,
      0,
      0,
      0,
      0,
      1.141,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.084, 0, 0, 0, 0, 1.141, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  9.41% {
    -webkit-transform: matrix3d(
      1.088,
      0,
      0,
      0,
      0,
      1.132,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.088, 0, 0, 0, 0, 1.132, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  10.71% {
    -webkit-transform: matrix3d(
      1.097,
      0,
      0,
      0,
      0,
      1.107,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.097, 0, 0, 0, 0, 1.107, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  12.61% {
    -webkit-transform: matrix3d(
      1.108,
      0,
      0,
      0,
      0,
      1.077,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.108, 0, 0, 0, 0, 1.077, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  14.11% {
    -webkit-transform: matrix3d(
      1.114,
      0,
      0,
      0,
      0,
      1.067,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.114, 0, 0, 0, 0, 1.067, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  14.41% {
    -webkit-transform: matrix3d(
      1.115,
      0,
      0,
      0,
      0,
      1.067,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.115, 0, 0, 0, 0, 1.067, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  16.32% {
    -webkit-transform: matrix3d(
      1.119,
      0,
      0,
      0,
      0,
      1.077,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.119, 0, 0, 0, 0, 1.077, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  18.12% {
    -webkit-transform: matrix3d(
      1.121,
      0,
      0,
      0,
      0,
      1.096,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.121, 0, 0, 0, 0, 1.096, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  18.72% {
    -webkit-transform: matrix3d(
      1.121,
      0,
      0,
      0,
      0,
      1.102,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.121, 0, 0, 0, 0, 1.102, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  20.02% {
    -webkit-transform: matrix3d(
      1.121,
      0,
      0,
      0,
      0,
      1.113,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.121, 0, 0, 0, 0, 1.113, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  21.82% {
    -webkit-transform: matrix3d(
      1.119,
      0,
      0,
      0,
      0,
      1.119,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.119, 0, 0, 0, 0, 1.119, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  24.32% {
    -webkit-transform: matrix3d(
      1.115,
      0,
      0,
      0,
      0,
      1.11,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.115, 0, 0, 0, 0, 1.11, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  25.53% {
    -webkit-transform: matrix3d(
      1.113,
      0,
      0,
      0,
      0,
      1.102,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.113, 0, 0, 0, 0, 1.102, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  29.23% {
    -webkit-transform: matrix3d(
      1.106,
      0,
      0,
      0,
      0,
      1.089,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.106, 0, 0, 0, 0, 1.089, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  29.93% {
    -webkit-transform: matrix3d(
      1.105,
      0,
      0,
      0,
      0,
      1.09,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.105, 0, 0, 0, 0, 1.09, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  35.54% {
    -webkit-transform: matrix3d(
      1.098,
      0,
      0,
      0,
      0,
      1.105,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.098, 0, 0, 0, 0, 1.105, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  36.64% {
    -webkit-transform: matrix3d(
      1.097,
      0,
      0,
      0,
      0,
      1.106,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.097, 0, 0, 0, 0, 1.106, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  41.04% {
    -webkit-transform: matrix3d(
      1.096,
      0,
      0,
      0,
      0,
      1.099,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.096, 0, 0, 0, 0, 1.099, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  44.04% {
    -webkit-transform: matrix3d(
      1.096,
      0,
      0,
      0,
      0,
      1.097,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.096, 0, 0, 0, 0, 1.097, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  51.45% {
    -webkit-transform: matrix3d(
      1.099,
      0,
      0,
      0,
      0,
      1.102,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.099, 0, 0, 0, 0, 1.102, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  52.15% {
    -webkit-transform: matrix3d(
      1.099,
      0,
      0,
      0,
      0,
      1.102,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.099, 0, 0, 0, 0, 1.102, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  58.86% {
    -webkit-transform: matrix3d(
      1.101,
      0,
      0,
      0,
      0,
      1.099,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.101, 0, 0, 0, 0, 1.099, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  63.26% {
    -webkit-transform: matrix3d(
      1.101,
      0,
      0,
      0,
      0,
      1.1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.101, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  66.27% {
    -webkit-transform: matrix3d(
      1.101,
      0,
      0,
      0,
      0,
      1.101,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.101, 0, 0, 0, 0, 1.101, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  73.77% {
    -webkit-transform: matrix3d(
      1.1,
      0,
      0,
      0,
      0,
      1.1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  81.18% {
    -webkit-transform: matrix3d(
      1.1,
      0,
      0,
      0,
      0,
      1.1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  85.49% {
    -webkit-transform: matrix3d(
      1.1,
      0,
      0,
      0,
      0,
      1.1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  88.59% {
    -webkit-transform: matrix3d(
      1.1,
      0,
      0,
      0,
      0,
      1.1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  96% {
    -webkit-transform: matrix3d(
      1.1,
      0,
      0,
      0,
      0,
      1.1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  100% {
    -webkit-transform: matrix3d(
      1.1,
      0,
      0,
      0,
      0,
      1.1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }


`;

export const ButtonCta = styled.button`
  /* font-size: 24px; */
  width: 100%;
  height: 70%;
  border: none;
  background-color: transparent;
  margin: auto;

  ${({primary}) =>
    primary &&
    css`
      animation: ${hearts} 2.5s linear infinite;
    `}
  ${({secondary}) =>
    secondary &&
    css`
      background-color: ${({theme}) => theme.color.orange.normal};
      border-radius: 5px;
    `}
  ${({margin}) =>
    margin &&
    css`
      margin: 0 25px;
      width: auto;
    `}
`;

export const ButtonLink = styled.a`
  padding: 8px 15px;
  border-radius: 5px;
  color: ${({theme}) => theme.color.blue.dark};
  background-color: ${({theme}) => theme.color.orange.normal};
  font-size: 14px;
  margin: 0;
  text-decoration: none;

  &:hover {
    animation: ${hover} 1.2s linear 2 alternate;
  }
`;
