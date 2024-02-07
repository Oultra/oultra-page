import styled from "styled-components";
import { Button } from '@mui/material';

const HomeContainer = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    background-image: url('/fondo-home.webp');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
`;

const Title = styled.h1`
    font-size: 5.0rem;
    font-weight: 400;
    text-align: center;
    letter-spacing: 2px;
    width: fit-content;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 1rem;
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem 2rem;

`;
const Subtitle = styled.p`
    width: fit-content;
    max-width: 900px;
    font-size: 2.1rem;
    font-weight: 300;
    text-align: center;
    text-wrap: balance;
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-bottom: 5rem;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem 2rem;
`;

const ButtonPrimary = styled.button`
    background-color: #f8f9fa;
    color: #000;
    padding: 0.5rem 2rem;
    font-size: 1.2rem;
    font-weight: 500;
    border-radius: 15px;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #000;
        color: #f8f9fa;
        transition: all 0.3s ease-in-out;
    }
`;

const Home = () => {
    return (
        <HomeContainer>
            <Title>Bienvendio a oultra</Title>
            <Subtitle>Desde software innovador hasta páginas web cautivadoras y eficientes instalaciones, Oultra es tu socio ideal. Libera todo el potencial de tu empresa y experimenta el poder de una solución integral diseñada para impulsarte al éxito.</Subtitle>
            <ButtonPrimary>Incia tu proyecto</ButtonPrimary>
        </HomeContainer>
    )
}

export default Home