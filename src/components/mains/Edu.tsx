import styled from "styled-components";

const StyledEducation=styled.main`
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

const StyledTh=styled.th`
    font-weight: normal; 
`; 

export default function Edu() {
    return (
        <>
            <title>Education | Resume</title>
            <StyledEducation id="main-content">
                <StyledH2 id="main-title">Education</StyledH2>
                <br/>

                <div id="main">
                    <StyledP><em><b>Boston University</b></em>, Boston, MA</StyledP> 

                    <ul>
                        <li> <StyledP><em><b>Anticipated Graduation:</b></em> May 2026</StyledP> </li> 
                        <li> <StyledP><em><b>Bachelor of Science in Data Science, with a minor in Computer Science</b></em></StyledP> </li>     
                        <li> <StyledP><em><b>GPA:</b></em> 3.78/4.00; Dean's List for all semesters completed at BU</StyledP> </li>  
                        <li> <StyledP><em><b>Relevant Course:</b></em></StyledP> 
                            <table> 
                                    <tr>
                                        <StyledTh><StyledP>DS 210 Programming for Data Science</StyledP></StyledTh>
                                        <StyledTh><StyledP>CS 210 Computer Systems</StyledP></StyledTh> 
                                    </tr> 
                                    <tr>
                                        <StyledTh><StyledP>CS 330 Analysis of Algorithms</StyledP></StyledTh> 
                                        <StyledTh><StyledP>DS 310 Data Mechanics</StyledP></StyledTh> 
                                    </tr> 
                                    <tr> 
                                        <StyledTh><StyledP>DS 320 Algorithms for Data Science</StyledP></StyledTh>          
                                        <StyledTh><StyledP>DS 340 Intro Machine Learning & AI</StyledP></StyledTh> 
                                    </tr> 
                                    <tr>
                                        <StyledTh><StyledP>CS 440 Intro to Artificial Intelligence</StyledP></StyledTh>         
                                        <StyledTh><StyledP>DS519 Spark! SE X-Lab Practicum</StyledP></StyledTh> 
                                    </tr> 
                                    <tr> 
                                        <StyledTh><StyledP>CS 412 Full Stack Software Engineering</StyledP></StyledTh> 
                                </tr> 
                            </table> 
                        </li>

                    </ul> 
                </div> 
            </StyledEducation>
        </>

    )
}