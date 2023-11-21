import React from "react";

import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="sb_footer_section_padding">
        <div className="sb__footer-copyright">
          <p>© {new Date().getFullYear()} Balsam care AB</p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

export const FooterContainer = styled.div`
  width: 100%;
  background-color: rgb(69, 101, 126);
  position: static;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: #2d2d32;

  .sb_footer_section_padding {
    padding: 2rem 3rem;

    .sb__footer-copyright p {
      color: rgb(255, 255, 255);
      font-weight: 600;
    }
  }
`;
