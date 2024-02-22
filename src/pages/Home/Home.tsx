import { Link } from "react-router-dom";
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
    @media (max-width: 768px) {
        font-size: 3.5rem;
    }
    @media (max-width: 480px) {
        font-size: 2.5rem;
    }
    @media (max-width: 320px) {
        font-size: 2rem;
    }

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
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
    @media (max-width: 480px) {
        font-size: 1.3rem;
    }
    @media (max-width: 320px) {
        font-size: 1.1rem;
    }
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
    @media (max-width: 768px) {
        padding: 0.8rem 2.2rem;
        font-size: 1.3rem;
    }
    @media (max-width: 480px) {
        padding: 0.6rem 2rem;
        font-size: 1.1rem;
    }
    @media (max-width: 320px) {
        padding: 0.5rem 1.5rem;
        font-size: 1rem;
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
    @media (max-width: 768px) {
        gap: 1rem;
    }
    @media (max-width: 480px) {
        gap: 0.5rem;
    }
    @media (max-width: 320px) {
        gap: 0.3rem;
    }
`;
const FirstServices = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        gap: 0.5rem;
    }
    @media (max-width: 480px) {
        gap: 0.3rem;
    }
    @media (max-width: 320px) {
        gap: 0.2rem;
    }
`;
const ServiceCard1 = styled.div`
    flex-grow: 1;
    height: 300px;
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
        @media (max-width: 768px) {
            height: 40px;
        }
        @media (max-width: 480px) {
            height: 30px;
        }
        @media (max-width: 320px) {
            height: 20px;
        }
    }
    h2 {
        font-size: 2.5rem;
        font-weight: 500;
        @media (max-width: 768px) {
            font-size: 2rem;
        }
        @media (max-width: 480px) {
            font-size: 1.5rem;
        }
        @media (max-width: 320px) {
            font-size: 1.3rem;
        }
    }
    p {
        font-size: 1.5rem;
        font-weight: 300;
        width: 90%;
        text-wrap: balance;
        text-align: center;
        @media (max-width: 768px) {
            font-size: 1.3rem;
        }
        @media (max-width: 480px) {
            font-size: 1.1rem;
        }
        @media (max-width: 320px) {
            font-size: 1rem;
        }
    }
    @media (max-width: 768px) {
        height: 250px;
    }
    @media (max-width: 480px) {
        height: 200px;
    }
    @media (max-width: 320px) {
        height: 150px;
    }
`;
const ServiceCard2 = styled.div`
    flex-grow: 2;
    height: 300px;
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
        text-align: center;
        align-self: flex-start;
            img {
            width: 100%;
            height: 100%;
            filter: invert(1);
        }
        @media (max-width: 768px) {
            height: 40px;
        }
        @media (max-width: 480px) {
            height: 30px;
        }
        @media (max-width: 320px) {
            height: 20px;
        }

    }
    h2 {
        font-size: 2.5rem;
        font-weight: 500;
        text-align: center;
        @media (max-width: 768px) {
            font-size: 2rem;
        }
        @media (max-width: 480px) {
            font-size: 1.5rem;
        }
        @media (max-width: 320px) {
            font-size: 1.3rem;
        }

    }
    p {
        font-size: 1.5rem;
        font-weight: 300;
        width: 90%;
        text-wrap: balance;
        text-align: center;
        @media (max-width: 768px) {
            font-size: 1.3rem;
        }
        @media (max-width: 480px) {
            font-size: 1.1rem;
        }
        @media (max-width: 320px) {
            font-size: 1rem;
        }

    }
    @media (max-width: 768px) {
        height: 250px;
    }
    @media (max-width: 480px) {
        height: 200px;
    }
    @media (max-width: 320px) {
        height: 150px;
    }


`;
/* const ButtonSecondary = styled.button`
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
    @media (max-width: 768px) {
        padding: 6px 8px;
        font-size: 1.1rem;
    }
    @media (max-width: 480px) {
        padding: 4px 6px;
        font-size: 0.9rem;
    }
    @media (max-width: 320px) {
        padding: 3px 5px;
        font-size: 0.7rem;
    }

`; */

const ButtonTertiary = styled(Link)`
    background-color: #f8f9fa;
    color: #000;
    font-size: 1.6rem;
    font-weight: 500;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    padding: 10px 15px;
    cursor: pointer;
    border: 2px solid #f8f9fa;
    margin-top: 4rem;
    margin-bottom: 4rem;
    text-decoration: none;
    &:hover {
        background-color: rgba(0, 0, 0, 0.848);
        backdrop-filter: blur(5px);
        color: #f8f9fa;
        transition: all 0.3s ease-in-out;
        border: 2px solid #f8f9fa;
    }
    @media (max-width: 768px) {
        padding: 8px 12px;
        font-size: 1.3rem;
    }
    @media (max-width: 480px) {
        padding: 6px 10px;
        font-size: 1.1rem;
    }
    @media (max-width: 320px) {
        padding: 5px 8px;
        font-size: 0.9rem;
    }

`;

const AboutUs = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem 0;
    width: 95%;
    max-width: 1500px;
    margin: 0 auto;
    margin-bottom: 5rem;
    margin-top: 5rem;
    text-wrap: balance;
    flex-wrap: wrap;
    text-align: center;
    @media (max-width: 768px) {
        gap: 1rem;
    }
    @media (max-width: 480px) {
        gap: 0.5rem;
    }
    @media (max-width: 320px) {
        gap: 0.3rem;
    }
    
`;
const AboutUsImg = styled.div`
    flex-wrap: 1;
    height: 100%;
    max-width: 500px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const AboutUsText = styled.div`
    flex-wrap: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    max-width: 500px;
    h2 {
        font-size: 3.5rem;
        font-weight: 500;
        @media (max-width: 768px) {
            font-size: 3rem;
        }
        @media (max-width: 480px) {
            font-size: 2.5rem;
        }
        @media (max-width: 320px) {
            font-size: 2rem;
        }
    }
    p {
        font-size: 1.6rem;
        font-weight: 300;
        text-align: center;
        
        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
        @media (max-width: 480px) {
            font-size: 1.3rem;
        }
        @media (max-width: 320px) {
            font-size: 1.1rem;
        }
    }
`;

const TechStack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0;
    width: 95%;
    max-width: 1500px;
    margin: 0 auto;
    margin-bottom: 5rem;
    margin-top: 5rem;
    text-wrap: balance;
    flex-wrap: wrap;
    text-align: center;
    @media (max-width: 768px) {
        gap: 1rem;
    }
    @media (max-width: 480px) {
        gap: 0.5rem;
    }
    @media (max-width: 320px) {
        gap: 0.3rem;
    }
    h2 {
        font-size: 2.5rem;
        font-weight: 500;
        @media (max-width: 768px) {
            font-size: 2rem;
        }
        @media (max-width: 480px) {
            font-size: 1.5rem;
        }
        @media (max-width: 320px) {
            font-size: 1.3rem;
        }
    }
    p {
        font-size: 1.6rem;
        font-weight: 300;
        text-align: center;
        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
        @media (max-width: 480px) {
            font-size: 1.3rem;
        }
        @media (max-width: 320px) {
            font-size: 1.1rem;
        }
    }
`;
const TechContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        gap: 1rem;
    }
    @media (max-width: 480px) {
        gap: 0.5rem;
    }
    @media (max-width: 320px) {
        gap: 0.3rem;
    }
`;

const TechStackCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    min-height: 200px;
    min-width: 200px;
    max-height: 200px;
    max-width: 200px;
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        min-width: 100px;
        max-width: 100px;
        min-height: 100px;
        max-height: 100px;
    }
    h3 {
        font-size: 2.0rem;
        font-weight: 500;
        @media (max-width: 768px) {
            font-size: 2rem;
        }
        @media (max-width: 480px) {
            font-size: 1.5rem;
        }
        @media (max-width: 320px) {
            font-size: 1.3rem;
        }
    }
    @media (max-width: 768px) {
        padding: 0.8rem;
    }
    @media (max-width: 480px) {
        padding: 0.6rem;
    }
    @media (max-width: 320px) {
        padding: 0.5rem;
    }
