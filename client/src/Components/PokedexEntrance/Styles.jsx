import styled from 'styled-components';

const Entrance = styled.div`
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
      
      transition: all 0.6s ease;
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
const Name = styled.h2`
   color: white;
   text-shadow: 2px 0 0 #000, -2px 0 0 #000,
      0 2px 0 #000, 0 -2px 0 #000, 2px 2px 0 #000, -2px -2px 0 #000,
      -2px 2px 0 #000, 2px -2px 0 #000;
`;
const ImgError = styled.div`
   display: flex;

   width: 8rem;
   height: 6.5rem;
   border-radius: 7%;
   border: 1px solid black;
   margin-bottom: .5rem;

   align-items: center;
   justify-content: center;

   color: white;
   font-weight: lighter;
   text-shadow: 2px 0 0 #000, -2px 0 0 #000,
      0 2px 0 #000, 0 -2px 0 #000, 2px 2px 0 #000, -2px -2px 0 #000,
      -2px 2px 0 #000, 2px -2px 0 #000;
   background-color: rgb(198, 102, 102, .7);
`;
const Types = styled.div`
   display: flex;
   flex-direction: row;
   align-items: flex-start;
   justify-content: center;
`;
const Type = styled.div`
   min-width: 65px;
   max-height: 25px;
   padding: 5%;

   font-size: large;
   font-weight: bold;
   text-decoration: none;

   ${props => props.name === 'Grass' ? 'background-color: green; border: 3px solid rgb(10, 77, 10); color: rgb(75, 190, 75)' :
      props.name === 'Fire' ? 'background-color: rgb(221, 92, 12); border 3px solid rgb(114, 46, 4); color: rgb(232, 142, 86)' :
      props.name === 'Water' ? 'background-color: rgb(64, 135, 194); border: 3px solid rgb(24, 72, 111); color: rgb(157, 201, 236);' :
      props.name === 'Flying' ? 'background-color: cornflowerblue; border: 3px solid rgb(49, 78, 131); color: rgb(200, 214, 240);' :
      props.name === 'Bug' ? 'background-color: rgb(82, 138, 35); border: 3px solid rgb(50, 88, 18); color: rgb(165, 211, 127)' :
      props.name === '¡Este Fakemon no tiene tipos!' ? 'background-color: #0336ff; border: 3px solid #151552; color: #ddb100; font-size: small' :
      'background-color: purple; border: 3px solid rgb(49, 7, 49); color: rgb(174, 78, 174)'
   };

   border-radius: 10%;
   margin-top: .2rem;
   margin-left: .5rem;
   margin-right: .5rem;
`;

export { Entrance, LinkBox, Name, ImgError, Types, Type };