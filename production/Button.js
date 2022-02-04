import styled from 'styled-components/macro'

export const Button = styled.button`
  margin: 8px 10px;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1.12px;
  background: ${(props) => props.background || '#669980'};
  border-radius: 3px;
  border: 1px solid #c8c8c8;
  cursor: pointer;
  color: #4d4d4d;

  &:hover {
    background: #1f1fad;
    border: 1px solid #1f1fad;
    color: #fff;
    cursor: pointer;
    transition-duration: 0.3s;
  } 

  &:disabled {
    background: grey
  }
`