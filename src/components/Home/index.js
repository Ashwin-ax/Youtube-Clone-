import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoCloseOutline} from 'react-icons/io5'
import {FaSearch} from 'react-icons/fa'

import ThemeContext from '../../context/ThemeContext'

import {
  MainHome,
  PremiumContainer,
  Banner,
  BannerLogo,
  BannerDescription,
  BannerButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  AllVideoListContainer,
} from './StyledComponents'

import Navbar from '../Navbar'
import Menu from '../Menu'
import AllVideos from '../AllVideos'

import './index.css'

const activeStateConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    isBannerVisible: true,
    allVideosData: [],
    inputSearch: '',
    activeState: activeStateConstant.initial,
  }

  componentDidMount() {
    this.getAllVideoData()
  }

  getAllVideoData = async () => {
    this.setState({activeState: activeStateConstant.inProgress})
    const {inputSearch} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${inputSearch}`
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
        publishedAt: eachItem.published_at,
        viewCount: eachItem.view_count,
        title: eachItem.title,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
      }))
      this.setState({
        allVideosData: updatedData,
        activeState: activeStateConstant.success,
      })
    } else {
      this.setState({activeState: activeStateConstant.failure})
    }
  }

  onClickRetry = () => {
    this.getAllVideoData()
  }

  onClickCloseBtn = () => {
    this.setState({isBannerVisible: false})
  }

  onChangeSearchInput = event => {
    this.setState({inputSearch: event.target.value})
  }

  onClickSearchBtn = () => {
    this.getAllVideoData()
  }

  renderAllVideos = () => {
    const {allVideosData} = this.state
    return (
      <>
        {allVideosData.length !== 0 ? (
          <AllVideoListContainer>
            {allVideosData.map(eachItem => (
              <AllVideos data={eachItem} key={eachItem.id} />
            ))}
          </AllVideoListContainer>
        ) : (
          <div className="no-videos">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <h1>No Search Results Found</h1>
            <p>Try different keywords or remove the search filter.</p>
          </div>
        )}
      </>
    )
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

  renderPageSelection = isDarkTheme => {
    const {activeState} = this.state
    switch (activeState) {
      case activeStateConstant.inProgress:
        return this.renderLoadingView(isDarkTheme)
      case activeStateConstant.success:
        return this.renderAllVideos()
      case activeStateConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {isBannerVisible, inputSearch} = this.state
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
                <MainHome isDark={isDarkTheme}>
                  {isBannerVisible ? (
                    <PremiumContainer isDark={isDarkTheme}>
                      <Banner data-testid="banner">
                        <BannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerDescription>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerDescription>
                        <BannerButton type="button">GET IT NOW</BannerButton>
                      </Banner>
                      <button
                        type="button"
                        className="close-btn"
                        onClick={this.onClickCloseBtn}
                        data-testid="close"
                      >
                        <IoCloseOutline className="close-icon" />
                      </button>
                    </PremiumContainer>
                  ) : (
                    ''
                  )}
                  <SearchContainer isDark={isDarkTheme}>
                    <SearchInput
                      isDark={isDarkTheme}
                      value={inputSearch}
                      type="search"
                      placeholder="Search"
                      onChange={this.onChangeSearchInput}
                    />
                    <SearchButton
                      isDark={isDarkTheme}
                      type="button"
                      onClick={this.onClickSearchBtn}
                      data-testid="searchButton"
                    >
                      <FaSearch className="search-icon" />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderPageSelection(isDarkTheme)}
                </MainHome>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
