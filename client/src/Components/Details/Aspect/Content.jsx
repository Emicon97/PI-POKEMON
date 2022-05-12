import styled from "styled-components";

const Name = styled.h1`
   color: white;
   text-shadow: 2px 0 0 #000, -2px 0 0 #000,
      0 2px 0 #000, 0 -2px 0 #000, 2px 2px 0 #000, -2px -2px 0 #000,
      -2px 2px 0 #000, 2px -2px 0 #000;

   font-size: 900;
   font-weight: 700;

   margin-top: -.1rem;
`;
const Img = styled.image`
   margin-top: -4rem;
   margin-bottom: -3rem;
`;
const ImgError = styled.div`
   display: flex;

   width: 8rem;
   height: 6.5rem;
   border-radius: 7%;
   border: 1px solid black;

   align-items: center;
   justify-content: center;

   color: white;
   font-weight: lighter;
   text-shadow: 2px 0 0 #000, -2px 0 0 #000,
      0 2px 0 #000, 0 -2px 0 #000, 2px 2px 0 #000, -2px -2px 0 #000,
      -2px 2px 0 #000, 2px -2px 0 #000;
   background-color: rgb(198, 102, 102, .7);
`;
const Text = styled.h2`
   color: white;
   text-shadow: 2px 0 0 #000, -2px 0 0 #000,
      0 2px 0 #000, 0 -2px 0 #000, 2px 2px 0 #000, -2px -2px 0 #000,
      -2px 2px 0 #000, 2px -2px 0 #000;
   
   font-size: 500;
   font-weight: 500;

   
   ${props => props.isId ? 'margin-top: 1rem;' : 'nulmargin-top: -1rem;' }
   margin-bottom: -1rem;
   `;
const Types = styled.div`
   display: flex;
   flex-direction: row;
   align-items: flex-start;
   justify-content: center;
`;
const Type = styled.div`
   width: 8.5rem;
   height: 2rem;
   padding-top: .8rem;

   font-size: large;
   font-weight: bold;
   text-decoration: none;

   ${props => props.name === 'Grass' ? 'background-color: green; border: 3px solid rgb(10, 77, 10); color: rgb(75, 190, 75)' :
      props.name === 'Fire' ? 'background-color: rgb(221, 92, 12); border 3px solid rgb(114, 46, 4); color: rgb(232, 142, 86)' :
      props.name === 'Water' ? 'background-color: rgb(64, 135, 194); border: 3px solid rgb(24, 72, 111); color: rgb(157, 201, 236);' :
      props.name === 'Flying' ? 'background-color: cornflowerblue; border: 3px solid rgb(49, 78, 131); color: rgb(200, 214, 240);' :
      props.name === 'Bug' ? 'background-color: rgb(82, 138, 35); border: 3px solid rgb(50, 88, 18); color: rgb(165, 211, 127)' :
      props.name === 'Poison' ? 'background-color: purple; border: 3px solid rgb(49, 7, 49); color: rgb(174, 78, 174)' :
      props.name === 'Normal' ? 'background-color: #bcbcbc; border 3px solid #7d7d7d; color: #888888;' :
      props.name === 'Electric' ? 'background-color: #ffcc00; border 3px solid #ab982c; color: #ad9637;' :
      props.name === 'Ground' ? 'background-color: #ceb659; border 3px solid #a49b67; color: #8a7f4a;' :
      props.name === 'Fairy' ? 'background-color: #fd9afd; border: 3px solid rgb(188, 87, 159); color: rgb(239, 220, 234)' :
      props.name === 'Dragon' ? 'background-color: rgb(35, 35, 169); border: 3px solid rgb(89, 24, 138); color: #b30e0e ' :
      props.name === 'Psychic' ? 'background-color: #ff33ff; border: 3px solid #f84dfb; color: #ff86ff;' :
      'background-color: #0336ff; border: 3px solid #151552; color: #ddb100; font-size: small; width: 11rem; height: 2.2rem;'
   };

   border-radius: 10%;
   margin-top: .2rem;
   margin-left: .5rem;
   margin-right: .5rem;
   margin-bottom: .5 rem;
`;

export { Name, Img, ImgError, Text, Types, Type };