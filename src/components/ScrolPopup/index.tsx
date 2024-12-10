import { useState, useEffect } from "react";
import styled from "styled-components";
import ContactForm from "../ContactForm";

// Styled components for Popup styling
const PopupWrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 400px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 8px;
  z-index: 1000;
  display: ${({ visible }) => (visible ? "block" : "none")};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const ScrollPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show popup when the user scrolls beyond a certain point
  const handleScroll = () => {
    if (window.scrollY > 100 && !isVisible) {
      setIsVisible(true);
    }
  };

  // Close popup
  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <PopupWrapper visible={isVisible}>
      <CloseButton onClick={handleClose}>×</CloseButton>
      <h3>Book a Free Demo</h3>
      <ContactForm
        title="Contact Us"
        content="Fill in the form below to book your free demo."
        id="scroll-popup"
      />
    </PopupWrapper>
  );
};

export default ScrollPopup;
