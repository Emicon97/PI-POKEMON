import styled from 'styled-components';

const Entrance = styled.div`
   user-select: none;

   display: flex;
   
   flex-direction: column;
   align-items: center;
   justify-content: space-around;

   height: 45rem;
   width: 45rem;
   
   outline: 3px solid black;
   border: 2px solid white;
   background-color: rgb(218, 49, 24);
   overflow: hidden;

   border-radius: 7%;
   margin-top: 2rem;
   margin-bottom: 2rem;
   margin-left: 10rem;
   margin-right: 10rem;
   
   a:link {
      text-decoration: none;
      color: inherit
   };
   a:visited {
      text-decoration: none;
      color: inherit;
   };
   &:hover {
      background-color: rgb(255, 247, 214, 0.7);
      
      transition: all 0.6s ease-out;
      transition-delay: 0.1s;
      margin-bottom: 4rem;
      margin-left: 10rem;
      margin-right: 10rem;
      padding: 2rem;
   };
   a:active {
      text-decoration: none;
   };
   
   transition: 1s ease-out;
   transition-delay: 200ms;
`;

export { Entrance };