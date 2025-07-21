import styled from "styled-components";

const StyledHome=styled.main`
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

export default function Home() {
    return (
        <>
            <title>Home | Resume</title>
            <StyledHome id="main-content">
                <StyledH2 id="main-title">Home</StyledH2>
                <br/>

                <div id="main">
                    <div id="main-image">
                        <StyledImage id="profile-image" src={`../../../public/profile.jpg`} alt="Emily Yang"/> <br/>
                    </div>

                    <div id="main-text">
                        <StyledP> 
                            I am a rising senor at Boston University majoring in Data Science with a minor in Computer Science. 
                            I am familiar with multiple programming languages and data structures, and have coursework experience in full-stack development using the Django framework. 
                            I am also familiar with core machine learning techniques, including linear regression, decision trees, clustering, and neural networks. 
                            I am seeking internship opportunities where I can apply my technical and analytical skills to real-world problems and contribute to innovative, impact-driven teams. 
                        </StyledP> 
                        <br/>
                    </div>
                </div> 
                
                <StyledH4>Welcome to my website, here you will find my <u><em>Educational History</em></u> and my <u><em>Technical Experiences</em></u> , as well as other information that might be of interest to you. </StyledH4> 
            </StyledHome>
        </>

    )
}