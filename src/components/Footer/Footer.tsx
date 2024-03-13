import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 100%;
    height: auto;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    p {
        margin: 0;
    }
    border-top: 1px solid #ffffff97;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #00000065;
    margin: 0 auto;
    margin-top: 100px;
`;
const LinkCustom = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    margin: 0 10px;
    &:hover {
        color: #ffffff;
    }
`;
const DivContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
    margin: 0 auto;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 40px;
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`;

const fecha = new Date().getFullYear();

const Footer = () => {
    return (
        <FooterContainer>
            <DivContainer>
                <div>
                    <LinkCustom to="/">oultra.dev</LinkCustom>
                    <p>Todos los derechos reservados {fecha}</p>
                </div>
                <Links>
                    <LinkCustom to="/servicios">Servicios</LinkCustom>
                    <LinkCustom to="/contacto">Contacto</LinkCustom>
                    <LinkCustom to="/sobre-nosotros">Sobre Nosotros</LinkCustom>
                    <LinkCustom to="/web">Web</LinkCustom>
                </Links>
            </DivContainer>
        </FooterContainer>
    );
}
export default Footer;