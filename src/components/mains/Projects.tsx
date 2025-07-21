import styled from "styled-components";
import Calculator from "./Calculator"; 

const StyledProjects=styled.main`
    height: 270vh;
    width: 70%;
    margin: auto; 
    padding-top: 4%; 

    @media  screen and (max-width: 1000px){
        height: 300vh; 
        width: 100%;
    } 
`;

const StyledH2=styled.h2`
    font-size: calc(2px + 4vh); 
    color: rgb(214, 81, 19); 
`; 

const StyledH3=styled.h3`
    font-size: calc(2px + 2.3vh); 
`; 

const StyledP=styled.p`
    font-size: calc(2px + 1.9vh); 
    margin-top: 0.6%;
`; 

const StyledProject=styled.li`
    margin-top: 1.6%; 
`; 

export default function Projects() {
    return (
        <>
            <title>Projects | Resume</title>
            <StyledProjects id="main-content">
                <StyledH2 id="main-title">Projects</StyledH2>
                <br/>

                <div id="main">
                    <StyledH3>Machine Learning</StyledH3>           
                    <ul> 
                        <StyledProject> <StyledP><em><b>“Food Image Classification”</b></em>-- class project, DS340 Intro Machine Learning and AI</StyledP> 
                            <StyledP>Mar.-April 2025</StyledP>  
                            <ul> 
                                <li> <StyledP>Built a food image classification model using the Food-101 Dataset and transfer learning with <em>MobileNetV2</em>. </StyledP> </li> 
                                <li> <StyledP>Preprocessed and augmented images to improve generalization. </StyledP> </li> 
                                <li> <StyledP>Implemented a two-phase training strategy during training. </StyledP> </li> 
                                <li> <StyledP>Reached 58% test accuracy across 101 food categories, achieving a maximum F1-score of 1.0, with 13 classes scoring above 0.80 in F1-score. </StyledP> </li> 
                            </ul> 
                        </StyledProject>
                        <StyledProject> <StyledP><em><b>“Stealth”</b></em> ” -- class project, CS440 Introduction to Artificial Intelligence</StyledP> 
                            <StyledP>Feb. 2025</StyledP>  
                            <ul> 
                                <li> <StyledP>Used A* search to enable the agent to efficiently navigate toward and destroy the enemy's base tower, collect gold along the way, and return to its spawn location, while avoiding obstacles and evading enemy pursuit. </StyledP> </li> 
                            </ul> 
                        </StyledProject> 
                        <StyledProject> <StyledP><em><b>“Pokémon battle simulator”</b></em>-- class project, CS440 Introduction to Artificial Intelligence</StyledP> 
                            <StyledP>Mar. 2025</StyledP>  
                            <ul> 
                                <li> <StyledP>Used stochastic Minimax to strategically select the best Pokémon and move at each step for the agent, with utility values based on the status of both agents and the potential effects of moves. </StyledP> </li> 
                            </ul> 
                        </StyledProject> 
                    </ul> <br/>

                    <StyledH3>Webapp Development</StyledH3>           
                    <ul> 
                        <StyledProject> <StyledP><em><b>“Academico.ai”</b></em>-- Class Project, DS519 Spark! SE X-Lab Practicum</StyledP> 
                            <StyledP>Jan.-April 2025</StyledP>  
                            <ul> 
                                <li> <StyledP>Used <b><em>Next.js</em></b> and <b><em>React</em></b> to build the user interface </StyledP> 
                                    <ul> 
                                        <li> <StyledP> User/Chatbot Interaction: </StyledP>  
                                            <ul> 
                                                <li> <StyledP>Enabled users to input requirements through a user-input-field. </StyledP> </li> 
                                                <li> <StyledP>Sent user queries to the backend for processing and received backend responses and displayed them in the dialogue. </StyledP> </li> 
                                            </ul> 
                                        </li>
                                        <li> <StyledP> Chat History Storage: </StyledP>  
                                            <ul> 
                                                <li> <StyledP>Implemented in-memory storage of chat histories. </StyledP> </li> 
                                                <li> <StyledP>Enabled users to review and continue saved previous chat sessions. </StyledP> </li> 
                                            </ul> 
                                        </li>
                                    </ul> 
                                </li> 
                                <li> <StyledP>Led the approach for extracting entities and relationships from article metadata to support knowledge graph construction. </StyledP> 
                                    <ul> 
                                        <li><StyledP>Designed and validated an approach using spaCy for entity extraction and an LLM to generate node and relationship parameters, which was later integrated by the backend team into the project model. </StyledP> </li>       
                                    </ul> 
                                </li> 
                            </ul> 
                        </StyledProject>
                        <StyledProject> <StyledP><em><b>“Mini Facebook”</b></em>-- Class Project, CS412 Full Stack Software Engineering  </StyledP> 
                            <StyledP>Jun. 2025</StyledP>  
                            <ul> 
                                <li> <StyledP>Used <b><em>Django</em></b> to develop a full-stack social networking web application with core <b><em>Facebook-like</em></b> features: </StyledP> 
                                    <ul> 
                                        <li> <StyledP>Implemented user authentication (registration, login, logout) and profile editing. </StyledP> </li> 
                                        <li> <StyledP>Built friend list, friend recommendation, and friend request system. </StyledP> </li> 
                                        <li> <StyledP>Enabled users to and to post, update, and delete status messages. </StyledP> </li> 
                                        <li> <StyledP>Implemented a news feed page displaying status messages from the authenticated user and their friends, sorted by timestamp. </StyledP> </li> 
                                    </ul>                       
                                </li> 
                            </ul> 
                        </StyledProject> 
                        <StyledProject> <StyledP><em><b>“Focus Tool”</b></em>-- Class Project, CS412 Full Stack Software Engineering  </StyledP> 
                            <StyledP>Jun. 2025</StyledP>  
                            <ul> 
                                <li> <StyledP>Used <b><em>Django</em></b> to develop a focus tool web application with timer and task management features: </StyledP> 
                                    <ul> 
                                        <li> <StyledP>Implemented user authentication (registration, login, logout) and profile editing. </StyledP> </li> 
                                        <li> <StyledP>Enabled users build a to-do-list with task tagging, with its items automatically sorted by their complete status and due time. </StyledP> </li> 
                                        <li> <StyledP>Displayed countdown timers for to-do items with upcoming due times. </StyledP> </li> 
                                        <li> <StyledP>Enabled users to set a custom focus timer for selected task. </StyledP> </li> 
                                        <li> <StyledP>Designed an incentive system to help users to stay motivated. </StyledP> </li> 
                                        <li> <StyledP>Displayed a pie chart and a bar chart on daily focus time distribution to help users to better reflect on their time management. </StyledP> </li> 
                                    </ul>                       
                                </li> 
                            </ul> 
                        </StyledProject> 
                    </ul> <br/>

                    <StyledH3> UX/UI Design </StyledH3>           
                    <ul> 
                        <StyledProject> <StyledP><em><b>Health Assistant app prototype</b></em>-- class project, DS280 Spark! UX/UI Design </StyledP> 
                            <StyledP>Sept.-Dec. 20245</StyledP>  
                            <ul> 
                                <li> <StyledP>Designed a sitemap, wireframes, high-fidelity screens, and finally a clickable prototype of a <b><em>Health Assistant app</em></b> using Figma. </StyledP> </li> 
                                <li> <StyledP>Designed and implemented a usability test for our prototype; refined the clickable prototype based on collected feedback. </StyledP> </li>  
                            </ul> 
                        </StyledProject> 
                    </ul> 
                    <br/> 
                    
                </div> 

                <Calculator/>
            </StyledProjects>
        </>

    )
}