import {Link} from "react-router";
import styled from "styled-components";

const StyledNav=styled.nav`
    background-color: grey;   // HEADLINE BACKGROUND COLOR
    width: 100%;
    
    // @media screen and (max-width: 1000px) {
    //     width: 100%;
    // }
`;

const StyledList=styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: row;   
    margin-left: 1%; 
    margin-right: 1%;  
    // @media screen and (max-width: 1000px){
    //     flex-direction: row;
    // }
    
`;

const StyledItem=styled.li`
    text-align: center;
    margin: 0.5% auto;
    width: 60%; 
    // border-radius: 10vw; 
    padding: 1%;    
    
    &:hover {
        background-color: black; 
    }
`;

const StyledH3=styled.h3`
    padding: 1% 2%;
    font-size: calc(2px + 1.8vw);
    text-decoration: none;
    color: whitesmoke; 
`; 

export default function Nav(){
    return(
        <StyledNav>
            <StyledList>
                <StyledItem><Link to={`/`} style={{textDecoration: 'none'}}><StyledH3>Home</StyledH3></Link></StyledItem>
                <StyledItem><Link to={`/AboutMe.html`} style={{textDecoration: 'none'}}><StyledH3>About me</StyledH3></Link></StyledItem>
                <StyledItem><Link to={`/Teaching.html`} style={{textDecoration: 'none'}}><StyledH3>Teaching</StyledH3></Link></StyledItem>
                <StyledItem><Link to={`/Mentoring.html`} style={{textDecoration: 'none'}}><StyledH3>Mentoring</StyledH3></Link></StyledItem>
                <StyledItem><Link to={'/Research.html'} style={{textDecoration: 'none'}}><StyledH3>Research</StyledH3></Link></StyledItem>
                <StyledItem><Link to={`/Miscellaneous.html`} style={{textDecoration: 'none'}}><StyledH3>Miscellaneous</StyledH3></Link></StyledItem>
            </StyledList>
        </StyledNav>
    )
}