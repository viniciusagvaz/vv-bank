import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin: -5rem auto 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }
`;

interface SummaryCardProps {
  variant?: "green";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 2rem;
  max-width: 330px;
  width: 100%;
  height: 175px;
  color: ${(props) => props.theme["white"]};
  transform: rotate(calc(var(--r) * 1deg));
  background: linear-gradient(#001, transparent);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25);
  transition: 0.5s;
  border-radius: 10px;
  margin: 0 auto;
  backdrop-filter: blur(10px);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["white"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  &:hover {
    transform: scale(1.025);
    background: linear-gradient(rgba(255, 155, 75, 0.05), transparent);
    box-shadow: 0 25px 15px   rgba(30, 30, 30, 0.05);, transparent);
    
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background-color: ${(props) => props.theme["gray-950"]};
      transition: 0.5s;
      border-radius: 10px;
      backdrop-filter: blur(5px);
    `}
`;
