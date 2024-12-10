import React from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.min.css";

const StickyBar = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px; /* Spacing between icons */
  padding: 10px;
`;

const IconWrapper = styled.div`
  background-color: rgb(24, 33, 109); /* Default WhatsApp color */
  border-radius: 10px 0 0 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    background-color: rgb(254, 118, 36);
    transform: scale(1.1); /* Hover zoom effect */
  }
`;

const IconLink = styled.a`
  color: white;
  font-size: 20px;
  text-decoration: none;
`;

const StickyIconBar = () => {
  return (
    <StickyBar>
      {/* WhatsApp Icon */}
      <IconWrapper>
        <IconLink
          href="https://api.whatsapp.com/send?phone=%2B917879893307"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </IconLink>
      </IconWrapper>
      {/* Instagram Icon */}
      <IconWrapper>
        <IconLink
          href="https://www.instagram.com/by_iitians/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </IconLink>
      </IconWrapper>
      {/* YouTube Icon */}
      <IconWrapper>
        <IconLink
          href="https://youtube.com/@by_iitians"
          target="_blank"
          rel="noopener noreferrer"
          title="YouTube"
        >
          <i className="fab fa-youtube"></i>
        </IconLink>
      </IconWrapper>
    </StickyBar>
  );
};

export default StickyIconBar;
