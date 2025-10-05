import styled from "styled-components";
import {Link} from "react-router";

const StyledHome=styled.main`
    height: 130vh;
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

const StyledH4=styled.h4`
    font-size: calc(2px + 1.5vh); 
`; 

const StyledP=styled.p`
    font-size: calc(2px + 1.9vh); 
    margin-top: 0.6%;
`; 

const StyledImage=styled.img`
    max-width: 30%; 
    display: block; 
    margin: auto; 
`; 

const Notation=styled.p`
    font-size: calc(2px + 1.9vh); 
    margin-top: 0.6%;
    text-align: center; 
`; 

const HorizontalLine = styled.hr`
    width: 90%; 
    height: 3px; 
    border: none; 
    margin: auto; 
    background-color: rgb(132, 144, 145); 
    
`; 

const StyledUlnoDOT = styled.ul`
    list-style-type: none; 

`; 

export default function Home() {
    return (
        <>
            <title>Home | Resume</title>
            <StyledHome id="main-content">
                <StyledH2 id="main-title"></StyledH2>
                <br/>

                <div id="main">
                    <div id="main-image">
                        <StyledImage id="profile-image" src={`/With Alfie.jpg`} alt="Lily Chou with Alfie at Laguna Beach"/> 
                        <Notation>With Alfie</Notation>
                        <br/>
                    </div>

                    <div id="main-text">
                        <StyledP> 
                            I am a rising senor at Boston University majoring in Data Science with a minor in Computer Science. 
                            I am familiar with multiple programming languages and data structures, and have coursework experience in full-stack development using the Django framework. 
                            I am also familiar with core machine learning techniques, including linear regression, decision trees, clustering, and neural networks. 
                            <br/>
                            I <b>am</b> seeking internship opportunities where I can apply my technical and analytical skills to real-world problems and contribute to innovative, impact-driven teams. 
                        </StyledP> 
                        <br/> 

                        <HorizontalLine/>
                        <StyledP>lilychou AT bu DOT edu</StyledP>
                        <StyledP>Department of Mathematics and Statistics</StyledP>
                        <StyledP>Boston University</StyledP>
                        <StyledP>665 Commonwealth Ave, Rm 406</StyledP>
                        <StyledP>Boston, MA, 02215</StyledP>
                    </div>

                   {/* LinkedIN, BU MATH STATS */}
                   <br/>
                   <Link to="https://www.bu.edu/math/" target="blank" style={{textDecoration: 'none'}}><StyledP>BU Math & Stats</StyledP></Link>
                   <Link to="https://www.bu.edu/mssp/" target="blank" style={{textDecoration: 'none'}}><StyledP>BU Master of Science in Statistical Practice (MSSP) </StyledP></Link>
                <br/>
                
                </div> 
                   <Link to="https://www.linkedin.com/in/lily-chou-p16" target="blank" style={{textDecoration: 'none'}}><StyledP>LinkedIn: lily-chou-p16</StyledP></Link>
                {/* <StyledH4>Welcome to my website, here you will find my <u><em>Educational History</em></u> and my <u><em>Technical Experiences</em></u> , as well as other information that might be of interest to you. </StyledH4>  */}
            </StyledHome>
        </>

    )
}