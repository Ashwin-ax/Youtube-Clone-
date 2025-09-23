import {BiListPlus} from 'react-icons/bi'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'

import {
  Main,
  SavedVideosContainer,
  TopSection,
  Icon,
  Heading,
  BottomSection,
} from './StyledComponents'

import Navbar from '../Navbar'
import Menu from '../Menu'
import SavedVideo from '../SavedVideo'

import './index.css'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideosData} = value
      const jwtToken = Cookies.get('jwt_token')
      if (jwtToken === undefined) {
        return <Redirect to="/login" />
      }
      return (
        <div>
          <Navbar />
          <Main>
            <Menu />
            <SavedVideosContainer>
              {savedVideosData.length !== 0 ? (
                <>
                  <TopSection isDark={isDarkTheme}>
                    <Icon isDark={isDarkTheme}>
                      <BiListPlus
                        className={
                          isDarkTheme ? 'top-light-icon' : 'top-dark-icon'
                        }
                      />
                    </Icon>
                    <Heading isDark={isDarkTheme} fontSize="26">
                      Saved Videos
                    </Heading>
                  </TopSection>
                  <BottomSection isDark={isDarkTheme}>
                    {savedVideosData.map(eachItem => (
                      <SavedVideo data={eachItem} key={eachItem.id} />
                    ))}
                  </BottomSection>
                </>
              ) : (
                <div className="no-saved-videos">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <h1>No Saved Videos Found</h1>
                  <p>You can save your videos while watching them.</p>
                </div>
              )}
            </SavedVideosContainer>
          </Main>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
