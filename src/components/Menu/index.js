import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'

import {
  MenuContainer,
  MenuTopSection,
  MenuBottomSection,
  MenuBottomPara,
} from './StyledComponents'

import MenuButtons from '../MenuButtons'

import './index.css'

const initialMenuItems = [
  {
    name: 'Home',
    id: 'HOME',
    path: '/',
  },
  {
    name: 'Trending',
    id: 'TRENDING',
    path: '/trending',
  },
  {
    name: 'Gaming',
    id: 'GAMING',
    path: '/gaming',
  },
  {
    name: 'Saved videos',
    id: 'SAVED_VIDEOS',
    path: '/saved-videos',
  },
]

class Menu extends Component {
  state = {menuItems: initialMenuItems}

  render() {
    const {menuItems} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <MenuContainer isDark={isDarkTheme}>
              <MenuTopSection>
                {menuItems.map(eachItems => (
                  <MenuButtons
                    data={eachItems}
                    key={eachItems.name}
                    updatedActiveMenuButton={this.updatedActiveMenuButton}
                  />
                ))}
              </MenuTopSection>
              <MenuBottomSection isDark={isDarkTheme}>
                <MenuBottomPara>CONTACT US</MenuBottomPara>
                <ul className="social-platform-container">
                  <li>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                      className="social-platform-logo"
                    />
                  </li>
                  <li>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                      className="social-platform-logo"
                    />
                  </li>
                  <li>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                      className="social-platform-logo"
                    />
                  </li>
                </ul>
                <MenuBottomPara>
                  Enjoy! Now to see your channels and recommendations!
                </MenuBottomPara>
              </MenuBottomSection>
            </MenuContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Menu
