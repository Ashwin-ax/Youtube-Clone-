import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
`

export const NavItems = styled.img`
  height: 25px;
  cursor: pointer;
  margin-right: 20px;
`

export const NavRightItemsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isDark ? '#ffffff' : '#4f46e5')};
  font-weight: 550;
  font-family: Roboto;
  border: 2px solid ${props => (props.isDark ? '#ffffff' : '#4f46e5')};
  border-radius: 3px;
  width: 70px;
  height: 25px;
  margin-right: 10px;
  cursor: pointer;
`
