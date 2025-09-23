import styled from 'styled-components'

export const Main = styled.div`
  width: 32%;
  margin-right: 15px;
  margin-bottom: 25px;
  margin-top: 10px;
  cursor: pointer;
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const Profile = styled.img`
  height: 35px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 5px;
`

export const Title = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  margin-right: 10px;
  margin-top: 5px;
`

export const Name = styled.p`
  font-size: 14px;
  color: ${props => (props.isDark ? '#94a3b8' : '#606060')};
  margin-right: ${props => props.mr}px;
  margin-top: 5px;
`
