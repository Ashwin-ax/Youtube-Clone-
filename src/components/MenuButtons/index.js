import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import ThemeContext from '../../context/ThemeContext'

import MenuButton from './StyledComponents'

import './index.css'

const MenuButtons = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {data} = props
      const {name, path, id} = data
      const getIcons = () => {
        switch (id) {
          case 'HOME':
            return <AiFillHome className="menu-icons" />
          case 'TRENDING':
            return <HiFire className="menu-icons" />
          case 'GAMING':
            return <SiYoutubegaming className="menu-icons" />
          case 'SAVED_VIDEOS':
            return <BiListPlus className="menu-icons" />
          default:
            return null
        }
      }
      return (
        <Link to={path} className="menu-links">
          <MenuButton
            isDark={isDarkTheme}
            type="button"
            className="menu-button"
          >
            {getIcons()}
            <p className="menu-button-name">{name}</p>
          </MenuButton>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default MenuButtons
