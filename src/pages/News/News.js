import React, {useEffect, useState} from "react";
import {Container, ArticleWrapper, Title, Description, Image} from "./News.css";
import {Button} from "../../components";
import IMG from "../../assets/img/finance.jpg";
import Carousel from "react-elastic-carousel";
import {ResultsDemographics} from "styled-icons/foundation";

const News = () => {
  const [result, setResult] = useState([]);

  const API = "https://rss.app/feeds/oNwptth2JLtqxDVx.xml";

  useEffect(() => {
    const fetchData = async () => {
      const buffer = await fetch(API);
      const content = await buffer.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(content, "text/xml");
      const items = Array.from(doc.querySelectorAll("item"));
      console.log(items.length);
      setResult(
        items.map((item) => {
          return {
            title: item.children[0].textContent,
            link: item.children[2].textContent,
            // image: item.children[6].attributes[1].nodeValue,
          };
        })
      );
      console.log(items);
    };
    fetchData();
  }, [API]);

  return (
    <Container>
      <Carousel>
        {result.map(({title, image, link}) => (
          <ArticleWrapper>
            <Title>{title}</Title>
            <Button readMore link={link}>
              read more
            </Button>
            {/* <Image src={image} /> */}
          </ArticleWrapper>
        ))}
        {/* <ArticleWrapper>
          <Title>5 Financial Things to Consider Before Quitting</Title>
          <Image src={IMG} alt="finance image" />
          <Description>
            You’re ready to quit your job, at least, you think you are. While
            it’s better to wait until you have a new job offer before quitting,
            sometimes circumstances don’t allow for that ideal situation to line
            up.
          </Description>
          <Button readMore>Read more</Button>
        </ArticleWrapper> */}
        {/* <ArticleWrapper>
          <Title>ziomeczku elo</Title>
          <Image src={IMG} alt="finance image" />
          <Description>lorem lorem ipsum ipsmu finfnaoano kod...</Description>
          <Button readMore>Read more</Button>
        </ArticleWrapper> */}
      </Carousel>
    </Container>
  );
};

export default News;
