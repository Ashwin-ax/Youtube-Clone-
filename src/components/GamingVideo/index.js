import {Link} from 'react-router-dom'
import {Main, Thumbnail, Title, Views} from './StyledComponents'
import ThemeContext from '../../context/ThemeContext'

const GamingVideo = props => {
  const {data} = props
  const {id, thumbnailUrl, title, viewCount} = data
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Main>
            <Link to={`/videos/${id}`} className="menu-links">
              <Thumbnail src={thumbnailUrl} alt="thumbnail" />
              <Title isDark={isDarkTheme}>{title}</Title>
              <Views isDark={isDarkTheme}>{viewCount} Watching Worldwide</Views>
            </Link>
          </Main>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideo
