import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetails from './components/VideoDetails'
import SavedVideos from './components/SavedVideos'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideosData: [],
  }

  addToSavedVideos = data => {
    this.setState(prevState => ({
      savedVideosData: [...prevState.savedVideosData, data],
    }))
  }

  toggleThemeButton = condition => {
    this.setState({isDarkTheme: !condition})
  }

  render() {
    const {isDarkTheme, savedVideosData} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          savedVideosData,
          addToSavedVideos: this.addToSavedVideos,
          toggleThemeButton: this.toggleThemeButton,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/videos/:id" component={VideoDetails} />
          <Route exact path="/saved-videos" component={SavedVideos} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
