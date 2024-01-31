import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid #000;
`;
const NavContainerMax = styled.nav`
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
const SocialNetworks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
const SocialNetworkImg = styled.a`
  width: 32px;
  height: 32px;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
  }
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


const Navbar = () => {
  const [webServicesAnchorEl, setWebServicesAnchorEl] = useState(null);
  const [softwareAnchorEl, setSoftwareAnchorEl] = useState(null);
  const [instalacionesAnchorEl, setInstalacionesAnchorEl] = useState(null);
  const [contactoAnchorEl, setContactoAnchorEl] = useState(null);

  const openWebServices = Boolean(webServicesAnchorEl);
  const openSoftware = Boolean(softwareAnchorEl);
  const openInstalaciones = Boolean(instalacionesAnchorEl);
  const openContacto = Boolean(contactoAnchorEl);

  const handleClickWebServices = (event: any) => {
    setWebServicesAnchorEl(event.currentTarget);
  };
  const handleCloseWebServices = () => {
    setWebServicesAnchorEl(null);
  };

  const handleClickSoftware = (event: any) => {
    setSoftwareAnchorEl(event.currentTarget);
  };
  const handleCloseSoftware = () => {
    setSoftwareAnchorEl(null);
  };

  const handleClickInstalaciones = (event: any) => {
    setInstalacionesAnchorEl(event.currentTarget);
  };
  const handleCloseInstalaciones = () => {
    setInstalacionesAnchorEl(null);
  };

  const handleClickContacto = (event: any) => {
    setContactoAnchorEl(event.currentTarget);
  };
  const handleCloseContacto = () => {
    setContactoAnchorEl(null);
  };

  return (
    <NavContainer>
      <NavContainerMax>
        <LogoTemp to="/">
          Oultra.
        </LogoTemp>

        <NavButtons>
          <div>
            <Button
              id="web-services-button"
              aria-controls={openWebServices ? "web-services-menu-list-grow" : undefined}
              aria-haspopup="true"
              aria-expanded={openWebServices ? "true" : undefined}
              onClick={handleClickWebServices}
              variant="text"
              style={{ color: '#E7ECF3', }}
            >
              Paginas web
            </Button>
            <Menu
              id="web-services-menu-list-grow"
              anchorEl={webServicesAnchorEl}
              open={openWebServices}
              onClose={handleCloseWebServices}
              MenuListProps={{
                "aria-labelledby": "web-services-button"
              }}
            >
              <MenuItem onClick={handleCloseWebServices}>Planes</MenuItem>
              <MenuItem onClick={handleCloseWebServices}>Beneficios</MenuItem>
              <MenuItem onClick={handleCloseWebServices}>Servicio 3</MenuItem>
            </Menu>
          </div>

          <div>
            <Button
              id="software-button"
              aria-controls={openSoftware ? "software-menu-list-grow" : undefined}
              aria-haspopup="true"
              aria-expanded={openSoftware ? "true" : undefined}
              onClick={handleClickSoftware}
              variant="text"
              style={{ color: '#E7ECF3', }}
            >
              Sofware
            </Button>
            <Menu
              id="software-menu-list-grow"
              anchorEl={softwareAnchorEl}
              open={openSoftware}
              onClose={handleCloseSoftware}
              MenuListProps={{
                "aria-labelledby": "software-button"
              }}
            >
              <MenuItem onClick={handleCloseSoftware}>Software 1</MenuItem>
              <MenuItem onClick={handleCloseSoftware}>Software 2</MenuItem>
              <MenuItem onClick={handleCloseSoftware}>Software 3</MenuItem>
            </Menu>
          </div>

          <div>
            <Button
              id="instalaciones-button"
              aria-controls={openInstalaciones ? "instalaciones-menu-list-grow" : undefined}
              aria-haspopup="true"
              aria-expanded={openInstalaciones ? "true" : undefined}
              onClick={handleClickInstalaciones}
              variant="text"
              style={{ color: '#E7ECF3', }}
            >
              Instalaciones
            </Button>
            <Menu
              id="instalaciones-menu-list-grow"
              anchorEl={instalacionesAnchorEl}
              open={openInstalaciones}
              onClose={handleCloseInstalaciones}
              MenuListProps={{
                "aria-labelledby": "instalaciones-button"
              }}
            >
              <MenuItem onClick={handleCloseInstalaciones}>Instalaciones 1</MenuItem>
              <MenuItem onClick={handleCloseInstalaciones}>Instalaciones 2</MenuItem>
              <MenuItem onClick={handleCloseInstalaciones}>Instalaciones 3</MenuItem>
            </Menu>
          </div>

          <div>
            <Button
              id="contacto-button"
              aria-controls={openContacto ? "contacto-menu-list-grow" : undefined}
              aria-haspopup="true"
              aria-expanded={openContacto ? "true" : undefined}
              onClick={handleClickContacto}
              variant="text"
              style={{ color: '#E7ECF3', }}
            >
              Contacto
            </Button>
            <Menu
              id="contacto-menu-list-grow"
              anchorEl={contactoAnchorEl}
              open={openContacto}
              onClose={handleCloseContacto}
              MenuListProps={{
                "aria-labelledby": "contacto-button"
              }}
            >
              <MenuItem onClick={handleCloseContacto}>Contacto 1</MenuItem>
              <MenuItem onClick={handleCloseContacto}>Contacto 2</MenuItem>
              <MenuItem onClick={handleCloseContacto}>Contacto 3</MenuItem>
            </Menu>
          </div>
        </NavButtons>

        <SocialNetworks>
                    <SocialNetworkImg  href="https://github.com/Oultra" target="_blank" >
                        <img src="/svg/github.svg" alt="github" />
                    </SocialNetworkImg>
                    {/* <SocialNetworkImg href="https://facebook.com" target="_blank" >
                        <img src="/svg/linkedin.svg" alt="linkedin" />
                    </SocialNetworkImg> */}
                    <SocialNetworkImg href="https://www.instagram.com/oultra_dev/" target="_blank" >
                        <img src="/svg/instagram.svg" alt="instagram" />
                    </SocialNetworkImg>
                </SocialNetworks>
      </NavContainerMax>
    </NavContainer>
  );
}

export default Navbar;
