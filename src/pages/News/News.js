import React from "react";
import {Container, ArticleWrapper, Title, Description, Image} from "./News.css";
import {Button} from "../../components";
import IMG from "../../assets/img/finance.jpg";
import Carousel from "react-elastic-carousel";

const News = () => {
  return (
    <Container>
      <Carousel>
        <ArticleWrapper>
          <Title>5 Financial Things to Consider Before Quitting</Title>
          <Image src={IMG} alt="finance image" />
          <Description>
            You’re ready to quit your job, at least, you think you are. While
            it’s better to wait until you have a new job offer before quitting,
            sometimes circumstances don’t allow for that ideal situation to line
            up.
          </Description>
          <Button readMore>Read more</Button>
        </ArticleWrapper>
        <ArticleWrapper>
          <Title>ziomeczku elo</Title>
          <Image src={IMG} alt="finance image" />
          <Description>lorem lorem ipsum ipsmu finfnaoano kod...</Description>
          <Button readMore>Read more</Button>
        </ArticleWrapper>
      </Carousel>
    </Container>
  );
};

export default News;
