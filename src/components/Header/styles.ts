import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-950']};
  padding: 2.5rem 0 7.5rem 0;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: none;
  background: ${(props) => props.theme['gray-950']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme['gray-900']};
  transition: all 0.6s;

  &:hover {
    background: ${(props) => props.theme['gray-900']};
    scale: 1.02;
  }
`
