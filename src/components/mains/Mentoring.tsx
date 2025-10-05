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


export default function Mentoring() {
    return (
        <>
            <title>Skills | Resume</title>
            <StyledSkills id="main-content">
                <StyledH2 id="main-title">Skills</StyledH2>
                <br/>

                <div id="main">
                    <ul>
                        <li> <StyledP><em><b>Programing Language:</b></em> Proficient in Python, Java; Familiar with Rust, SQL, XQuery, JavaScript</StyledP> </li> 
                        <li> <StyledP><em><b>Frameworks/Libraries:</b></em> Django, Next.js, PyTorch</StyledP> </li>     
                        <li> <StyledP><em><b>Database:</b></em> SQLite, MangoDB, SQL, XQuery</StyledP> </li>  
                        <li> <StyledP><em><b>Tools:</b></em> GitHub, GDB, LaTeX, Microsoft Office, Figma, Microsoft Azure</StyledP> </li>
                        <li> <StyledP><em><b>Languages:</b></em> Fluent in English and Mandarin Chinese; basic communication skills in Spanish. </StyledP> </li> 
                    </ul> 
                </div> 
            </StyledSkills>
        </>

    )
}