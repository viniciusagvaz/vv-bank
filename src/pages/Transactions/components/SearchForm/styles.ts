import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["white"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["white"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    background: transparent;
    color: ${(props) => props.theme["white"]};
    border: 1px solid ${(props) => props.theme["gray-400"]};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme["gray-950"]};
      color: ${(props) => props.theme.white};
      border-color: transparent;
      transition: background-color 0.2s, color 0.2s, border-color 0.4s;
    }
  }
`;
