import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoIosMoon} from 'react-icons/io'
import {IoSunnyOutline} from 'react-icons/io5'
import ThemeContext from '../../context/ThemeContext'
import {
  Nav,
  NavItems,
  NavRightItemsContainer,
  LogoutButton,
  ThemeButton,
} from './StyledComponents'

import './index.css'

const Navbar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleThemeButton} = value
      const onToggleThemeButton = () => {
        toggleThemeButton(isDarkTheme)
      }
      const onLogout = () => {
        const {history} = props
        history.replace('/login')
        Cookies.remove('jwt_token')
      }
      return (
        <Nav isDark={isDarkTheme}>
          <Link to="/">
            <NavItems
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <NavRightItemsContainer>
            <ThemeButton data-testid="theme" onClick={onToggleThemeButton}>
              {isDarkTheme ? (
                <IoSunnyOutline className="sun" />
              ) : (
                <IoIosMoon className="moon" />
              )}
            </ThemeButton>
            <NavItems
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <LogoutButton isDark={isDarkTheme} onClick={onLogout}>
              Logout
            </LogoutButton>
          </NavRightItemsContainer>
        </Nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Navbar)
