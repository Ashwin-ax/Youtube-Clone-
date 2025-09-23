import styled from 'styled-components'

export const Main = styled.li`
  list-style-type: none;
  width: 100%;
  margin: 20px;
  display: flex;
  cursor: pointer;
`

export const Thumbnail = styled.img`
  height: 200px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const Name = styled.p`
  font-size: 15px;
  font-weight: ${props => props.fw};
  margin: 0;
  margin-right: ${props => props.mr}px;
  margin-top: 8px;
  color: ${props => (props.isDark ? '#94a3b8' : '#606060')};
`

export const ViewDataContainer = styled.div`
  display: flex;
  margin-top: 15px;
`
