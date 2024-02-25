import { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: justify;
    width: 100%;
    margin: 0 auto;
    h1 {
        margin-bottom: 20px;
    }
    p {
        margin-bottom: 10px;
    }
`;

const Header = styled.header`
    background-image: url('/fondo-nosotros.webp');
    width: 100%;
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-attachment: fixed;
    h1 {
        font-size: 2.5rem;
        color: white;
        text-align: center;
    }
`;

const Section = styled.section`
    max-width: 800px;
    margin: 0 auto;
    text-align: justify;
    p {
        margin-bottom: 10px;
    }
`;

const Firma = styled.p`
    text-align: right;
    font-size: 1.2rem;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #cfcfcf;
    span {
        font-weight: normal;
    }
`;





const SobreNosotros = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        window.document.title = "oultra.dev | Sobre Nosotros"
    }
    , [])

    return (
        <Container>  
          <Header>
            <h1>Sobre oultra.dev y su equipo.</h1>
          </Header>
      
          <Section>
            <p>Bienvenido a oultra.dev, tu socio tecnológico para soluciones innovadoras y de vanguardia. Nos enorgullece ser una empresa mexicana dedicada a impulsar el éxito de pequeños negocios a través de tecnologías de alta calidad y servicios especializados.</p>
            <p>Nuestra misión es proporcionar automatización empresarial, software de última generación, instalaciones de cámaras avanzadas y soluciones tecnológicas que impulsen la eficiencia y el crecimiento de tu negocio.</p>
            <p>En oultra.dev, nos destacamos por nuestro compromiso inquebrantable con la innovación. Somos un pequeño grupo de profesionales apasionados y expertos en diversas áreas tecnológicas, todos orgullosamente mexicanos. Trabajamos codo a codo contigo para entender tus necesidades y ofrecer soluciones personalizadas que superen tus expectativas.</p>
            <p>Ya sea que estés buscando mejorar la seguridad con nuestras avanzadas cámaras de vigilancia, implementar software personalizado o dar vida a tu presencia en línea con desarrollo web y soluciones de comercio electrónico, en oultra.dev estamos aquí para ayudarte a alcanzar tus objetivos.</p>
            <p>Gracias por elegirnos como tu socio tecnológico. Estamos emocionados de colaborar contigo y ser parte de tu éxito empresarial.</p>
      
            <Firma>
              Atentamente, <br />
              <span>El equipo de oultra.dev</span>
            </Firma>
          </Section>
        </Container>
      );
      
}
export default SobreNosotros;