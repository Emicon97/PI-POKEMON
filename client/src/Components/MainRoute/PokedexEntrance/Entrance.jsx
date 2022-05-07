import styled from 'styled-components';

const Entrance = styled.div`
   user-select: none;
   height: 15rem;
   width: 15rem;
   
   outline: 3px solid black;
   border: 2px solid white;
   background-color: rgb(218, 49, 24);
   overflow: hidden;

   border-radius: 7%;
   margin-top: 2rem;
   margin-bottom: 2rem;
   margin-left: 2.5rem;
   margin-right: 2.5rem;
   
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
      margin-top: 4rem;
      margin-bottom: 10rem;
      margin-left: 4rem;
      margin-right: 4rem;
      padding: 2rem;
   };
   a:active {
      text-decoration: none;
   };
   
   transition: 1.5s ease-out;
   transition-delay: 200ms;
`;
const LinkBox = styled.div`
   display: flex;
   
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;
const Err = styled.div`
   width: 10rem;
   margin-left: 2.5rem;

   cursor: pointer;
`;

export { Entrance, LinkBox, Err };