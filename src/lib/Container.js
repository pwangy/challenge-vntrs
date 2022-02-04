import styled from 'styled-components/macro'

export const Container = styled.article`
  margin: 0;
  padding: 0;
  width: 288px;
  ${'' /* background: #7AB8B8; */}
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-around;
  align-self: center;

  @media (min-width: 670px) {
    width: 600px;
    flex-flow: row wrap;

  }

  @media (min-width: 900px) {
    width: 888px;
  }
`