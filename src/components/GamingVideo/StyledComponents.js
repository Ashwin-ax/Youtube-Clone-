import styled from 'styled-components'

export const Main = styled.div`
  width: 23%;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 25px;
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const Views = styled.p`
  font-size: 15px;
  color: ${props => (props.isDark ? '#94a3b8' : '#606060')};
`
