import styled from "styled-components";
import image from "../../../Images/Created.jpg";

const Background = styled.div`
   display: flex;
   
   width: 100vw;
   height: 100vh;
   
   background: url(${image});
   background-repeat: repeat;
   background-size: contain;
   background-position: center;
   
   align-items: center;
   flex-direction: column;
`;
const Div = styled.div`
   user-select: none;

   width: 40rem;
   height: 16rem;

   padding-top: 14.5rem;
   padding-left: 1rem;
   padding-right: 1rem;

   margin-top: 10rem;
   margin-right: 3.6rem;

   font-weight: bold;
   text-align: center;
   font-size: large;

   background-color: rgb(221, 241, 243, .7);
   background-color: rgb(255, 255, 255, .7);
   border-radius: .5%;
   border: 1px solid rgb(54, 90, 101);
   outline: 1px solid rgb(162, 232, 255);

   color: rgb(59, 123, 148);
   text-shadow: 1px 0 0 rgb(221, 242, 248), -1px 0 0 rgb(221, 242, 248),
      0 1px 0 rgb(221, 242, 248), 0 -1px 0 rgb(221, 242, 248), 1px 1px 0 rgb(221, 242, 248),
      -1px -1px 0 rgb(221, 242, 248), -1px 1px 0 rgb(221, 242, 248), 1px -1px 0 rgb(221, 242, 248);
`;
const Button = styled.button`
   height: 3rem;
   width: 10rem;

   ${props => props.isForm ? 'margin-top: 2rem; margin-left: 106.6rem;' : 'margin-top: 7.6rem; margin-right: 3.6rem;'};

   border-radius: 6%;
   outline: 2px solid black;
   border: 1px solid white;
   background-color: white;
   
   
   color: rgb(239, 21, 21);
   text-shadow: 1px 0 0 #000, -1px 0 0 #000,
   0 1px 0 #000, 0 -1px 0 #000, 1px 1px 0 #000, -1px -1px 0 #000,
   -1px 1px 0 #000, 1px -1px 0 #000;
   
   &:hover {
      transition: .3s;
      ${props => props.isForm ? 'background-color: black; font-weight: bold; color: rgb(239, 21, 21);' :
         'background-color: rgb(239, 21, 21); color: white;'};
   };
   &:active {
      transition: .3s;
      ${props => props.isForm ? 'background-color: rgb(239, 21, 21); color: white;' :
         'background-color: black; font-weight: bold; color: rgb(239, 21, 21);'};
   }
   transition: .3s;

  cursor: pointer;
`;

export { Background, Div, Button };