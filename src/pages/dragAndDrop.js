import React, { Component } from 'react';
import { HeadingText, LeftArrow, RightArrow } from '../components'
import styled from 'styled-components';

const BoxContainer = styled.div`
    width: 300px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem; 
    border: solid 2px #66ff99;
`
const OuterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
`
const Label = styled.div`
    height: 2rem;
    background: #e0e7ff;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ArrowContainer = styled.div`
    max-width: 100px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export class DragAndDrop extends Component {
    state ={
        left: ["Apple","orange","tomato","pineapple","banana","coconut"],
        right: [],
        selectedData: undefined,
        leftToRight: true,
        rightToLeft: true
    }

    handleDragStart = (e,data) =>{
        e.dataTransfer.setData("name", data);
    }

    handleOnRightDrop = (e) =>{
        const data = e.dataTransfer.getData("name")
        const { right, left } = this.state;

        const isDuplicate = right.includes(data)
        if(!isDuplicate){
            // Setting right side data
            let rightList = right
            rightList.push(data)
            this.setState({right: rightList})

            // setting left side data
            const leftList = left.filter(a => a!== data);
            this.setState({left: leftList,selectedData: ''})
        }
    }

    handleOnLeftDrop = (e) =>{
        const data = e.dataTransfer.getData("name")
        const { right, left } = this.state;

        const isDuplicate = left.includes(data)
        if(!isDuplicate){
            // Setting Left side data
            let leftList = left
            leftList.push(data)
            this.setState({left: leftList})

            // setting Right side data
            const rightList = right.filter(a => a!== data);
            this.setState({right: rightList,selectedData: ''})
        }
    }

    handleOnClickLeft = (data) =>{
        this.setState({
            selectedData: data,
            leftToRight: true,
            rightToLeft: false
        })
    }

    handleOnClickRight = (data) =>{
        this.setState({
            selectedData: data,
            leftToRight: false,
            rightToLeft: true
        })
    }

    handleRightArrowOnClick = () => {
        const { left, right, selectedData } = this.state;
        if(selectedData){
            let rightList = right
            rightList.push(selectedData)
            this.setState({right: rightList})
    
            // setting left side data
            const leftList = left.filter(a => a!== selectedData);
            this.setState({left: leftList,selectedData: ''})
        }
    } 
    
    handleLeftArrowOnClick = () => {
        const { left, right, selectedData } = this.state;
        if(selectedData){
            let leftList = left
            leftList.push(selectedData)
            this.setState({left: leftList})
    
            // setting Right side data
            const rightList = right.filter(a => a!== selectedData);
            this.setState({right: rightList, selectedData:''})
        }
    }

  render() {
    const { left, right, selectedData, leftToRight, rightToLeft } = this.state;
    const leftList = left.map(data =>{
        return <Label
                 key={data} 
                 draggable
                 onDragStart={(e)=>this.handleDragStart(e,data)}
                 onClick={()=>this.handleOnClickLeft(data)}
                 style={{background: selectedData===data && "#66ff99" }}
                 >{data}</Label>
    })

    const rightList = right.map(data => {
        return <Label 
                key={data} 
                draggable 
                onDragStart={(e)=>this.handleDragStart(e,data)}
                onClick={()=>this.handleOnClickRight(data)}
                style={{background: selectedData===data && "#66ff99" }}
                >{data}</Label>
    })
    return (
      <div>
        <HeadingText>
            Drag And Drop
        </HeadingText>
        <OuterContainer>
            <BoxContainer onDragOver={(e)=>e.preventDefault()} onDrop={this.handleOnLeftDrop} >
                {
                    leftList
                }
            </BoxContainer>
            <ArrowContainer>
                {
                    rightToLeft
                    &&
                    <LeftArrow onClick={this.handleLeftArrowOnClick} />
                }
                <div style={{height: "1rem"}} />
                {
                    leftToRight
                    &&
                    <RightArrow onClick={this.handleRightArrowOnClick} />
                }
            </ArrowContainer>
            <BoxContainer onDragOver={(e)=>e.preventDefault()} onDrop={this.handleOnRightDrop} >
                {
                    rightList
                }
            </BoxContainer>
        </OuterContainer>
      </div>
    )
  }
}
