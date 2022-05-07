import styled from 'styled-components';

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
   width: 5.5rem;
   height: 1.8rem;
   padding-top: .4rem;

   font-size: large;
   font-weight: bold;
   text-decoration: none;

   ${props => props.name === 'Grass' ? 'background-color: green; border: 3px solid rgb(10, 77, 10); color: rgb(75, 190, 75)' :
      props.name === 'Fire' ? 'background-color: rgb(221, 92, 12); border 3px solid rgb(114, 46, 4); color: rgb(232, 142, 86)' :
      props.name === 'Water' ? 'background-color: rgb(64, 135, 194); border: 3px solid rgb(24, 72, 111); color: rgb(157, 201, 236);' :
      props.name === 'Flying' ? 'background-color: cornflowerblue; border: 3px solid rgb(49, 78, 131); color: rgb(200, 214, 240);' :
      props.name === 'Bug' ? 'background-color: rgb(82, 138, 35); border: 3px solid rgb(50, 88, 18); color: rgb(165, 211, 127)' :
      props.name === 'Poison' ? 'background-color: purple; border: 3px solid rgb(49, 7, 49); color: rgb(174, 78, 174)' :
      'background-color: #0336ff; border: 3px solid #151552; color: #ddb100; font-size: small; width: 11rem; height: 2.2rem;'
   };

   border-radius: 10%;
   margin-top: .2rem;
   margin-left: .5rem;
   margin-right: .5rem;
`;

export { Name, ImgError, Types, Type };