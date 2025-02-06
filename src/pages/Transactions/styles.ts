import styled from "styled-components";

export const Main = styled.main`
  background: ${(props) => props.theme["gray-900"]};
`;

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  overflow-x: auto;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1120px;
  width: 100%;
  margin: 0 auto;

  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  tbody {
    max-width: 1120px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: stretch;
    align-content: stretch;
    flex-direction: column;

    overflow-x: auto;

    td {
      font-size: clamp(0.875rem, 1vw, 2rem);
      padding: 1.25rem 2rem;
      background: ${(props) => props.theme["gray-950"]};
      width: 100%;

      &:first-child {
        border-top-left-radius: 6px;
        margin: 4rem auto 0;
        padding: 0 1.5rem;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }

    .description {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
      font-size: 1.05rem;

      span:first-child {
        color: ${(props) => props.theme["gray-400"]};
        font-size: 0.875rem;
      }
    }
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
