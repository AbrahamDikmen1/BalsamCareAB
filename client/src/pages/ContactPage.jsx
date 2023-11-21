import React from "react";
import { useState } from "react";
import styled from "styled-components";
import contactPage from "../assets/contactPage.jpg";
import { useTranslation } from "react-i18next";
import PhoneIcon from "@mui/icons-material/Phone";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import { Button, Typography } from "@mui/material";

const ContactPage = () => {
  const [t, i18n] = useTranslation("translation");
  const [state, setState] = useState(false);
  let number = "073 - 916 16 03";
  let coverNumber = "073 - 916 xx xx";

  const mail = "Balsam care AB@gmail.com";

  const handlePhoneNrState = () => {
    setState(true);
  };
  return (
    <ContactPageContainer>
      <div>
        <div className="container">
          <img className="landingPageImg" src={contactPage} alt="" />
          <div className="text1">{t("contactPage.titel")}</div>
        </div>

        <div className="advertising">
          <p className="text2">{t("contactPage.text")}</p>

          <div className="buttons-1-2">
            <div>
              <StyledButton
                variant="contained"
                onClick={() => handlePhoneNrState()}
              >
                <PhoneIcon sx={{ mr: "17px", fontSize: "2rem" }} />
                <p>{state ? number : coverNumber}</p>
              </StyledButton>
            </div>

            <div>
              <StyledButton
                variant="contained"
                href={`mailto:Bessariconsulting@gmail.com`}
              >
                <LocalPostOfficeIcon sx={{ mr: "17px", fontSize: "2rem" }} />
                <Typography style={{ textTransform: "none" }}>
                  <p> {mail} </p>
                </Typography>
              </StyledButton>
            </div>
          </div>
        </div>
      </div>
    </ContactPageContainer>
  );
};

export default ContactPage;

export const ContactPageContainer = styled.div`
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
      top: 50%;
      left: 50%;
      transform: translate(-50%);
      opacity: 88%;
    }
  }
  @media (min-width: 400px) {
    .advertising {
      display: flex;
      margin: 5vh auto;
      justify-content: center;
    }
  }
  .text2 {
    padding: 40px;
    background-color: #fbfff3;
    max-width: 60rem;
    text-align: left;
    color: black;
    line-height: 2.7rem;
    display: block;
    letter-spacing: 1px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0em;
    margin-inline-end: 0em;
  }

  .buttons-1-2 {
    text-align: left;
    margin: 50px;
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
const StyledButton = styled(Button)`
  && {
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: #3bb348;
    border: 1px solid #3bb348;
    margin-bottom: 50px;

    &:hover {
      color: #3bb348;
      background-color: white;
    }
    p {
      font-weight: 600;
      font-size: 1rem;
      display: inline-block;
      text-transform: uppercase;
    }
  }
`;
