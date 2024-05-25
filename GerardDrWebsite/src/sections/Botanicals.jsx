import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import botanicals from "../assets/Images/botanicals.webp";
import camomileflower from "../assets/Images/camomile-flowers.webp";
import cardamonpods from "../assets/Images/cardamon-pods.webp";
import hulledcardamon from "../assets/Images/hulled-cardamon.webp";
import elderberries from "../assets/Images/elderberries.webp";
import juniperberries from "../assets/Images/juniper-berries.webp";
import kitchenglass from "../assets/Images/kitchen-glass.webp";
import orangepeels from "../assets/Images/orange-peels.webp";
import rosehips from "../assets/Images/rosehips.webp";
import staranise from "../assets/Images/star-anise.webp";

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  /* background-color: orange; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Metamorphous";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = "" }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img width="400" height="600" src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Botanicals = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="botanicals">
      <Title data-scroll data-scroll-speed="-1">
        Botanicals
      </Title>
      <Left>
        <p>

          Gin originated as a medicinal liquor crafted by monks and alchemists throughout Europe. The modern form of gin was refined in Flanders and the Netherlands, where it was distilled from grapes and grains to produce aqua vita, eventually becoming a significant commercial spirit. Its popularity in England soared following the introduction of jenever, a Dutch and Belgian liquor. This trend began in the early 17th century but gained substantial momentum after the 1688 Glorious Revolution led by William of Orange and the subsequent import restrictions on French brandy. Consequently, gin emerged as England's national alcoholic drink during the Gin Craze of 1695–1735.
          <br /> <br />
          We produce our gin by following the oldest oldest distillation tradition; pot distillation. We begin with a fermented grain mash, which is then redistilled with our signature blend of botanicals to extract aromatic compounds. These botanicals contribute to the complex flavor profile of the gin, adding layers of aroma and taste. This leads to a diverse gin with unmatched quality and unique characteristics.
        </p>
      </Left>
      <Right data-scroll ref={Horizontalref}>
        {/* <Product img={botanicals} title="Botanicals" /> */}
        <Product img={juniperberries} title="Juniper Berries" />
        <Product img={elderberries} title="Elderberries" />
        <Product img={camomileflower} title="Camomile Flower" />
        <Product img={cardamonpods} title="Cardamon Pods" />
        <Product img={hulledcardamon} title="Hulled Cardamon" />
        <Product img={orangepeels} title="Orange Peels" />
        <Product img={rosehips} title="Rosehips" />
        <Product img={staranise} title="Star Anise" />
      </Right>
    </Section>
  );
};

export default Botanicals;
