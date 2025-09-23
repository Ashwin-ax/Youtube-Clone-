import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {GoThumbsup, GoThumbsdown} from 'react-icons/go'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'
import {
  Main,
  MainVideoDetails,
  Heading,
  DetailsContainer,
  Para,
  Buttons,
  ButtonsAlignment,
  ProfileContainer,
  Profile,
  ProfileInfo,
  Descripiton,
} from './StyledComponents'

import Navbar from '../Navbar'
import Menu from '../Menu'

import './index.css'

const activeStateConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetails extends Component {
  state = {
    videoDetailedData: {},
    activeState: activeStateConstant.initial,
  }

  componentDidMount() {
    this.getVideoDetailedData()
  }

  getVideoDetailedData = async () => {
    this.setState({activeState: activeStateConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const videoDetails = data.video_details
    if (response.ok) {
      const updateData = {
        id: videoDetails.id,
        thumbnailUrl: videoDetails.thumbnail_url,
        publishedAt: videoDetails.published_at,
        viewCount: videoDetails.view_count,
        title: videoDetails.title,
        description: videoDetails.description,
        videoUrl: videoDetails.video_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subScribersCount: videoDetails.channel.subscriber_count,
        },
      }
      this.setState({
        videoDetailedData: updateData,
        activeState: activeStateConstant.success,
      })
    } else {
      this.setState({activeState: activeStateConstant.failure})
    }
  }

  renderLoadingView = isDarkTheme => (
    <div className="loader-container-vd" data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkTheme ? '#ffffff' : '#000000'}
        height="50"
        width="50"
      />
    </div>
  )

  renderVideosDetailsPage = (isDarkTheme, addToSavedVideos) => {
    const {videoDetailedData} = this.state
    const {
      publishedAt,
      viewCount,
      title,
      description,
      videoUrl,
      channel,
    } = videoDetailedData
    const onClickSave = () => {
      addToSavedVideos(videoDetailedData)
    }
    return (
      <>
        <ReactPlayer url={videoUrl} width="100%" height="100%" />
        <Heading isDark={isDarkTheme} mt="20" fontSize="18">
          {title}
        </Heading>
        <DetailsContainer isDark={isDarkTheme}>
          <ButtonsAlignment>
            <Para isDark={isDarkTheme}>{viewCount} views</Para>
            <Para isDark={isDarkTheme}>{publishedAt}</Para>
          </ButtonsAlignment>
          <ButtonsAlignment>
            <Buttons isDark={isDarkTheme}>
              <GoThumbsup className="lds-icons" />
              <Para isDark={isDarkTheme}>Like</Para>
            </Buttons>
            <Buttons isDark={isDarkTheme}>
              <GoThumbsdown className="lds-icons" />
              <Para isDark={isDarkTheme}>Dislike</Para>
            </Buttons>
            <Buttons isDark={isDarkTheme} onClick={onClickSave}>
              <BiListPlus className="lds-icons" />
              <Para isDark={isDarkTheme}>Save</Para>
            </Buttons>
          </ButtonsAlignment>
        </DetailsContainer>
        <hr />
        <ProfileContainer>
          <Profile src={channel?.profileImageUrl} alt="profile" />
          <ProfileInfo>
            <Heading isDark={isDarkTheme} fontSize="14">
              {channel?.name}
            </Heading>
            <Para isDark={isDarkTheme}>
              {channel?.subScribersCount} subscribers
            </Para>
            <Descripiton isDark={isDarkTheme}>{description}</Descripiton>
          </ProfileInfo>
        </ProfileContainer>
      </>
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
        return this.renderVideosDetailsPage(isDarkTheme)
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
          const {isDarkTheme, addToSavedVideos} = value
          return (
            <div>
              <Navbar />
              <Main>
                <Menu />

                <MainVideoDetails isDark={isDarkTheme}>
                  {this.renderSelectionPage(isDarkTheme, addToSavedVideos)}
                </MainVideoDetails>
              </Main>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetails
