import styled from "styled-components";

export const Card = styled.div`
  max-width: 300px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 24px;
  text-align: center;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 12px;
  color: #333;
`;

export const Price = styled.p`
  font-size: 2.5rem;
  margin: 16px 0;
  font-weight: bold;
  color: #18216D;
`;

export const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
`;

export const FeatureItem = styled.li`
  font-size: 1rem;
  color: #666;
  margin: 8px 0;
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #18216D;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 16px;
  &:hover {
    background-color: #ff825c;
  }
`;
