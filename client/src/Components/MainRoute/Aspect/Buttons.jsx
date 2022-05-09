import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Button = styled.button`
  width: 7rem;
  height: 2.3rem;
  border-radius: 6%;
  overflow: auto;

  ${props => props.isSpecial ? 'width: 16rem; height: 3rem; font-size: larger;' : null};
  
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  
  
  outline: 2px solid black;
  border: 1px solid white;

  color: white;
  text-shadow: 1px 0 0 #000, -1px 0 0 #000,
    0 1px 0 #000, 0 -1px 0 #000, 1px 1px 0 #000,
    -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000;
    
  ${props => props.isOn ? 'transition: .3s; background-color: rgb(218, 49, 24)' :
    'transition: .6s; background-color: black; color: rgb(208, 0, 0); font-weight: bolder'};


&:hover {
  transition: .6s;
  ${props => props.isSpecial && props.isOn ? 'width: 18rem; height: 4rem; background-color: rgb(237, 65, 65); color: #d7c5a4; margin: 2.3rem' :
      !props.isSpecial && props.isOn ? 'width: 8rem; height: 2.6rem; background-color: rgb(237, 65, 65); color: #d7c5a4; margin: 2rem' :
      props.isSpecial  && !props.isOn ? 'width: 18rem; height: 4rem; background-color: #272525; color: #ff1f1f; margin: 2.3rem' :
      'width: 8rem; height: 2.6rem; background-color: #1b1a1a; color: #ff1f1f; margin: 2rem' };
  }
  &:active {
    transition: .3s;
    background-color: white;
    color: rgb(218, 49, 24);
  };

  cursor: pointer;
`;
const Select = styled.select`
  display: block;

  width: 10rem;
  height: 2.3rem;
  border-radius: 6%;
  margin-left: 3rem;
  margin-right: 3rem;

  font-weight: bold;
  text-align: center;
  border:1px solid black;

  outline: 2px solid black;
  border: 1px solid white;
  
  color: rgb(208, 0, 0);
  background-color: #000;  
  text-shadow: 1px 0 0 #000, -1px 0 0 #000,
    0 1px 0 #000, 0 -1px 0 #000, 1px 1px 0 #000,
    -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000;
    
  ${props => props.isOn ? 'transition: .3s;  color: rgb(218, 49, 24); background-color: white;' :
    'transition: .6s; background-color: black; color: rgb(208, 0, 0); font-weight: bolder;'};

  &:hover {
    transition: .6s;
    ${props => props.isOn ? 'width: 11rem; height: 2.6rem; background-color: rgb(237, 65, 65); color: #d7c5a4;' :
      'width: 11rem; height: 2.6rem; background-color: #681717; color: #ffcd44;' };
  };
`;
const Searchbar = styled.input`
  
`;

export { Buttons, Button, Select, Searchbar };