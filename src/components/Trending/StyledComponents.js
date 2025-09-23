import styled from 'styled-components'

export const MainTrending = styled.div`
  height: 93.5vh;
  width: 85%;
  overflow: auto;
  background-color: ${props => (props.isDark ? '#000000' : '#f8fafc')};
`

export const TopSection = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
  display: flex;
  align-items: center;
  padding: 20px;
`

export const Icon = styled.div`
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  background-color: ${props => (props.isDark ? '#000000' : '#ebebeb')};
  margin-right: 12px;
`

export const Heading = styled.h1`
  font-size: 26px;
  font-family: roboto;
  margin: 0;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
`

export const BottomSection = styled.ul`
  background-color: ${props => (props.isDark ? '#000000' : '#f8fafc')};
  height: 100%;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  overflow: auto;
`
