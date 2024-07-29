import React from "react";
import styled from "styled-components";

import camomileflower from "../assets/Images/camomile-flowers.webp";
import cardamonpods from "../assets/Images/cardamon-pods.webp";
import cardamon from "../assets/Images/cardamon-pods.webp";
import elderberries from "../assets/Images/elderberries.webp";
import juniperberries from "../assets/Images/juniper-berries.webp";
import kitchenglass from "../assets/Images/kitchen-glass.webp";
import orangepeels from "../assets/Images/orange-peels.webp";
import rosehips from "../assets/Images/rosehips.webp";
import staranise from "../assets/Images/star-anise.webp";
import still1 from "../assets/Images/still1.webp";
import still2 from "../assets/Images/still2.webp";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  position: relative;

  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  color: white;
  position: relative;
  z-index: 5;
  margin-top: 10%;

  @media (max-width: 64em) {
    width: 80%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 70%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  /* min-height: 100vh; */

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    top: 30%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;

      position: absolute;
      left: 60%;
      bottom: 20%;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Metamorphous";
  font-weight: 200;
  color: white;
  /* text-transform: capitalize; */

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const About = () => {
  return (
    <div style={{ backgroundColor: 'rgba(112, 66, 20, 0.5)', padding:'.25 rem' }}>
      <Section id="fixed-target" className="about">
        <Title
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          About Us
        </Title>
        <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
          At Gerard Drive Gin, we cherish the timeless tradition of gin making. With a nod to history, we trace gin's evolution from its medicinal roots to a beloved spirit worldwide. Picture 18th-century England, where gin surged in popularity, immortalized in cultural references like William Hogarth's 'Gin Lane.' This era marked a cultural shift as gin joints welcomed women alongside men for the first time. Derived from the Dutch word "Genever" or the French "Genievre," gin carries with it a rich European heritage, reflecting centuries of craftsmanship and innovation.
          <br />
          <br />
          Our story began at Gerard Drive in East Hampton, where we sourced our first juniper berries—the cornerstone botanical in gin production. These berries, handpicked from pristine landscapes, embody the essence of our commitment to quality and authenticity. Each juniper berry contributes to the intricate flavor profile of our gin, encapsulating the spirit of our artisanal approach to distillation.
          <br />
          <br />
          Indulge in the unparalleled craftsmanship of our gin. With meticulous attention to detail and a dedication to traditional methods, each bottle is a testament to our passion for excellence. From the harmonious blend of botanicals to the smooth, nuanced finish, our gin is a true masterpiece. Elevate your cocktail experience with our artisanal gin, crafted from our estate grown grapes, distilled with care and expertise for the discerning palate!
        </Left>

        <Right>
          <img width="400"
            height="600"
            src={still2}
            alt="About Us" />

          <img
            width="500"
            height="700"
            className="small-img-1"
            src={kitchenglass}
            alt="About Us"
            data-scroll
            data-scroll-speed="5"
            // style={{ filter: 'brightness(50%)' }}
          />

          {/* <img
            width="400"
            height="600"
            className="small-img-2"
            src={staranise}
            alt="About Us"
            data-scroll
            data-scroll-speed="-2"
          /> */}
        </Right>
      </Section>
    </div>
  );
};


export default About;
