import styled from "styled-components";

const StyledSkills=styled.main`
    height: 100vh;
    width: 70%;
    margin: auto; 
    padding-top: 4%; 

    @media  screen and (max-width: 1000px){
        width: 100%;
    } 
`;

const StyledH2=styled.h2`
    font-size: calc(2px + 4vh); 
    color: rgb(214, 81, 19); 
`; 

const StyledP=styled.p`
    font-size: calc(2px + 2.3vh); 
    margin-top: 0.6%;
`; 


export default function Exp() {
    return (
        <>
            <title>Experiences | Resume</title>
            <StyledSkills id="main-content">
                <StyledH2 id="main-title">Other Technical Experiences</StyledH2>
                <br/>

                <div id="main">
                    <ul>
                        <li> <StyledP><em><b>BU Competitive Programming Club (BUCPC): </b></em> A student-let organization focusing on strengthening its members' programming skills.</StyledP> 
                            <StyledP> Sept. 2024 - Now </StyledP> 
                            <ul> 
                                <li> <StyledP>Solved and discussed competitive programming problems with other club members. </StyledP></li> 
                            </ul>               
                        </li> 
                        <li> <StyledP><em><b>Boston University Machine Intelligence Community (BUMIC): </b></em> An organization focused on providing opportunities for undergraduate and graduate students to learn about machine intelligence in a community environment. </StyledP> 
                            <StyledP> Sept. 2024 - Now </StyledP> 
                            <ul> 
                                <li> <StyledP>Shared and Discussed machine learning research, articles and ideas with other club members. </StyledP></li> 
                            </ul>               
                        </li> 
                    </ul> 
                </div> 
            </StyledSkills>
        </>

    )
}