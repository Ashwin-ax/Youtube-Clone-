import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../context/ThemeContext'
import {
  MainGaming,
  TopSection,
  Icon,
  Heading,
  BottomSection,
} from './StyledComponents'

import Navbar from '../Navbar'
import Menu from '../Menu'
import GamingVideo from '../GamingVideo'

import './index.css'

const activeStateConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideosData: [],
    activeState: activeStateConstant.initial,
  }

  componentDidMount() {
    this.getGamingVideoData()
  }

  getGamingVideoData = async () => {
    this.setState({activeState: activeStateConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = ' https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
        title: eachItem.title,
      }))
      this.setState({
        gamingVideosData: updatedData,
        activeState: activeStateConstant.success,
      })
    } else {
      this.setState({activeState: activeStateConstant.failure})
    }
  }

  renderLoadingView = isDarkTheme => (
    <div className="loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkTheme ? '#ffffff' : '#000000'}
        height="50"
        width="50"
      />
    </div>
  )

  renderGamingVideosPage = isDarkTheme => {
    const {gamingVideosData} = this.state
    return (
      <BottomSection isDark={isDarkTheme}>
        {gamingVideosData.map(eachItem => (
          <GamingVideo data={eachItem} key={eachItem.id} />
        ))}
      </BottomSection>
    )
  }

  renderFailureView = () => (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="failure-view-img"
      />
      <h1 className="failure-view-heading">Oops! Something Went Wrong</h1>
      <p className="failure-view-description">
        We are having some trouble completing your request.
      </p>
      <p className="failure-view-description">Please try again.</p>
      <button type="button" className="retry" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  renderSelectionPage = isDarkTheme => {
    const {activeState} = this.state
    switch (activeState) {
      case activeStateConstant.inProgress:
        return this.renderLoadingView(isDarkTheme)
      case activeStateConstant.success:
        return this.renderGamingVideosPage(isDarkTheme)
      case activeStateConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <div>
              <Navbar />
              <div className="bg-container">
                <Menu />
                <MainGaming isDark={isDarkTheme}>
                  <TopSection isDark={isDarkTheme}>
                    <Icon isDark={isDarkTheme}>
                      <SiYoutubegaming
                        className={
                          isDarkTheme ? 'top-light-icon' : 'top-dark-icon'
                        }
                      />
                    </Icon>
                    <Heading isDark={isDarkTheme}>Gaming</Heading>
                  </TopSection>
                  {this.renderSelectionPage(isDarkTheme)}
                </MainGaming>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