`;

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem 0;
    width: 95%;
    max-width: 1500px;
    margin: 0 auto;
    margin-bottom: 5rem;
    margin-top: 5rem;
    text-wrap: balance;
    flex-wrap: wrap;
    text-align: center;
    @media (max-width: 768px) {
        gap: 1rem;
    }
    @media (max-width: 480px) {
        gap: 0.5rem;
    }
    @media (max-width: 320px) {
        gap: 0.3rem;
    }
    p {
        font-size: 2.1rem;
        font-weight: 300;
        text-align: center;
        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
        @media (max-width: 480px) {
            font-size: 1.3rem;
        }
        @media (max-width: 320px) {
            font-size: 1.1rem;
        }
    }
`;

const ContactButton = styled(Link)`
    background-color: #f8f9fa;
    color: #000;
    font-size: 1.6rem;
    font-weight: 500;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    padding: 10px 15px;
    cursor: pointer;
    border: 2px solid #f8f9fa;
    margin-top: 4rem;
    margin-bottom: 4rem;
    text-decoration: none;
    &:hover {
        background-color: rgba(0, 0, 0, 0.848);
        backdrop-filter: blur(5px);
        color: #f8f9fa;
        transition: all 0.3s ease-in-out;
        border: 2px solid #f8f9fa;
    }
    @media (max-width: 768px) {
        padding: 8px 12px;
        font-size: 1.3rem;
    }
    @media (max-width: 480px) {
        padding: 6px 10px;
        font-size: 1.1rem;
    }
    @media (max-width: 320px) {
        padding: 5px 8px;
        font-size: 0.9rem;
    }

`;



