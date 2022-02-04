import styled from 'styled-components/macro'

export const Card = styled.article`
  width: 288px;
  height: 288px;
  margin: 0 0 16px 0;
  padding: 0;
  position: relative;
  background: ${props => `url(${props.background})`};
  text-align: center;
  color: #fff;
  border-radius: 20px;
`