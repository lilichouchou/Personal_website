import {Link} from "react-router"; 
import styled from "styled-components";

const StyledFooter=styled.footer`
    background-color: rgb(251, 252, 253); 
    padding: 1%; 
`; 

const StyledP=styled.p`
    font-size: calc(2px + 1.9vh); 
    margin-top: 0.6%; 
`; 

const StyledHr=styled.hr`
    color: rgb(228, 136, 93); 
`; 

export default function Footer(){
    return(
        <>
            <StyledHr/>
            <StyledFooter>
                <StyledP>All Rights Reserved by Lily Chou <Link to="../credits/credits.html"> Credits</Link> &copy;</StyledP>
                <div id="time-date"></div>
            </StyledFooter>
        </>
    )
}