import React, { Component } from 'react'
import { dataApi } from '../api'
import { HeadingText, HeaderRow, DataRow } from '../components'
import styled from 'styled-components';
import { DragAndDrop } from './dragAndDrop'

const Header = styled.div`
    height: 3rem;
    background:  #66ff99;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 5rem;
`

const Layout = styled.div`
    padding: 1rem;
`

const PaginationLayout = styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PageNumber = styled.div`
    height: 20px;
    width: 20px;
    display: flex;
    border: solid 2px #66ff99;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 0.5rem;
`

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 5rem;
`

const Input = styled.input`
    outline: none;
    padding: 0.5rem;
`

const Logout = styled.div`
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
`

export class Dashboard extends Component {
    state = {
        userList: [],
        listToDisplay: [],
        listPerPage: 3,
        currentPage: 1,
        isSort: false
    }
    componentDidMount = async() =>{
        const data = await dataApi()
        this.setState({
            userList: data,
            listToDisplay: data
        })
    }

    setCurrentPageNumber = (number) =>{
        this.setState({
            currentPage: number
        })
    }

    handleSearch = (e) => {
        const value = e.target.value;
        const { userList } = this.state;
        const list = userList.filter(user=>{
            return user.username.toLowerCase().startsWith(value)
        })
        this.setState({
            listToDisplay: list,
            currentPage: 1
        })
    }

    handleSort = (isSort) =>{
        const { listToDisplay } = this.state
        this.setState({
            isSort
        })
        if(isSort){
            listToDisplay.sort((a,b)=>{
                var name1= a.username.toLowerCase(), name2 = b.username.toLowerCase()
                if( name1 > name2)
                 return -1
                if( name1 < name2 )
                 return 1
                return 0
            })
        }else{
            listToDisplay.sort((a,b)=>{
                var name1= a.username.toLowerCase(), name2 = b.username.toLowerCase()
                if( name1 < name2)
                 return -1
                if( name1 > name2 )
                 return 1
                return 0
            })
        }
    }

    handleLogout = () => {
        localStorage.clear();
        this.props.history.push({pathname:"/"})
    }
  render() {
    const { listToDisplay, listPerPage,currentPage, isSort } = this.state;
    const totalPages = Math.ceil(listToDisplay.length / listPerPage);
    const lastIndex = currentPage * listPerPage;
    const firstIndex = lastIndex - listPerPage;
    const  currentUsers = listToDisplay.slice(firstIndex, lastIndex)
    
    const list = currentUsers.map(user => {
        return <DataRow key={user.id} details={user} />
    })
    let pageNumbers = []
    for(let i=1; i<= totalPages; i++){
        pageNumbers.push(<PageNumber onClick={()=>this.setCurrentPageNumber(i)} key={i}>{i}</PageNumber>)
    }
    return (
      <div>
          <Header>
                <Logout onClick={this.handleLogout} >
                    LOGOUT
                </Logout>
          </Header>
          <Layout>
            <SearchBarContainer >
                <HeadingText>
                    Dashboard
                </HeadingText>
                <Input placeholder="Search By user name" onChange={this.handleSearch} />
            </SearchBarContainer>
           
            <HeaderRow onClick={this.handleSort} sort={isSort} />
            {
                list
            }
            <PaginationLayout>
               {pageNumbers}
            </PaginationLayout>

            <DragAndDrop />
          </Layout>
      </div>
    )
  }
}
