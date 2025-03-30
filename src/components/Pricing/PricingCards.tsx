import React, { useEffect, useState } from 'react';
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

const HighlightText = styled.span`
  color: #18216D;
  font-weight: bold;
  font-size: 1.05em;
  /* Add any additional styles you want */
`;

const PriceHighlight = styled.span`
  color: #18216D;
  font-weight: 700;
  font-size: 1.1em;
  background-color: rgba(24, 33, 109, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
`;

const RecordedLectures = styled.span`
  color: #FF4757;  // Vibrant red
  font-weight: 500;
  &::before {
    content: "🎥 ";  // Movie camera emoji
  }
`;




interface MiddleBlockProps {
  title: string;
  id?: string;
}

const currencyMap: { [key: string]: string } = {
  AE: "AED ",
  IN: "₹",
  US: "$",
  GB: "£",
  EU: "€",
};

const exchangeRates: { [key: string]: number } = {
  AE: 1, // Base currency is AED
  IN: 23.77777, // Example rate: 1 AED = 22.22 INR
  US: 0.27, // Example rate: 1 AED = 0.27 USD
  GB: 0.21, // Example rate: 1 AED = 0.21 GBP
  EU: 0.25, // Example rate: 1 AED = 0.25 EUR
};



const PricingCards = ({ title, id }: MiddleBlockProps) => {
  const [currency, setCurrency] = useState<string>("AED");
  const [conversionRate, setConversionRate] = useState<number>(1);
  
  // Keep base prices constant (in AED)
  const basePricePerClassTwoMonth = 35;
  const basePricePerClassCustom = 45;
  const basePricePerClassMonth = 40;

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const countryCode = data.country_code;
        const curr = currencyMap[countryCode] || "AED";
        const rate = exchangeRates[countryCode] || 1;
        setCurrency(curr);
        // setCurrencySymbol(curr); // Or use a symbol map if you want symbols
        setConversionRate(rate);
      } catch (error) {
        console.error("Failed to fetch location:", error);
      }
    };

    fetchCurrency();
  }, []);

  const convert = (price: number) => Math.ceil(price * conversionRate);
  
  const feature1 = [
    <PriceHighlight>25 Classes</PriceHighlight>,
    <>One time payment of{" "}
     <HighlightText>
        {currency}{25 * convert(basePricePerClassMonth)}
      </HighlightText>
    </>,
    "Recorded Lectures",
  ];  

  const feature2 = [
    <PriceHighlight>50 Classes</PriceHighlight>,
    <>One time payment of{" "}
    <HighlightText>
       {currency}{50 * convert(basePricePerClassTwoMonth)}
     </HighlightText>
   </>,
    "Recorded Lectures",
  ];

  const feature3 = [
    <>Start with as low as <PriceHighlight>3 Classes</PriceHighlight></>,
    "Pay for only what you need",
    "Recorded Lectures"
  ];

  return (
    <MiddleBlockSection id="pricing">
      <h6>{title}</h6>
      <PricingCardsContainerDiv>
        <PricingCard 
          title="1 Month Plan" 
          currency={currency} 
          basePricePerClass={convert(basePricePerClassMonth)} 
          features={feature1} 
        />
        <PricingCard 
          title="Custom Plan" 
          currency={currency} 
          basePricePerClass={convert(basePricePerClassCustom)} 
          features={feature3} 
        />
        <PricingCard 
          title="2 Month Plan" 
          currency={currency} 
          basePricePerClass={convert(basePricePerClassTwoMonth)} 
          features={feature2} 
        />
      </PricingCardsContainerDiv>
    </MiddleBlockSection>
  );
};
export default PricingCards;

