import styled from "styled-components";
import image from "../../Images/Creation.jpg"

const Background = styled.div`
   display: flex;
   
   min-width: 100%;
   min-height: 100vh;
   
   background: url(${image});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   
   justify-content: center;
   align-items: flex-start;
   flex-direction: column;

   flex-wrap: scroll;
`;
const Form = styled.form`
   display: flex;
   margin-left: 5rem;
   align-items: center;
   
   justify-content: center;
   flex-direction: column;
   flex-wrap: wrap;
   `;
const Label = styled.label`
   display: flex;
   justify-content: center;
   `;
const Input = styled.input`
   opacity: 0.8;
   margin-left: 1.5rem;
   margin-right: 1.5rem;
   
   text-align: start;
   flex-wrap: wrap;
   ${props => props.isCheckbox ? 'width: 1.5rem; height: 1.5rem;' : null}
`;
const TypeContainer = styled.div`
   display: flex;
   flex-flow: column wrap;
   justify-content: center;
   flex-wrap: wrap;
   max-height: 13rem;
   max-width: 13rem;
   margin-bottom: 1rem;
   margin-right: 27rem;
`;

export { Background, Form, Input, Label, TypeContainer };