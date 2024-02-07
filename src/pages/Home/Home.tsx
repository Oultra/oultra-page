import styled from "styled-components";

const HomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 4.0rem;
    font-weight: 400;
    text-align: center;
    letter-spacing: 2px;
`;
const Subtitle = styled.p`
    font-size: 3.0rem;
    font-weight: 300;
    text-align: center;
    letter-spacing: 1px;
`;

const Home = () => {
    return (
        <HomeContainer>
            <Title>Bienvendio a oultra</Title>
            <Subtitle>Soluciones en Software e Instalaciones</Subtitle>
        </HomeContainer>
    )
}

export default Home