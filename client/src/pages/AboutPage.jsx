import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import aboutPage from "../assets/aboutPage2.jpg";
const AboutPage = () => {
  const [t, i18n] = useTranslation("translation");
  return (
    <AboutPageContainer>
      <div>
        <div className="container">
          <img className="landingPageImg" src={aboutPage} alt="" />
          <div className="text1">{t("aboutPage.titel")}</div>
        </div>

        <div className="advertising">
          <p>{t("aboutPage.text")}</p>
          <p>{t("aboutPage.text2")}</p>
        </div>
      </div>
    </AboutPageContainer>
  );
};

export default AboutPage;

export const AboutPageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  .container {
    width: 100%;
    position: relative;
    margin-bottom: 40px;
    .landingPageImg {
      width: 100%;
      opacity: 70%;
    }
    .text1 {
      position: absolute;
      color: white;
      top: 54%;
      left: 50%;
      transform: translate(-50%);
      opacity: 88%;
    }
  }
  @media (min-width: 400px) {
    .advertising {
      margin: 5vh auto;
      align-items: center;
      text-align: center;
      justify-content: center;
      width: 60%;
    }
  }

  p {
    padding: 50px;
    background-color: #fbfff3;
    color: black;
    line-height: 2rem;
    display: block;
    letter-spacing: 1px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0em;
    margin-inline-end: 0em;
  }

  @media only screen and (min-width: 1024px) {
    .text1 {
      font-size: 200%;
    }
  }
  @media only screen and (min-width: 1280px) {
    .text1 {
      font-size: 250%;
    }
  }
  @media only screen and (min-width: 1536px) {
    .text1 {
      font-size: 300%;
    }
  }
  @media only screen and (min-width: 1920px) {
    .text1 {
      font-size: 500%;
    }
    p {
      font-size: 180%;
    }
  }
`;
