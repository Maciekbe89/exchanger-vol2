import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
`;

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 25px;
  height: 75vh;
  padding-top: 15px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 20px;
  margin: 0;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Description = styled.p`
  font-size: 14px;
  color: white;
  text-align: justify;
`;
