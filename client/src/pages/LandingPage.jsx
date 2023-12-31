import { useTranslation } from "react-i18next";
import styled from "styled-components";
import landingImg from "../assets/landingPage.jpg";
import landingImg2 from "../assets/landingPage2.jpg";
import landingImg3 from "../assets/landingPage3.jpg";
const LandingPage = () => {
  const [t, i18n] = useTranslation("translation");

  return (
    <LandingPageContainer>
      <div>
        <div className="container">
          <img className="landingPageImg" src={landingImg} alt="" />
          <div className="text1">{t("home.titel")}</div>
        </div>

        <div className="advertising">
          <p>{t("home.text")}</p>

          <img className="profileImg" src={landingImg2} alt="" />
        </div>
        <hr className="shareHr" />

        <div className="advertising">
          <img className="profileImg" src={landingImg3} alt="" />

          <p>{t("home.text2")}</p>
        </div>
      </div>
    </LandingPageContainer>
  );
};

export default LandingPage;

export const LandingPageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  .container {
    width: 100%;
    position: relative;

    .landingPageImg {
      width: 100%;
      opacity: 70%;
    }
    .text1 {
      position: absolute;
      color: white;
      top: 50%;
      left: 50%;
      transform: translate(-50%);
      opacity: 88%;
    }
  }
  @media (min-width: 400px) {
    .advertising {
      padding: 70px;
      display: flex;
      margin: 5vh auto;
      justify-content: center;
    }
  }

  p {
    padding: 40px;
    background-color: #fbfff3;
    max-width: 50rem;
    text-align: left;
    color: black;
    line-height: 2.8rem;
    display: block;
    letter-spacing: 1px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0em;
    margin-inline-end: 0em;
  }

  .profileImg {
    padding: 20px;
    max-width: 38vh;
    opacity: 70%;
    object-fit: cover;
  }

  .shareHr {
    width: 80%;
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
