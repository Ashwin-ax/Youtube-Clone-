import styled from 'styled-components'

export const MenuContainer = styled.div`
  height: 93.5vh;
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
`

export const MenuTopSection = styled.div`
  margin-top: 15px;
`

export const MenuButton = styled.button`
  background-color: transparent;
  border: 0;
`

export const MenuBottomSection = styled.div`
  padding-left: 10px;
  color: ${props => (props.isDark ? '#cccccc' : '#313131')};
`

export const MenuBottomPara = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`
