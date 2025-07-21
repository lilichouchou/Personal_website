import {useState} from "react"; 
import styled from "styled-components"; 

const StyledCalculator=styled.div`
    background-color: rgb(249, 220, 219); 
    width: 37%;
    border-radius: 3vw; 
    margin:7% auto; 
    padding: 1.5%; 
    text-align: center; 

    // creates a shadow of this object: 
    // first parameter is the horizontal location from object, 
    // second parameter is vertical location from object, 
    // third parameter is the blur, 
    // fourth parameter is the color of shadow. 
    // Resource: https://www.w3schools.com/css/css3_shadows_box.asp 
    box-shadow:0.5vw 0.5vw 0.5vw #999; 
`; 

const StyledButton=styled.button`
    text-align: center;
    margin: 5% auto;
    width: 17%; 
    background-color:rgb(228, 136, 93); 
    border-radius: 10vw; 
    padding: 2%;

    // change curser to pointer when it is placed on the button. 
    // Resource: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_buttons_animate3 
    cursor: pointer;
    box-shadow: 0.1vw 0.1vw 0.1vw #999; 

    // add the hover and active effects using "&"
    // Resource: https://codesandbox.io/p/sandbox/styled-components-hover-dduyd?file=%2Fsrc%2FApp.js%3A12%2C4-13%2C11 
    
    /* change color of button to rgb(245, 111, 49) when the cursor hovers on the button. 
    Resource: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_buttons_animate3 */
    &:hover {
        background-color: rgb(245, 111, 49); 
    }

    /* change color of button to rgb(245, 111, 49) and move the button 0.3vh downward when the button is being clicked. 
    Resource: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_buttons_animate3 */
    &:active {
        background-color: rgb(245, 111, 49);
        transform: translateY(0.3vh);
    }
`; 

const StyledOutput=styled.div`
    height: 5%; 
    background: rgb(251, 252, 253);     
    padding: 4.5%;
`; 

const Result = styled.h4<{value: string}> `
    color: ${(props) => (Number(props.value) < 0 ? 'red' : 'black')}; 
`

const StyledH3=styled.h3`
    color: rgb(230, 81, 12); 
    font-size: calc(2px + 3.2vh); 
`; 

const StyledP=styled.p`
    font-size: calc(2px + 1.9vh); 
    margin-top: 0.6%; 
`; 

const StyledH5=styled.h5`
    font-size: calc(2px + 1.3vh); 
    font-weight: normal; 
`; 



export default function Calculator() {
    const [numOne, setNumOne] = useState(""); 
    const [numTwo, setNumTwo] = useState(""); 
    const [result, setResult] = useState(""); 

    function doAdd() { 
        // add the two inputs
        const value = Number(numOne) + Number(numTwo);
        setResult(String(value)); 
    } 

    function doSubtract() { 
        // add the two inputs
        const value = Number(numOne) - Number(numTwo);
        setResult(String(value)); 
    } 

    function doMultiply() { 
        // add the two inputs
        const value = Number(numOne) * Number(numTwo);
        setResult(String(value)); 
    }

    function doDivide() { 
        // add the two inputs
        const value = Number(numOne) / Number(numTwo);
        setResult(String(value)); 
    }

    function doPower() { 
        // add the two inputs 
        let value = 1;

        for (let i = 0; i < Number(numTwo); i++) {
            value = Number(numOne) * value;
        }
        setResult(String(value)); 
    } 

    function doClear() {
        // clear the result and the two inputs
        setNumOne("");
        setNumTwo("");
        setResult("");
    } 


    return ( 
    <StyledCalculator> 
        <StyledH3>Javascript Calculator</StyledH3>
        <br/>

        <label><StyledP>Give me a number: </StyledP></label> 
        <input
        value={numOne} // ...force the input's value to match the state variable...
        onChange={(e) => setNumOne(e.target.value)} // ... and update the state variable on any edits!
        /> 

        <label><StyledP>Give me a number: </StyledP></label> 
        <input
        value={numTwo} // ...force the input's value to match the state variable...
        onChange={(e) => setNumTwo(e.target.value)} // ... and update the state variable on any edits!
        /> 
        <br/>

        <StyledButton onClick={doAdd}><StyledH5>+</StyledH5></StyledButton>
        <StyledButton onClick={doSubtract}><StyledH5>-</StyledH5></StyledButton>
        <StyledButton onClick={doMultiply}><StyledH5>*</StyledH5></StyledButton>
        <StyledButton onClick={doDivide}><StyledH5>/</StyledH5></StyledButton>
        <StyledButton onClick={doPower}><StyledH5>**</StyledH5></StyledButton>

        <StyledOutput><Result value={result}>{result}</Result></StyledOutput> 
        
        <StyledButton onClick={doClear}><StyledH5>Clear</StyledH5></StyledButton>            
    </StyledCalculator> 

    )



}