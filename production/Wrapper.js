import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  margin: 30px 5px 5px 5px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
`

export const HeadWrapper = styled.header`
  height: 30%;
  padding: 0 8px;
  font-family: 'Rubik', aerial, verdana, sans-serif;
  background: snow;
  display: flex;
  flex-flow: column-reverse wrap;
  align-items: flex-end;
`

export const RowWrapper = styled.header`
  display: flex;
  flex-direction: row;
`

export const RowWrapReverse = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const ScreenWrapper = styled.div`
  width: 100%;
  height: 70%;
  margin: 0;
  padding: 0;
  background: #19194d;
`

export const ColWrapper = styled(Wrapper)`
  width: auto;
  margin: 12px;
  align-items: flex-start;
  background: ${(props) => props.background || 'snow'};
`

export const SensorWrapper = styled(ColWrapper)`
  width: 60px;
  height: 60px;
  background: ${(props) => props.background || '#fff'};
  border: 1px solid #c8c8c8;
`

export const ReverseRow = styled(ColWrapper)`
  margin: 0;
  width: 350px;
  background: #85adad;
  align-items: flex-end;
`