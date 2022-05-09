import styled from "styled-components";

const PrevNext = styled.div`
   user-select: none;

   display: flex;
   
   flex-direction: column;
   align-items: center;
   justify-content: center;
   overflow: hidden;
   flex-wrap: wrap;

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
      margin-bottom: 4rem;
      margin-left: 2rem;
      margin-right: 2rem;
      padding: 2rem;
   };
   &:active {
      text-decoration: none;
      transition: .3s;
      ${props => props.order === 'isPrev' ? 'margin-left: 5rem;' : 'margin-right: 5rem;'}
      height: 20rem;
      width: 20rem;
   };
   
   transition: 1.5s ease-out;

   flex-wrap: wrap;

   cursor: pointer;
`;
const LinkBox = styled.div`
   display: flex;
   
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export { PrevNext, LinkBox };