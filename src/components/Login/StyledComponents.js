import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const LoginForm = styled.form`
  box-shadow: 0px 4px 16px 0px lightgray;
  padding: 20px;
  height: 55%;
  width: 22%;
  border-radius: 8px;
`

export const LogoContainer = styled.div`
  text-align: center;
`

export const Logo = styled.img`
  height: 40px;
  margin: 25px;
`

export const Label = styled.label`
  color: #94a3b8;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  padding-left: 5px;
  display: block;
  margin-bottom: 8px;
  margin-top: 20px;
`

export const Input = styled.input`
  width: 100%;
  height: 35px;
  padding-left: 8px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
`

export const CheckboxInputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 5px;
`

export const CheckboxInput = styled.input`
  height: 15px;
  width: 15px;
  cursor: pointer;
`

export const CheckboxLabel = styled.label`
  color: #000000;
  margin-left: 3px;
  font-size: 12px;
  margin-top: 2px;
  cursor: pointer;
`

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 6px;
  width: 100%;
  height: 35px;
  border: 0;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  margin: 0;
  font-size: 12px;
`
