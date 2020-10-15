import React, {useEffect, useState} from "react";
import {Container, ArticleWrapper, Title, Description, Image} from "./News.css";
import {Button} from "../../components";
import Carousel from "react-elastic-carousel";

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
      setResult(
        items.slice(15).map((item) => {
          return {
            title: item.children[0].textContent,
            description: item.children[1].textContent
              .split('"><div>')[1]
              .replace("</div></div>", ""),

            link: item.children[2].textContent,
            image: item.children[6].getAttribute("url"),
          };
        })
      );
    };
    fetchData();
  }, [API]);

  return (
    <Container>
      <Carousel>
        {result.map(({title, description, link, image}) => (
          <ArticleWrapper key={title}>
            <Title>{title}</Title>
            <Image src={image} />
            <Description>{description}</Description>
            <Button link={link}>read more</Button>
          </ArticleWrapper>
        ))}
      </Carousel>
    </Container>
  );
};

export default News;
