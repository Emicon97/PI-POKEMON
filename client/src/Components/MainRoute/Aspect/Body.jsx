import styled from 'styled-components';
import image from '../../../Images/MainRoute.png';

const Container = styled.div`
   overflow: hidden;
`;
const Background = styled.div`
   display: flex;
   align-items: center;
   min-width: 100vw;
   min-height: 100vh;
   
   background: url(${image});
   background-repeat: repeat;
   background-size: contain;
   background-position: center;
   
   flex-direction: column;
`;
const Grid = styled.div`
   display: flex;
   justify-content: space-evenly;
   flex-wrap: wrap;

   height: fit-content;
   width: fit-content;
   min-height: 59rem;
`;

export { Container, Background, Grid };