import styled from 'styled-components';
import image from '../../../Images/Details.png';

const Background = styled.div`
   display: flex;

   min-width: 100%;
   min-height: 100vh;
   
   background: url(${image});
   background-repeat: repeat-y;
   background-size: contain;
   background-position: center;
   
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;
const Div = styled.div`
   display: flex;

   align-items: center;
   justify-content: center;
   flex-direction: row;

   margin-bottom: 1.5rem;
`;

export { Background, Div };