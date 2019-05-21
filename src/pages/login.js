import React, { Component } from 'react'
import styled from 'styled-components'
import { Text } from '../components'

const Header = styled.div`
    height: 5vh;
    background:  #66ff99;
`
const Layout = styled.div`
    height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;

`
const LoginContainer = styled.div`
    height: 300px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Input = styled.input`
    height: 30px;
    outline: none;
    width: 300px;
    padding-left: 1rem;
    padding-right: 1rem;
`
const Button = styled.div`
    height: 30px;
    width: 100px;
    background:  #66ff99;
    border-radius: 4px;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
export class Login extends Component {
    state ={
        username: "",
        password: ""
    }
    handleOnChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handleOnClick = () => {
        const { username, password } = this.state;
        if(username === "vinothkumar" && password === "task"){
            console.log("valid user")
            this.props.history.push({pathname:"/dashboard"});
            localStorage.setItem("isValidUser", true)
        }else{
            localStorage.setItem("isValidUser", false)
        }
    }
  render() {
      const { username, password } = this.state
    return (
      <div>
        <Header />
        <Layout>
            <LoginContainer>
                <Input value={username} name="username" placeholder="User Name" onChange={this.handleOnChange} />
                <Input value={password} name="password" type="password" placeholder="Password" onChange={this.handleOnChange} />
                <Button onClick={this.handleOnClick}>
                    <Text>
                        Login
                    </Text>
                </Button>
            </LoginContainer>
        </Layout>
      </div>
    )
  }
}
