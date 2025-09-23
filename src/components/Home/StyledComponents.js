import styled from 'styled-components'

export const MainHome = styled.div`
  height: 93.5vh;
  width: 85%;
  overflow: auto;
  background-color: ${props => (props.isDark ? '#000000' : '#f8fafc')};
`

export const PremiumContainer = styled.div`
  display: flex;
  width: 98%;
  margin: 20px;
  box-shadow: 0px 4px 16px 0px
    ${props => (props.isDark ? '#606060' : '#cccccc')};
`

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 300px;
  width: 90%;
  padding: 20px;
`

export const BannerLogo = styled.img`
  height: 40px;
`

export const BannerDescription = styled.p`
  font-size: 18px;
`

export const BannerButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  font-weight: 550;
  font-family: Roboto;
  border: 2px solid #000000;
  border-radius: 3px;
  width: 100px;
  height: 35px;
  cursor: pointer;
  margin-top: 50px;
`

export const SearchContainer = styled.div`
  border: 1px solid ${props => (props.isDark ? '#606060' : '#cccccc')};
  width: 40%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 40px;
  margin-left: 20px;
`

export const SearchInput = styled.input`
  padding-left: 10px;
  width: 85%;
  height: 40px;
  border: 1px solid ${props => (props.isDark ? '#606060' : '#cccccc')};
  color: ${props => (props.isDark ? '#cccccc' : '#000000')};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: transparent;
`

export const SearchButton = styled.button`
  width: 15%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => (props.isDark ? '#606060' : '#cccccc')};
  background-color: ${props => (props.isDark ? '#606060' : '#cccccc')};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
`

export const AllVideoListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
`
