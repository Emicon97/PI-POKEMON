import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Button = styled.button`
  width: auto;
  min-width: 12rem;
  height: 2rem;
  border-radius: 6%;
  overflow: auto;

  ${props => props.isSpecial ? 'width: 16rem; height: 3rem;' : null};
  
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  
  
  outline: 2px solid black;
  border: 1px solid white;
  background-color: rgb(218, 49, 24);

  color: white;
  text-shadow: 1px 0 0 #000, -1px 0 0 #000,
    0 1px 0 #000, 0 -1px 0 #000, 1px 1px 0 #000,
    -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000;

  &:active {
    transition: .3s;
    background-color: white;
    color: rgb(218, 49, 24);
  };

  cursor: pointer;
`;

export { Buttons, Button };