import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {Routes, Route} from "react-router";
import Home from "./mains/Home.tsx";
import Edu from "./mains/Edu.tsx";
import Skills from "./mains/Skills.tsx"; 
import Projects from "./mains/Projects.tsx";
import Exp from "./mains/Exp.tsx";
import Works from "./mains/Works.tsx";
import styled from "styled-components";

const Wrapper=styled.div`
    width: 97vw;
    background-color:rgb(230, 236, 235); 
    margin: auto; 
    font-family:'Times New Roman', Times, serif; 
`;

const Container=styled.div`
    display: flex; 
    flex-direction: row; 
    
    
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`;

export default function Root(){
    return(
        <Wrapper>
            <Header/>
            <Container>
                <Nav/>
                <Routes>
                    <Route
                        path={`/`}
                        element={<Home/>}
                    />
                    
                    <Route
                        path={`/education.html`}
                        element={<Edu/>}
                    /> 

                    <Route
                        path={`/skills.html`}
                        element={<Skills/>}
                    /> 

                    <Route
                        path={`/projects.html`}
                        element={<Projects/>}
                    /> 

                    <Route
                        path={`/experiences.html`}
                        element={<Exp/>}
                    /> 

                    <Route
                        path={`/works.html`}
                        element={<Works/>}
                    /> 

                </Routes>
            </Container>
            <Footer/>
        </Wrapper>
    )
}