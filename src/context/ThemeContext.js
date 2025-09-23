import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleThemeButton: () => {},
  savedVideosData: [],
  addToSavedVideos: () => {},
})

export default ThemeContext
