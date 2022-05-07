import styled from "styled-components";

const Paginator = styled.div`
   margin-top: 2rem;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
`;
const Index = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;

   height: 3rem;
   width: 3rem;
   
   margin-bottom: 1rem;
   margin-left: 1rem;
   margin-right: 1rem;
  
   outline: 2px solid black;
   border: 1px solid white;
   background-color: rgb(218, 49, 24);
   border-radius: 6%;
   color: white;
   text-shadow: 1px 0 0 #000, -1px 0 0 #000,
    0 1px 0 #000, 0 -1px 0 #000, 1px 1px 0 #000, -1px -1px 0 #000,
    -1px 1px 0 #000, 1px -1px 0 #000;

   ${props => props.isSelected ? 'transition: all .4s ease-out; background-color: white; color: rgb(218, 49, 24); font-size: large; font-weight: bold; padding: 2.1rem;' :
         '&:hover {transition: .3s ease-out; padding: 1.9rem; margin-left: 2rem; margin-right: 2rem; background-color: #371e1e};'};

    &:active {
      transition: .2s;
      background-color: black;
   };

   transition: all .4s ease-in;

   cursor: pointer;
`

export { Paginator, Index };