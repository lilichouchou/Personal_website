import {Link} from "react-router";
import styled from "styled-components";

const StyledNav=styled.nav`
    background-color: rgb(249, 220, 219); 
    width: 17%;
    
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const StyledList=styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 1000px){
        flex-direction: row;
    }
    
`;

const StyledItem=styled.li`
    text-align: center;
    margin: 5% auto;
    width: 80%; 
    background-color:rgb(228, 136, 93); 
    border-radius: 10vw; 
    padding: 2%;     
`;

const StyledH3=styled.h3`
    padding: 1% 2%;
    font-size: calc(2px + 1.5vw);
    text-decoration: none;
    color: whitesmoke; 
`; 

export default function Nav(){
    return(
        <StyledNav>
            <StyledList>
                <StyledItem><Link to={`/`}><StyledH3>Home</StyledH3></Link></StyledItem>
                <StyledItem><Link to={`/education.html`}><StyledH3>Education</StyledH3></Link></StyledItem>
                <StyledItem><Link to={'/skills.html'}><StyledH3>Skills</StyledH3></Link></StyledItem>
                <StyledItem><Link to={`/projects.html`}><StyledH3>Projects</StyledH3></Link></StyledItem>
                <StyledItem><Link to={`/experiences.html`}><StyledH3>Other Technical Experiences</StyledH3></Link></StyledItem>
                <StyledItem><Link to={`/works.html`}><StyledH3>Work Experiences</StyledH3></Link></StyledItem>
            </StyledList>
        </StyledNav>
    )
}