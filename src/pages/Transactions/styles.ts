import styled from "styled-components";

export const Main = styled.main`
  background: ${(props) => props.theme["gray-900"]};
  background: linear-gradient(#00000010, transparent);
  height: 100vh;
  margin: 0 auto;
`;

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 4rem auto 0;
  overflow-x: auto;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1120px;
  min-width: 500px;
  width: 100%;
  margin: 0 auto;

  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  tbody {
    max-width: 1120px;
    width: 100%;

    display: flex;
    justify-content: space-evenly;
    flex-direction: column;

    overflow-x: auto;
  }

  td {
    font-size: clamp(0.875rem, 1vw, 2rem);
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-950"]};
    width: 100%;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  span {
    display: inline-block;
    line-height: 1.6;
    max-width: 100px;
    white-space: nowrap;
    text-align: left;
  }

  span.date {
    font-weight: 700;
    font-size: 0.875rem;
    font-size: clamp(0.875rem, 2vw, 1.25rem);
  }


  span.description {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    font-size: 1.05rem;
    font-size: clamp(0.875rem, 2vw, 1.25rem);
  }
`;

interface PriceHighlightProps {
  variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;
