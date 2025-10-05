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


export default function Research() {
    return (
        <>
            <title>Works | Resume</title>
            <StyledSkills id="main-content">
                <StyledH2 id="main-title">Work Experience</StyledH2>
                <br/>

                <div id="main">
                    <StyledP> <b><em>Neighborhood Council</em></b>, Boston University, Boston, MA </StyledP> 
                    <StyledP> Sept. 2023-May 2024 </StyledP> 
                    <StyledP> <em>Secretary</em> </StyledP> 
                    <ul>
                        <li> <StyledP>Represented over 3,000 residents during Executive Board meetings of the Neighborhood Council (NHC) and recorded the minutes at all meetings. </StyledP> </li> 
                        <li> <StyledP>Helped to plan and execute events/ activities sponsored and hosted by the NHC; kept track of all neighborhood events and updated the events calendar accordingly. </StyledP> </li>     
                        <li> <StyledP>Assisted to manage over $26,000 funds; evaluated the founding requests from resident assistants (RAs) of The Towers, Hojo, and Brown houses. </StyledP> </li>  
                        <li> <StyledP>Assisted to organize NHC documents in Google Drive and maintain the list of login and account information. </StyledP> </li> 
                    </ul> 
                    <br/> 

                    <StyledP> <b><em>Faculty of Computing&Data Sciences</em></b>, Boston University, Boston, MA </StyledP> 
                    <StyledP> Jan. 2023-May 2023 </StyledP> 
                    <StyledP> <em>CDS Office Assistant</em> </StyledP> 
                    <ul> 
                        <li> <StyledP>Be the first point of contact for visitors; engage visitors - in person, over the phone, and via email. </StyledP> </li> 
                        <li> <StyledP>Manage office supplies. </StyledP> </li>     
                        <li> <StyledP>Help to prepare for the meetings and events. </StyledP> </li> 
                    </ul> 
                </div> 
            </StyledSkills>
        </>

    )
}