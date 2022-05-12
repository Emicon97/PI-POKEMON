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

   &:hover #delete {
      transition: 0.6s ease-out;

      width: 3rem;
      height: 3rem;
      margin-top: .1rem;
      margin-right: -.3rem;
      font-size: larger;
   }

   a:active {
      text-decoration: none;
   };
   
   ${props => props.hasErrors ? 'display: flex; align-items: center;' : null }

   transition: 1.5s ease-in;
   transition-delay: 200ms;
`;
const LinkBox = styled.div`
   display: flex;
   
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;
const Delete = styled.button`
   width: 2rem;
   height: 2rem;

   border-radius: 100%;
   
   margin-top: .5rem;
   margin-bottom: -2.5rem;
   margin-left: 12rem;

   color: rgb(218, 49, 24);
   font-weight: bolder;
   text-shadow: 1px 0 0 #000, -1px 0 0 #000,
      0 1px 0 #000, 0 -1px 0 #000, 1px 1px 0 #000, -1px -1px 0 #000,
      -1px 1px 0 #000, 1px -1px 0 #000;

   background-color: rgb(255, 247, 214);
   border: 3px solid black;

   &:hover {
      transition: .2s;
      color: #ffd000;
      background-color: #ff0000;
   };

   transition: 1.5s ease-out;

   cursor: pointer;
`;
const Err = styled.div`
   width: 10rem;
   margin-left: 2.5rem;
   

   cursor: pointer;
`;

export { Entrance, LinkBox, Delete, Err };