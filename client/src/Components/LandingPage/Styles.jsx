import styled from 'styled-components';
import image from '../../Images/LandingPage.png';

const Background = styled.div`
   display: flex;

   background: url(${image});
   width: 100vw;
   height: 80vh;
   background-repeat: no-repeat;
   background-position: center;

   flex-wrap: wrap;
   align-items: flex-end;
   justify-content: center;
`;
const Button = styled.button`
   margin-top: -11rem;

   height: 3rem;
   width: 10rem;

   border-radius: 6%;
   outline: 2px solid black;
   border: 1px solid white;
   background-color: rgb(218, 49, 24);

   color: white;
   text-shadow: 1px 0 0 #000, -1px 0 0 #000,
      0 1px 0 #000, 0 -1px 0 #000, 1px 1px 0 #000, -1px -1px 0 #000,
      -1px 1px 0 #000, 1px -1px 0 #000;

   &:hover {
      transition: .3s;
      background-color: white;
    color: rgb(218, 49, 24);
   };
   &:active {
      transition: .3s;
      background-color: black;
      font-weight: bold;
      color: rgb(208, 0, 0)
   }
   transition: .3s;

  cursor: pointer;
`;

export { Background, Button };