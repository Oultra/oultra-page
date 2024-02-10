import styled from "styled-components";

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
    background-color: rgba(0, 0, 0, 0.848);
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
    background-color: rgba(0, 0, 0, 0.848);
    padding: 1rem 2rem;
`;

const ButtonPrimary = styled.button`
    background-color: #f8f9fa;
    color: #000;
    padding: 1rem 2.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 2px solid #f8f9fa;
    &:hover {
        background-color: rgba(0, 0, 0, 0.848);
        backdrop-filter: blur(5px);
        color: #f8f9fa;
        transition: all 0.3s ease-in-out;
        border: 2px solid #f8f9fa;
    }
`;
const Services = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem 0;
    width: 95%;
    max-width: 1500px;
    margin: 0 auto;
`;
const FirstServices = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
`;
const ServiceCard1 = styled.div`
    flex-grow: 1;
    height: 350px;
    background-color: #010508;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    div {
        width: 100%;
        height: 60px;
        object-fit: cover;
        align-self: flex-start;
            img {
            width: 100%;
            height: 100%;
            filter: invert(1);
        }
    }
    h2 {
        font-size: 2.5rem;
        font-weight: 500;
    }
    p {
        font-size: 1.5rem;
        font-weight: 300;
    }
`;
const ServiceCard2 = styled.div`
    flex-grow: 2;
    height: 350px;
    background-color: #010508;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    div {
        width: 100%;
        height: 60px;
        object-fit: cover;
        align-self: flex-start;
            img {
            width: 100%;
            height: 100%;
            filter: invert(1);
        }
    }
    h2 {
        font-size: 2.5rem;
        font-weight: 500;
    }
    p {
        font-size: 1.5rem;
        font-weight: 300;
    }

`;
const ButtonSecondary = styled.button`
    background-color: #f8f9fa;
    color: #000;
    font-size: 1.3rem;
    font-weight: 500;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    padding: 8px 10px;
    cursor: pointer;
    border: 2px solid #f8f9fa;
    &:hover {
        background-color: rgba(0, 0, 0, 0.848);
        backdrop-filter: blur(5px);
        color: #f8f9fa;
        transition: all 0.3s ease-in-out;
        border: 2px solid #f8f9fa;
    }
`;


const Home = () => {
    return (
        <>
        <HomeContainer>
            <Title>Bienvendio a oultra</Title>
            <Subtitle>Desde software innovador hasta páginas web cautivadoras y eficientes instalaciones, Oultra es tu socio ideal. Libera todo el potencial de tu empresa y experimenta el poder de una solución integral diseñada para impulsarte al éxito.</Subtitle>
            <ButtonPrimary>Incia tu proyecto</ButtonPrimary>
        </HomeContainer>
        <Services>
            <FirstServices>
                <ServiceCard1>
                    <div>
                        <img src="/svg/web-page.svg" />
                    </div>
                    <h2>Paginas web</h2>
                    <p>Desarrollamos y diseñamos paginas web eficientes, accesibles y responsivas </p>
                    <ButtonSecondary>Ver mas</ButtonSecondary>
                </ServiceCard1>
                <ServiceCard1>
                    <div>
                        <img src="/svg/surveillance.svg" />
                    </div>
                    <h2>CCTV</h2>
                    <p>Implementamos sistemas de autentificacion seguros y eficientes</p>
                    <ButtonSecondary>Ver mas</ButtonSecondary>
                </ServiceCard1>
                <ServiceCard2>
                    <div>
                        <img src="/svg/program.svg" />
                    </div>
                    <h2>Software</h2>
                    <p>Desarrollamos software a la medida de tus necesidades</p>
                    <ButtonSecondary>Ver mas</ButtonSecondary>
                </ServiceCard2>
            </FirstServices>
        </Services>
        </>

    )
}

export default Home