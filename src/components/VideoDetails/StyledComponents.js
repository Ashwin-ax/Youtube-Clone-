import styled from 'styled-components'

export const Main = styled.div`
  height: 93.5vh;
  display: flex;
`

export const MainVideoDetails = styled.div`
  width: 85%;
  padding: 20px;
  overflow: auto;
  background-color: ${props => (props.isDark ? '#000000' : '#f8fafc')};
`

export const Heading = styled.h1`
  font-size: ${props => props.fontSize}px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-family: roboto;
  margin: 0;
  margin-top: ${props => props.mt}px;
`

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const ButtonsAlignment = styled.div`
  display: flex;
  align-items: center;
`

export const Para = styled.p`
  font-size: 14px;
  margin: 0;
  margin-right: 20px;
  margin-top: 5px;
  margin-bottom: 6px;
  color: ${props => (props.isDark ? '#e2e8f0' : '#606060')};
`

export const Buttons = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  align-items: center;
  color: ${props => (props.isDark ? '#e2e8f0' : '#606060')};
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
`

export const ProfileInfo = styled.div`
  padding-left: 10px;
  margin: 0;
`

export const Profile = styled.img`
  height: 40px;
`

export const Descripiton = styled.p`
  color: #1e1e1e;
  font-size: 15px;
  margin-top: 20px;
  color: ${props => (props.isDark ? '#f4f4f4' : '#000000')};
`