const Home = () => {
    return (
        <>
        <HomeContainer>
            <Title>oultra</Title>
            <Subtitle>Desde software innovador hasta páginas web cautivadoras y eficientes instalaciones, Oultra es tu socio ideal. Libera todo el potencial de tu empresa y experimenta el poder de una solución integral diseñada para impulsarte al éxito.</Subtitle>
            <ButtonPrimary>Incia tu proyecto</ButtonPrimary>
        </HomeContainer>

        <AboutUs>
            <AboutUsImg>
                <img src="/us.webp" loading="lazy" alt="oultra"/>
            </AboutUsImg>
            <AboutUsText>
                <h2>Conoce a oultra</h2>
                <p>
                    Oultra es una empresa de desarrollo de software y soluciones tecnológicas que ofrece servicios de desarrollo de software, diseño web, soluciones de seguridad y domótica. Nuestro equipo de expertos está comprometido con la excelencia y la innovación, y se esfuerza por brindar soluciones tecnológicas de vanguardia que transformarán tu empresa.
                    Con cede en Guadalajara, Jalisco, Mexico.
                </p>
            </AboutUsText>
        </AboutUs>
        <Services>
            <FirstServices>
                <ServiceCard1>
                    <div>
                        <img src="/svg/web-page.svg" loading="lazy" alt="Desarrollo de paginas web"/>
                    </div>
                    <h2>Paginas web</h2>
                    <p>Diseñamos y desarrollamos páginas web eficientes, accesibles y responsivas.</p>
                    {/* <ButtonSecondary>Ver mas</ButtonSecondary> */}
                </ServiceCard1>
                <ServiceCard1>
                    <div>
                        <img src="/svg/surveillance.svg" loading="lazy" alt="CCTV" />
                    </div>
                    <h2>CCTV</h2>
                    <p>Implementamos sistemas de autenticación seguros y eficientes.</p>
                    {/* <ButtonSecondary>Ver mas</ButtonSecondary> */}
                </ServiceCard1>
                <ServiceCard2>
                    <div>
                        <img src="/svg/program.svg" loading="lazy" alt="Desarrollo de software" />
                    </div>
                    <h2>Desarrollo de Software perzonalizado</h2>
                    <p>Desarrollamos software a medida de tus necesidades.</p>
                    {/* <ButtonSecondary>Ver mas</ButtonSecondary> */}
                </ServiceCard2>
            </FirstServices>
            <FirstServices>
                <ServiceCard1>
                    <div>
                        <img src="/svg/security.svg" loading="lazy" alt="Seguridad" />
                    </div>
                    <h2>Servicios de Seguridad</h2>
                    <p>Ofrecemos servicios en biométricos, sensores, etc.</p>
                    {/* <ButtonSecondary>Ver mas</ButtonSecondary> */}
                </ServiceCard1>
                <ServiceCard1>
                    <div>
                        <img src="/svg/solutions.svg" loading="lazy" alt="Soluciones" />
                    </div>
                    <h2>Soluciones</h2>
                    <p>Soluciones personalizadas para hogares y negocios.</p>
                    {/* <ButtonSecondary>Ver mas</ButtonSecondary> */}
                </ServiceCard1>
                <ServiceCard2>
                    <div>
                        <img src="/svg/smart-house.svg" loading="lazy" alt="Smart House" />
                    </div>
                    <h2>Domótica</h2>
                    <p>Integración de sistemas para la automatización inteligente del hogar.</p>
                    {/* <ButtonSecondary>Ver mas</ButtonSecondary> */}
                </ServiceCard2>
            </FirstServices>


            <ButtonTertiary to="/servicios">
                Ver todos los servicios 
            </ButtonTertiary>

            <TechStack>
                <h2>Implementamos las tecnologías más avanzadas para garantizar soluciones de vanguardia.</h2>
                <p>Nuestra dedicación a la excelencia se refleja en la elección de las mejores tecnologías para ofrecerte lo mejor.</p>

                <TechContainer>
                    <TechStackCard>   
                        <div>
                            <img src="tech/react.svg" loading="lazy" alt="React"/>
                            <h3>React</h3>
                        </div>
                    </TechStackCard>
                    <TechStackCard>   
                        <div>
                            <img src="tech/aws.svg" loading="lazy" alt="Aws"/>
                            <h3>AWS</h3>
                        </div>
                    </TechStackCard>
                    <TechStackCard>   
                        <div>
                            <img src="tech/docker.svg" loading="lazy" alt="Docker"/>
                            <h3>Docker</h3>
                        </div>
                    </TechStackCard>
                    <TechStackCard>   
                        <div>
                            <img src="tech/typescript.svg" loading="lazy" alt="Typescript"/>
                            <h3>Typescript</h3>
                        </div>
                    </TechStackCard>
                    <TechStackCard>   
                        <div>
                            <img src="tech/vercel.svg" loading="lazy" alt="Vercel"/>
                            <h3>Vercel</h3>
                        </div>
                    </TechStackCard>
                    <TechStackCard>   
                        <div>
                            <img src="tech/shopify.svg" loading="lazy" alt="Shopify"/>
                            <h3>Shopify</h3>
                        </div>
                    </TechStackCard>
                </TechContainer>
            </TechStack>


            <ContactContainer>
                <p>¡Haz que suceda! Presiona el botón de contacto y déjanos guiar el camino hacia la solución que necesitas. ¡Estamos aquí para ayudarte!</p>
                <ContactButton to="/contacto">Contactanos</ContactButton>
            </ContactContainer>

        </Services>
        </>

    )
}

export default Home