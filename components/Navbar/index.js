import { GitHub } from '@mui/icons-material';
import React from 'react';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import {DiCssdeck} from "react-icons/di";
import {FaBars} from "react-icons/fa";
import { Bio } from "../../data/constants";

const Nav = styled.div`
  background-color: ${({theme}) => theme.card_light};
  height: 80px;
  display: flex; 
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
display: flex;
justify-content: space-between;
height: 60px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
width: 80%;
padding: 0 6px;
display:flex;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
align-items: center;
@media screen and (max-width: 640px){
padding: 0 0px;

}
`;

const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px){
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 50%);
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({theme})=> theme.text_primary};
}
`;

const NavItems = styled.div`
widht: 100%;
display: flex;
justify-content: center;
align-items: center; 
gap: 32px;
list-style: none;
@media screen and (max-width: 768px){
  display: none; }
`;

const NavLink =styled.a`
  color: ${({theme})=> theme.text_primary};
  font-weight: 500;
  font-size: 15px;
  cursor: pointer; 
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover{
    color: ${({theme})=> theme.primary};
  }
`;

const ButtonContainer= styled.div`
display:flex;
align-items: center;
justify-content: end;
width: 80%;
height: 100%;
padding: 0 6px;
@media screen and (max-width: 640px){
  display: none; }
`;

const GitHubButton = styled.a`
-webkit-appearance: button;
-moz-appearance: button;
appearance: button;
text-decoration: none;
width: 80%;
max-width: 200px;
text-align: center;
padding: 10px 0;
color:${({ theme }) => theme.card_light};
border-radius: 15px;
cursor: pointer;
font-size: 15px;
font-weight: 600;
transition: all 0.2s ease-in-out !important;
background: hsla(271, 100%, 50%, 1);
background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
box-shadow:  20px 20px 60px #1F2634,
-20px -20px 60px #1F2634;
&:hover {
    transform: scale(1.05);
transition: all 0.4s ease-in-out;
box-shadow:  20px 20px 60px #1F2634,
filter: brightness(1);
}    


@media (max-width: 640px) {
    padding: 12px 0;
    font-size: 15px;
} 

`;

export const Span=styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({theme})=> theme.card_light + 99};
  transition: all 0.3s ease-in-out;
  transform: ${({open})=> (open ?  "translateX(0)": "translateX(100%)")};
  border-radius: 0 0 20 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({open})=> (open ? "1": "0")};
  z-index: ${({open})=> (open ? "1": "-1")};
`;


const Navbar = () => {
  const [open,setOpen] = React.useState(false);


  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor:"pointer",
            }}
          >
            <DiCssdeck size = "3rem"/> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClikc ={()=> {
            setOpen(!open);
          }}/>
        </MobileIcon>
        <NavItems>
          <NavLink href= "#about">About</NavLink>
          <NavLink href= "#skills">Skills</NavLink>
          <NavLink href= "#experience">Experience</NavLink>
          <NavLink href= "#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} >GitHub Profile</GitHubButton>
        </ButtonContainer>
      </NavContainer>

      {
        open && [
          <MobileMenu open={open}>

          </MobileMenu>
        ]
      }
    </Nav>
  );
  };


export default Navbar
