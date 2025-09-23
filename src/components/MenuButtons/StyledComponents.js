import styled from 'styled-components'

const MenuButton = styled.button`
  background-color: transparent;
  border: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  color: ${props => (props.isDark ? '#cccccc' : '#313131')};
`

export default MenuButton
