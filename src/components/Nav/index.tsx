import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { Divider, IconButton,  ListItem, ListItemText } from "@mui/material";
import { Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


const CustomDrawer = styled(Drawer)`
  .MuiDrawer-paper {
      background-color: #202021; 
  }
`;
const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 999;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
`;
const NavContainerMax = styled.nav`
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoTemp = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  &:hover {
    transition: all ease-in-out;
    text-decoration: underline;
  }
`;

const NavHome = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;
  text-decoration: none;
  color: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  color: white;
  &:hover {
    transition: all ease-in-out;
    text-decoration: underline;
  }
  text-align: center;
  width: 100%;
`;
const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
const TextLink = styled(ListItemText)`
  text-decoration: none;
  color: white;
`;
const CustomImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  filter: invert(1);
`;
const CustomImg2 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const CustomA = styled.a`
  text-decoration: none;
  color: white;
`;
const data = [
  { name: "Desarrollo  web" , icon: "/svg/web-page.svg" , link: "/web"},
  /* { name: "CCTV." , icon: "/svg/surveillance.svg", link: "servicios/cctv" },
  { name: "Software perzonalizado." , icon: "/svg/program.svg", link: "servicios/software"},
  { name: "Servicios de seguridad." , icon: "/svg/security.svg", link: "servicios/seguridad"},
  { name: "Soluciones." , icon: "/svg/solutions.svg", link: "servicios/soluciones"},
  { name: "Domotica." , icon: "/svg/smart-house.svg", link: "servicios/domotica"}, */
]

const Navbar = () => {
 
  const [ open, setOpen ] = useState(false);

  const getList = () => (
    <div style={{ width: 250 }} onClick={() => setOpen(false)} >
      {data.map((item, index) => (
        <CustomLink to={item.link} key={index}>
          <ListItem button key={index} >
            <CustomImg src={item.icon} alt={item.name} style={{ width: 20, height: 20, marginRight: 10 }} />
            <TextLink primary={item.name} />
          </ListItem>
        </CustomLink>
      ))}
    </div>
  );
    
  return (
    <NavContainer>
      <NavContainerMax>
        <LogoTemp to="/">
          Oultra
        </LogoTemp>
        <div>
          <IconButton onClick={ () => setOpen(true) }  style={{ color: "white" }} aria-label="boton navbar">
            <MenuIcon />
          </IconButton>
          <CustomDrawer 
            variant="temporary"
            open={open} 
            anchor="right" 
            onClose={ () => setOpen(false)}>
            <NavHome to="/">
              Oultra
            </NavHome>

            <Divider />

            <CustomLink to="/contacto">
              <ListItem >
                <ListItemText primary="Contacto" />
              </ListItem>
            </CustomLink>

            <CustomLink to="/servicios">
              <ListItem >
                <ListItemText primary="Servicios" />
              </ListItem>
            </CustomLink>

            {/* <CustomLink to="/nosotros">
              <ListItem >
                <ListItemText primary="Nosotros" />
              </ListItem>
            </CustomLink> */}

            <CustomA href="https://www.instagram.com/oultradev/" target="blank_">
              <ListItem >
                <CustomImg2 src="/svg/instagram.svg" alt="facebook" />
                <ListItemText primary="Instagram" />
              </ListItem>
            </CustomA>
            <CustomA href="https://twitter.com/oultra_dev" target="blank_">
              <ListItem >
                <CustomImg2 src="/svg/twitter.svg" alt="X" />
                <ListItemText primary="X (Twitter)" />
              </ListItem>
            </CustomA>

            <Divider />
            { getList() }
            <Divider />
          </CustomDrawer>
        </div>
        
      </NavContainerMax>
    </NavContainer>
  );
}

export default Navbar;
