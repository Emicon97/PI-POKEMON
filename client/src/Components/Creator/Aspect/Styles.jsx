import styled from "styled-components";
import image from "../../../Images/Creation.jpg"

const Background = styled.div`
   display: flex;
   
   min-width: 100%;
   min-height: 100vh;
   
   background: url(${image});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;

   flex-direction: column;
`;
const Form = styled.form`
   display: flex;
   margin-top: 2rem;
   margin-left: 5rem;
   padding-left: 2rem;
   
   width: 36rem;
   height: 50rem;
   
   align-items: flex-start;
   justify-content: flex-end;
   flex-direction: column;
   
   background-color: rgb(221, 241, 243, .6);
`;
const Label = styled.label`
   display: flex;
   justify-content: center;
   margin-bottom: .2rem;
   `;
const Input = styled.input`
   opacity: 0.8;
   margin-bottom: .1rem;
   
   text-align: start;
   overflow-wrap
   ${props => props.isCheckbox ? 'width: 1.5rem; height: 1.5rem; margin-left: 1.6rem; margin-right: 1.6rem;' : null}

   -webkit-outer-spin-button,
   -webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }
   -moz-appearance: textfield;
`;
const Div = styled.div`
   display: flex;
   justify-content: flex-start;
   
   max-width: 50rem;
   flex-wrap: auto;
`;
const Span = styled.span`
   margin-left: 1rem;
   color: red;
`;
const TypeContainer = styled.div`
   display: flex;
   flex-flow: column wrap;
   flex-wrap: wrap;

   max-height: 13rem;
   max-width: 13rem;
   margin-left: 1rem;
`;
const MiniButton = styled.button`
   margin-left: 14rem;
   margin-bottom: 1rem;

   border-radius: 100%;
   border: 3px solid black;
  
   width: 3rem;
   height: 3rem;
   padding-inline: 0 0;
  
   outline: 2px solid black;
   border: 2px solid white;
   text-shadow: 2px 0 0 #000, -2px 0 0 #000,
      0 2px 0 #000, 0 -2px 0 #000, 2px 2px 0 #000,
      -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000;
   -webkit-text-fill-color: white;
  
   background: linear-gradient(180deg, rgb(239, 21, 21) 50%, white 50%);
  
   &:hover {
      transition: .5s;
      transform: rotate(15deg);
      width: 3.6rem;
      height: 3.6rem;
  }

   &:active {
      transition: .2s;
      transform: rotate(-45deg);
      width: 2.6rem;
      height: 2.6rem;
      padding-inline: 0 1rem;
   }
  
   transition: .2s;

   overflow: hidden;

   cursor: pointer;
`;

export { Background, Form, Label, Input, Div, Span, TypeContainer, MiniButton };