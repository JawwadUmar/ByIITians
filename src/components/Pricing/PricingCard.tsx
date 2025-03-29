import { Card, Price, Title, FeatureList, FeatureItem } from './PricingCardStyle';

interface PricingCardProps {
  title: string;
  currency:string;
  basePricePerClass: number;// Base price in AED
  features: (string | React.JSX.Element)[];
  
}

const PricingCard: React.FC<PricingCardProps> = ({ title, currency,  basePricePerClass, features }) => {

  return (
    <Card>
      <Title>{title}</Title>
      <Price>{currency}{basePricePerClass} /Class</Price>
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