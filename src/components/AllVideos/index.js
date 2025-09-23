import {Link} from 'react-router-dom'
import {Main, Thumbnail, Profile, Title, Name} from './StyledComponents'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const AllVideos = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {data} = props
      const {channel, id, title, publishedAt, thumbnailUrl, viewCount} = data
      const {name, profileImageUrl} = channel
      return (
        <Main isDark={isDarkTheme}>
          <Link to={`/videos/${id}`} className="menu-links">
            <Thumbnail src={thumbnailUrl} alt="thumbnail" />
            <div className="all-videos-details">
              <Profile src={profileImageUrl} alt="profile" />
              <div className="all-videos-info">
                <Title isDark={isDarkTheme}>{title}</Title>
                <Name isDark={isDarkTheme} fontSize="12" fontWeight="500">
                  {name}
                </Name>
                <div className="all-videos-date-view-container">
                  <Name isDark={isDarkTheme} mr="10">
                    {viewCount} views
                  </Name>
                  <Name isDark={isDarkTheme}>{publishedAt}</Name>
                </div>
              </div>
            </div>
          </Link>
        </Main>
      )
    }}
  </ThemeContext.Consumer>
)

export default AllVideos
