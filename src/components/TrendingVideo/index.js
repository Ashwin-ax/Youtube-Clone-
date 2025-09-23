import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  Main,
  Thumbnail,
  Info,
  Title,
  Name,
  ViewDataContainer,
} from './StyledComponents'

const TrendingVideo = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {data} = props
      const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = data
      const {name} = channel
      return (
        <Link to={`/videos/${id}`} className="menu-links">
          <Main>
            <Thumbnail src={thumbnailUrl} alt="thumbnail" />
            <Info>
              <Title isDark={isDarkTheme}>{title}</Title>
              <Name isDark={isDarkTheme} fw="500">
                {name}
              </Name>
              <ViewDataContainer>
                <Name isDark={isDarkTheme} mr="15">
                  {viewCount} views
                </Name>
                <Name isDark={isDarkTheme}>{publishedAt}</Name>
              </ViewDataContainer>
            </Info>
          </Main>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default TrendingVideo
