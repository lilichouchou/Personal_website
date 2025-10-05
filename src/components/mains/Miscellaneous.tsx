import styled from "styled-components";

const StyledMiscellaneous=styled.main`
    height: 170vh;
    width: 70%;
    margin: auto; 
    padding-top: 4%; 
    gap: 2%; 

    @media  screen and (max-width: 1000px){
        width: 100%;
    } 
`;

const Cats=styled.div`
    width: 100%;
    margin: auto; 
    padding-top: 4%; 
    display: flex; 
    flex-direction: row; 
    gap: 1.5%; 

    @media  screen and (max-width: 1000px){
        display: flex; 
        flex-direction: column; 
    } 
`; 

const Friends=styled.div`
    width: 100%;
    margin: auto; 
    padding-top: 4%; 
    display: flex; 
    flex-direction: row; 
    gap: 1.5%; 

    @media  screen and (max-width: 1000px){
        display: flex; 
        flex-direction: column; 
    } 
`;

const Texts=styled.div`
    width: 100%;
    margin: auto; 
    padding-top: 4%; 
    display: flex; 
    flex-direction: column; 
    gap: 1.5%; 
`;

const StyledImage=styled.img`
    max-width: 30%;  // SCALE PICTURES
    display: block; 
    margin: auto; 
`; 



const StyledH2=styled.h2`
    font-size: calc(2px + 4vh); 
    color: rgb(214, 81, 19); 
`; 

const StyledP=styled.p`
    font-size: calc(2px + 2.3vh); 
    margin-top: 0.6%;
`; 


export default function Miscellaneous() {
    return (
        <>
            <title> Miscellaneous </title>
            <StyledMiscellaneous id="main-content">
                <StyledH2 id="main-title">When I am not studying, you'll find me...</StyledH2>
                <br/>

                <div id="main"> 
                    <Cats>
                        <StyledImage id="profile-image" src={`/With Alfie.jpg`} alt="Lily Chou with Alfie at Laguna Beach"/> 
                        <StyledP> Blah blah blahhhhhhhhhhhhhhhhiausdiaksdnckabdckabsdckabsdhjbcasdcvahksdbckjasbdc </StyledP> 
                    </Cats> 

                    <Friends>
                        <Texts>
                            <StyledP> Blah blah blahhhhhhhhhhhhhhhhiausdiaksdnckabdckabsdckabsdhjbcasdcvahksdbckjasbdc </StyledP> 
                            <StyledP> Blah blah blahhhhhhhhhhhhhhhhiausdiaksdnckabdckabsdckabsdhjbcasdcvahksdbckjasbdc </StyledP> 
                            <StyledP> Blah blah blahhhhhhhhhhhhhhhhiausdiaksdnckabdckabsdckabsdhjbcasdcvahksdbckjasbdc </StyledP> 
                        </Texts>
                        <StyledImage id="profile-image" src={`/Herceg Novi.jpg`} alt="Lily Chou with Alfie at Laguna Beach"/> 
                        <StyledImage id="profile-image" src={`/WithJuanki.jpg`} alt="Lily Chou with Alfie at Laguna Beach"/> 
                    </Friends> 








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
            </StyledMiscellaneous>
        </>

    )
}