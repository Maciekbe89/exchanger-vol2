import styled, {keyframes} from "styled-components";
import {device} from "../../utils";

const appear = keyframes`
0% {
  opacity: 0;
    transform: scale(.7);
}

100% {
  opacity: 1;
    transform: scale(1);
}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;

  .rec-carousel {
    height: 70vh;
  }
  .rec.rec-arrow,
  .rec-dot {
    background-color: ${({theme}) => theme.color.orange.normal};
  }
  .rec.rec-arrow {
    min-width: 1.7em;
    height: 1.7em;
    line-height: 1.7em;
    font-size: 1.5em;
  }
  .rec-dot {
    box-shadow: none;
    height: 0.481em;
    width: 0.481em;
  }
  .rec.rec-arrow-right {
    margin-right: 0.416em;
  }
  .rec.rec-arrow-left {
    margin-left: 0.416em;
  }

  .rec.rec-arrow:disabled {
    opacity: 0;
  }
  .rec.rec-dot_active {
    box-shadow: 0 0 1px 3px #fff !important;
  }
  .rec.rec-arrow:hover {
    background-color: ${({theme}) => theme.color.orange.normal};
  }
  .rec-pagination {
    margin: 0;
  }
`;

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 75vh;
  outline: none;
  animation: ${appear} 1s ease-in-out;
  @media ${device.webSmall}, ${device.mobileLandscape} {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 1em;
  margin: 0;
  text-align: center;
  @media ${device.webSmall}, ${device.mobileLandscape} {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  @media ${device.webSmall}, ${device.mobileLandscape} {
    width: 45%;
  }
`;

export const Description = styled.p`
  font-size: 0.875em;
  color: white;
  @media ${device.webSmall}, ${device.mobileLandscape} {
    width: 45%;
  }
`;
