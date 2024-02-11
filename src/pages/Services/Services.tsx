import styled from "styled-components";

const ServiceCointainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    text-align: center;
`;

const VideoHeaderCointainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    object-fit: cover; 
    height: 60vh;
    max-height: 700px;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    h1 {
        position: absolute;
        margin: auto;
        color: white;
        font-size: 3rem;
        font-weight: 700;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        transform: translateY(-50%);
        top: 50%;
    }
`;
const ServicesContainer = styled.main `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
`  
const Service = styled.article`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    padding: 5px;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-color: rgb(1,5,8);
`;
const ServiceImg = styled.div`
    width: 40%;
    object-fit: contain;
    img {
        border-radius: 8px 0 0 8px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const ServiceText = styled.div`
    width: 60%;
    h2 {
        font-size: 2rem;
        font-weight: 700;
    }
    p {
        font-size: 1.5rem;
        font-weight: 400;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            font-size: 1.2rem;
            font-weight: 400;
        }
    }
`;



const Services = () => {
  

  return (
    <ServiceCointainer>
      <VideoHeaderCointainer>
        <video src="/public/video.mp4" autoPlay muted loop> 
            Tu navegador no admite el elemento <code>video</code>.
        </video>
        <h1>Nuestros servicios</h1>
      </VideoHeaderCointainer>

      <ServicesContainer>
        <Service>
            <ServiceImg>
                <img src="https://images.pexels.com/photos/1135453/pexels-photo-1135453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="tecnologia" />
            </ServiceImg>
            <ServiceText>
                <h2>Camaras de seguridad</h2>
                <p>Proteja su hogar o negocio con nuestros sistemas de seguridad.</p>
                <ul>
                    <li>Camaras de seguridad</li>
                    <li>Servidores y Grabadoras de video NVR</li>
                    <li>Sistemas de monitore y de gestion de videos VMS</li>
                    <li>Video Analitico</li>
                </ul>
            </ServiceText>

        </Service>
      </ServicesContainer>
    </ServiceCointainer>
  );
};

export default Services;
