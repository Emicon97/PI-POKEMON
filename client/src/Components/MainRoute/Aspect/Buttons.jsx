import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 65%;
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
const PokeButton = styled.button`
  border-radius: 100%;
  border: 3px solid black;
  
  width: 3rem;
  height: 3rem;
  padding-inline: 0 0;
  
  outline: 2px solid black;
  border: 2px solid white;
  text-shadow: 2px 0 0 #000, -2px 0 0 #000,
  0 2px 0 #000, 0 -2px 0 #000, 2px 2px 0 #000,
  -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000;
  -webkit-text-fill-color: white;
  
  background: linear-gradient(180deg, rgb(239, 21, 21) 50%, white 50%);
  
  &:hover {
    transition: .5s;
    transform: rotate(15deg);
    width: 3.6rem;
    height: 3.6rem;
  }

  &:active {
    transition: .2s;
    transform: rotate(-45deg);
    width: 2.6rem;
    height: 2.6rem;
    padding-inline: 0 1rem;
  }
  
  transition: .2s;

  margin-left: 1rem;
  overflow: hidden;

  cursor: pointer;
`;

export { Buttons, Button, Select, Searchbar, PokeButton };