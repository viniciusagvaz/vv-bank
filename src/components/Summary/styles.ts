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
  background: ${(props) => props.theme["gray-900"]};
  color: ${(props) => props.theme["gray-900"]};
  border-radius: 6px;
  padding: 2rem;
  max-width: 330px;
  width: 100%;
  margin: 0 auto;
  height: 175px;
  background: linear-gradient(#fff2, transparent);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.15);
  transition: 0.5s;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  color: ${(props) => props.theme["white"]};
  transform: rotate(calc(var(--r) * 1deg));

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
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
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
