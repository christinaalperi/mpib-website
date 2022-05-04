import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const Nav = styled.nav`
background: #A3BDA7;
display: flex;
justify-content: space-evenly;
font-family: 'Montserrat', sans-serif;

`;

export const NavLink = styled(Link)`
color: black;
display: flex;
margin:0;
align-items: center;
text-decoration: none;
padding: 0 1.5rem;
height: 100%;
cursor: pointer;
&.active {
	color: #24783a;
	font-weight: bold;
}
`;



export const NavMenu = styled.div`

display: flex;
align-items: center;
padding:25px 0;
white-space: nowrap; 
@media screen and (max-width: 768px) {
	display: none;
}
`;

