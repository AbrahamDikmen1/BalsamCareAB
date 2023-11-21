import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import servicePage from "../assets/servicePage.jpg";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import TodayIcon from "@mui/icons-material/Today";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const ServicePage = () => {
  const [t, i18n] = useTranslation("translation");
  return (
    <ServicePageContainer>
      <div>
        <div className="container">
          <img className="landingPageImg" src={servicePage} alt="" />
          <div className="text1">{t("servicePage.titel")}</div>
        </div>
        <div className="advertising">
          <div>
            <LocalHospitalIcon sx={{ mr: "17px", fontSize: "3rem" }} />
          </div>
          <p>{t("servicePage.text")}</p>
        </div>
        <hr className="shareHr" />
        <div className="advertising">
          <div>
            <DryCleaningIcon sx={{ mr: "17px", fontSize: "3rem" }} />
          </div>
          <p>{t("servicePage.text2")}</p>
        </div>
        <hr className="shareHr" />
        <div className="advertising">
          <div>
            <MedicationLiquidIcon sx={{ mr: "17px", fontSize: "3rem" }} />
          </div>
          <p>{t("servicePage.text3")}</p>
        </div>
        <hr className="shareHr" />
        <div className="advertising">
          <div>
            <Diversity1Icon sx={{ mr: "17px", fontSize: "3rem" }} />
          </div>
          <p>{t("servicePage.text4")}</p>
        </div>
        <hr className="shareHr" />
        <div className="advertising">
          <div>
            <TodayIcon sx={{ mr: "17px", fontSize: "3rem" }} />
          </div>
          <p>{t("servicePage.text5")}</p>
        </div>
        <hr className="shareHr" />
        <div className="advertising">
          <div>
            <VolunteerActivismIcon sx={{ mr: "17px", fontSize: "3rem" }} />
          </div>
          <p>{t("servicePage.text6")}</p>
        </div>
        <hr className="shareHr" />
        <div className="advertising">
          <p>{t("servicePage.text7")}</p>
        </div>
      </div>
    </ServicePageContainer>
  );
};

export default ServicePage;

export const ServicePageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 20px;
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
      display: flex;
      margin: 5vh auto;
      align-items: center;
      text-align: center;
      justify-content: center;
      width: 50%;
    }
  }

  p {
    padding: 50px;
    background-color: #fbfff3;
    color: black;
    line-height: 2rem;
    display: block;

    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0em;
    margin-inline-end: 0em;
  }
  .shareHr {
    width: 70%;
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
      font-size: 150%;
    }
  }
`;
