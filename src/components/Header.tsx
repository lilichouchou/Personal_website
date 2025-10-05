import styled from "styled-components";

const StyledHeader=styled.header`
    background-color: rgb(251, 252, 253);  // HEADER COLOR, PALE GREY
    padding: 1%; 

    @media screen and (max-width: 1000px){
        text-align: center; 
    }
`; 

const StyledH1=styled.h1`
    font-size: calc(2px + 4.5vh);  // NAME SIZE
`; 

const StyledH3=styled.h3`
    font-size: calc(2px + 2.3vh);   // POSITION 
`; 

const StyledHr=styled.hr`
    color: rgb(228, 136, 93);  // HEADER LINE COLOR
`; 

export default function Header(){
    return(
        <>
            <StyledHeader>
                <StyledH1>Lily Chou, Ph.D</StyledH1> 
                <StyledH3><strong>Lecturer at Boston University Department of Mathematics and Statistics</strong></StyledH3>    
            </StyledHeader>
            <StyledHr/>
        </>
    )
}