import React from 'react';
import PricingCard from './PricingCard';
import styled from 'styled-components';

const PricingCardsContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MiddleBlockSection = styled.section`
  padding-top: 20px;
  position: relative;
  text-align: center;
  padding-bottom: 3rem; /* Add bottom padding */

  @media screen and (max-width: 768px) {
    padding-bottom: 2rem; /* Increase bottom padding for smaller screens */
  }
`;

interface MiddleBlockProps {
  title: string;
}

const PricingCards = ({ title }: MiddleBlockProps) => {
  const feature1 = [
    "25 Classes",
    "One time payment of 25*{whateverthe baseprice is}",
    "Recorded Lectures",
  ];

  const feature2 = [
    "50 Classes",
    "Personalized Mentor",
    "Recorded Lectures",
  ];
  const feature3 = [
    "Start with as low as 3 Classes",
    "Personalized Mentor",
    "Recorded Lectures",
  ];

  return (
    <MiddleBlockSection id="pricing">
      <h6>{title}</h6>
      <PricingCardsContainerDiv>
        <PricingCard title="1 Month Plan" basePricePerClass={40} features={feature1} buttonText="Choose Basic" />
        <PricingCard title="Custom Plan" basePricePerClass={45} features={feature3} buttonText="Go Premium" />
        <PricingCard title="2 Month Plan" basePricePerClass={35} features={feature2} buttonText="Get Started" />
      </PricingCardsContainerDiv>
    </MiddleBlockSection>
  );
};

export default PricingCards;