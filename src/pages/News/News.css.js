import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;

  .rec.rec-arrow,
  .rec-dot {
    background-color: ${({theme}) => theme.color.orange.normal};
  }
  .rec.rec-arrow {
    min-width: 40px;
    height: 40px;
    line-height: 40px;
  }
  .rec-dot {
    box-shadow: none;
  }
  .rec.rec-arrow-right {
    margin-right: 10px;
  }
  .rec.rec-arrow-left {
    margin-left: 10px;
  }

  .rec.rec-arrow:disabled {
    opacity: 0;
  }
  .rec.rec-dot_active {
    box-shadow: 0 0 1px 3px #fff;
  }
  .rec.rec-arrow:hover {
    background-color: none;
  }
`;

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* margin: 0 25px; */
  height: 75vh;
  padding-top: 25px;
  outline: none;
`;

export const Title = styled.h1`
  color: white;
  font-size: 16px;
  margin: 0;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 30%;
`;

export const Description = styled.p`
  font-size: 14px;
  color: white;
  /* text-align: justify; */
`;
