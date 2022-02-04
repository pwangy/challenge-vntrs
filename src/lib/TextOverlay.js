import styled from 'styled-components/macro'

export const TextOverlay = styled.p`
  margin: 0;
  padding: 0;
  top: 50%;
  left: 50%;
  position: absolute;
  font-size: 26px;
  font-weight: 600;
  line-height: 32px;
  transform: translate(-50%, -50%);
`

export const Overlay = styled.div`
  width: 288px;
  height: 288px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`