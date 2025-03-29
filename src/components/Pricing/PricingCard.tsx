import React, { useEffect, useState } from "react";
import { Card, Price, Title, FeatureList, FeatureItem } from './PricingCardStyle';

interface PricingCardProps {
  title: string;
  basePricePerClass: number;// Base price in AED
  features: string[];
  buttonText: string;
  
}

const currencyMap: { [key: string]: string } = {
  AE: "AED",
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

const PricingCard: React.FC<PricingCardProps> = ({ title, basePricePerClass, features, buttonText }) => {
  const [currency, setCurrency] = useState<string>("AED");
  const [convertedPrice, setConvertedPrice] = useState<number>(basePricePerClass);

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const countryCode = data.country_code;
        const curr = currencyMap[countryCode] || "AED";
        setCurrency(curr);
        setConvertedPrice(Math.ceil(basePricePerClass * (exchangeRates[countryCode] || 1)));
        
      } catch (error) {
        console.error("Failed to fetch location:", error);
      }
    };

    fetchCurrency();
  }, [basePricePerClass]);

  return (
    <Card>
      <Title>{title}</Title>
      <Price>{currency}{convertedPrice} /Class</Price>
      <FeatureList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>{feature}</FeatureItem>
        ))}
      </FeatureList>
      {/* <Button>{buttonText}</Button> */}
    </Card>
  );
};

export default PricingCard;