import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  Main,
  LoginForm,
  LogoContainer,
  Logo,
  Label,
  Input,
  CheckboxInputContainer,
  CheckboxInput,
  CheckboxLabel,
  LoginButton,
  ErrorMsg,
} from './StyledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isPasswordShown: false,
    error: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 10})
    history.replace('/')
    this.setState({error: false})
  }

  onS63ubmitFailure = errorMsg => {
    this.setState({error: true, errorMsg})
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  togglePassword = () => {
    const {isPasswordShown} = this.state
    this.setState({isPasswordShown: !isPasswordShown})
  }

  render() {
    const {username, password, isPasswordShown, error, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <Main>
        <LoginForm onSubmit={this.onLogin}>
          <LogoContainer>
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </LogoContainer>
          <Label htmlFor="username">USERNAME</Label>
          <Input
            id="username"
            value={username}
            type="text"
            placeholder="Username"
            onChange={this.onChangeUsername}
          />
          <Label htmlFor="password">PASSWORD</Label>
          <Input
            id="password"
            value={password}
            type={isPasswordShown ? 'text' : 'password'}
            placeholder="Password"
            onChange={this.onChangePassword}
          />
          <CheckboxInputContainer>
            <CheckboxInput
              type="checkbox"
              id="checkbox"
              onClick={this.togglePassword}
            />
            <CheckboxLabel htmlFor="checkbox">Show Password</CheckboxLabel>
          </CheckboxInputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {error ? <ErrorMsg>*{errorMsg}</ErrorMsg> : ''}
        </LoginForm>
      </Main>
    )
  }
}

export default Login
