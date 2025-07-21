import styled from "styled-components";

const StyledHeader=styled.header`
    background-color: rgb(251, 252, 253); 
    padding: 1%; 

    @media screen and (max-width: 1000px){
        text-align: center; 
    }
`; 

const StyledH1=styled.h1`
    font-size: calc(2px + 5vh); 
`; 

const StyledH3=styled.h3`
    font-size: calc(2px + 2.3vh); 
`; 

const StyledHr=styled.hr`
    color: rgb(228, 136, 93); 
`; 

export default function Header(){
    return(
        <>
            <StyledHeader>
                <StyledH1>Emily Yang</StyledH1> 
                <StyledH3><strong>My Online Resume</strong></StyledH3>    
            </StyledHeader>
            <StyledHr/>
        </>
    )
}