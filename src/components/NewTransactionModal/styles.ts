import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
`;
export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  padding: 2.5rem 3rem;
  
  background: ${(props) => props.theme["white"]};
  background: linear-gradient(#001, transparent);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.85);
  transition: 0.5s;
  border-radius: 10px;
  margin: 0 auto;
  backdrop-filter: blur(10px);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["white"]};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme["white"]};
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      background: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme["gray-500"]};
        transition: background-color 0.2s;
      }
    }
  }
`;
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  color: ${(props) => props.theme["white"]};
  cursor: pointer;
`;
export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  background: ${(props) => props.theme["gray-900"]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  border: 0;
  color: ${(props) => props.theme["white"]};
  cursor: pointer;

  svg {
    color: ${(props) =>
      props.variant === "income"
        ? props.theme["gray-300"]
        : props.theme["red-300"]};
  }

  &[data-state="unchecked"]:hover {
    background: ${(props) => props.theme["gray-950"]};
    transition: background-color 0.2s;
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === "income"
        ? props.theme["gray-500"]
        : props.theme["red-500"]};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;
