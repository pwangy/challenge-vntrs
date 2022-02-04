import styled from 'styled-components/macro'

export const Overlay = styled.div`
  height: 100%;
  margin: 0;
  z-index: 10;
  left: 0;
  top: 0;
  background: #0000002b;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`

export const Content = styled.div`
  height: 460px;
  width: 400px;
  margin: auto;
  padding: 5px;
  border: 1px solid #888;
  border-radius: 3px;
  background: #85adad;
  opacity: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
`

export const XOut = styled.div`
  width: 30px;
  color: #4d4d4d;
  font-size: 28px;
  text-align: center;
  cursor: pointer;
`

export const Title = styled.p`
  margin: 10px 0;
  font-size: 24px;

`

export const Detail = styled.p`
  margin: 10px 0 0 6px;
  font-size: 12px;
`