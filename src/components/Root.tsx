import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {Routes, Route} from "react-router";
import Home from "./mains/Home.tsx";
import Teaching from "./mains/Teaching.tsx";
import Research from "./mains/Research.tsx"; 
import AboutMe from "./mains/AboutMe.tsx";
import Mentoring from "./mains/Mentoring.tsx"; 
import Miscellaneous from "./mains/Miscellaneous.tsx";
import styled from "styled-components";

const Wrapper=styled.div`
    width: 97vw;
    background-color:rgb(230, 236, 235); 
    margin: auto; 
    font-family:'Times New Roman', Times, serif; 
`;

const Container=styled.div`
    display: flex; 
    flex-direction: column;  // can be ROW
    
    
    // @media screen and (max-width: 1000px) {
    //     display: flex;
    //     flex-direction: column;
    // }
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
                        path={`/AboutMe.html`}
                        element={<AboutMe/>}
                    /> 

                    <Route
                        path={`/Mentoring.html`}
                        element={<Mentoring/>}
                    /> 

                    <Route
                        path={`/Teaching.html`}
                        element={<Teaching/>}
                    /> 

                    <Route
                        path={`/Research.html`}
                        element={<Research/>}
                    /> 

                    <Route
                        path={`/Miscellaneous.html`}
                        element={<Miscellaneous/>}
                    /> 

                </Routes>
            </Container>
            <Footer/>
        </Wrapper>
    )
}