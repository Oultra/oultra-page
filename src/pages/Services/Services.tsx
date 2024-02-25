import { useEffect } from "react";
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
    @media (max-width: 768px) {
        flex-direction: column;
        padding-bottom: 1rem;
        gap: 0.5rem;
    }
`;
const Service2 = styled.article`
    display: flex;
    flex-direction: row-reverse;
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
    @media (max-width: 768px) {
        flex-direction: column;
        padding-bottom: 1rem;
        gap: 0.5rem;
    }
`;
const ServiceImg2 = styled.div`
    width: 40%;
    object-fit: contain;
    img {
        border-radius: 0 8px 8px 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        min-height: 400px;
        max-height: 400px;
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 300px;
        img {
            border-radius: 8px 8px 0 0;
        }
    }
`;
const ServiceImg = styled.div`
    width: 40%;
    object-fit: contain;
    img {
        border-radius: 8px 0 0 8px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        min-height: 400px;
        max-height: 400px;

    }
    @media (max-width: 768px) {
        width: 100%;
        height: 300px;
        img {
            border-radius: 8px 8px 0 0;
        }
    }
`;
const ServiceText = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: white;
    }
    p {
        font-size: 1.0rem;
        font-weight: 400;
        margin-bottom: 1rem;
        color: rgba(255, 255, 255, 0.7);
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            font-size: 1.0rem;
            font-weight: 400;
        }
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Services = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
        window.document.title = "Oultra | Servicios"
    }, [])
   
  return (
    <ServiceCointainer>
      <VideoHeaderCointainer>
        <video src="/video.mp4" autoPlay muted loop > 
            Tu navegador no admite el elemento <code>video</code>.
        </video>
        <h1>Nuestros servicios</h1>
      </VideoHeaderCointainer>

      <ServicesContainer>

        <Service>
            <ServiceImg>
                <img src="/cctv.webp" alt="tecnologia" loading="lazy" />
            </ServiceImg>
            <ServiceText>
                <h2>Soluciones de Seguridad: Cámaras de Vigilancia</h2>
                <p>Asegure su hogar o negocio con nuestras avanzadas soluciones de seguridad.</p>
                <ul>
                    <li><strong>Cámaras de Vigilancia:</strong> Variedad de modelos para cubrir todas sus necesidades.</li>
                    <li><strong>Servidores y Grabadoras de Video NVR:</strong> Tecnología de última generación para almacenamiento seguro.</li>
                    <li><strong>Sistemas de Monitoreo y Gestión de Videos VMS:</strong> Controle y administre sus grabaciones de manera eficiente.</li>
                    <li><strong>Video Analítico:</strong> Funcionalidades inteligentes para una seguridad más proactiva.</li>
                </ul>
            </ServiceText>
        </Service>

        <Service2>
            <ServiceImg2>
                <img src="/audio.webp" alt="tecnologia" loading="lazy"/>
            </ServiceImg2>
            <ServiceText>
                <h2>Soluciones de Audio y Video</h2>
                <p>Mejore su experiencia audiovisual con nuestras soluciones avanzadas.</p>
                <ul>
                    <li><strong>Sistemas de Audio:</strong> Sumérjase en un sonido de alta calidad con nuestras opciones de audio premium.</li>
                    <li><strong>Cámaras de Video:</strong> Capture momentos con claridad y detalle utilizando nuestras cámaras de última generación.</li>
                    <li><strong>Grabadoras de Audio y Video:</strong> Guarde y reproduzca sus momentos importantes con equipos de grabación confiables.</li>
                    <li><strong>Sistemas de Transmisión en Vivo:</strong> Comparta eventos en tiempo real con soluciones de transmisión de video eficientes.</li>
                </ul>
            </ServiceText>
        </Service2>

        <Service>
            <ServiceImg>
                <img src="/redes.webp" alt="tecnologia" loading="lazy"/>
            </ServiceImg>
            <ServiceText>
                <h2>Soluciones de Redes</h2>
                <p>Conecte y optimice su entorno digital con nuestras soluciones de redes avanzadas.</p>
                <ul>
                    <li><strong>Router y Switches:</strong> Potencie la conectividad con dispositivos de alta velocidad y confiabilidad.</li>
                    <li><strong>Soluciones de Conectividad Inalámbrica:</strong> Manténgase conectado en todo momento con nuestras opciones Wi-Fi de última generación.</li>
                    <li><strong>Firewalls y Seguridad de Red:</strong> Proteja su información con nuestras soluciones de seguridad cibernética.</li>
                    <li><strong>Gestión de Redes:</strong> Administre eficientemente su infraestructura con nuestras herramientas de gestión de redes.</li>
                </ul>
            </ServiceText>
        </Service>

        <Service2>
            <ServiceImg2>
                <img src="/control.webp" alt="tecnologia" loading="lazy"/>
            </ServiceImg2>
            <ServiceText>
                <h2>Soluciones de Control de Acceso</h2>
                <p>Proteja su espacio y garantice la seguridad con nuestras avanzadas soluciones de control de acceso.</p>
                <ul>
                    <li><strong>Sistemas de Tarjetas de Acceso:</strong> Regule el ingreso a áreas restringidas con tecnología de tarjetas magnéticas o de proximidad.</li>
                    <li><strong>Biometría:</strong> Asegure la identificación con sistemas biométricos de huellas dactilares, reconocimiento facial o escaneo de retina.</li>
                    <li><strong>Integración con Sistemas de Seguridad:</strong> Coordine el control de acceso con sistemas de videovigilancia y alarmas para una protección integral.</li>
                    <li><strong>Software de Gestión de Acceso:</strong> Administre de manera eficiente los permisos y registros de acceso con nuestras herramientas de software especializado.</li>
                </ul>
            </ServiceText>
        </Service2>

        <Service>
            <ServiceImg>
                <img src="/admin.webp" alt="tecnologia" loading="lazy"/>
            </ServiceImg>
            <ServiceText>
                <h2>Servicios Administrados</h2>
                <p>Optimice la operación y seguridad de su negocio con nuestros servicios administrados especializados.</p>
                <ul>
                    <li><strong>Soporte Técnico 24/7:</strong> Garantizamos asistencia constante para resolver cualquier problema técnico, en cualquier momento.</li>
                    <li><strong>Monitorización Proactiva:</strong> Supervisamos y respondemos a posibles problemas antes de que afecten su operación, asegurando un funcionamiento continuo.</li>
                    <li><strong>Respaldo y Recuperación de Datos:</strong> Protegemos su información crítica con soluciones de respaldo seguras y planes de recuperación efectivos.</li>
                    <li><strong>Actualizaciones y Mantenimiento:</strong> Mantenemos sus sistemas actualizados y funcionando sin problemas para garantizar el rendimiento óptimo.</li>
                </ul>
            </ServiceText>
        </Service>

        <Service2>
            <ServiceImg2>
                <img src="/mantenimiento.webp" alt="tecnologia" loading="lazy"/>
            </ServiceImg2>
            <ServiceText>
                <h2>Planes de Mantenimiento</h2>
                <p>Asegure el rendimiento óptimo de sus sistemas con nuestros planes de mantenimiento adaptados a sus necesidades.</p>
                <ul>
                    <li><strong>Mantenimiento Preventivo:</strong> Programamos revisiones regulares para identificar y abordar posibles problemas antes de que afecten la operatividad.</li>
                    <li><strong>Actualizaciones y Parches:</strong> Mantenemos su infraestructura al día con las últimas actualizaciones y parches de seguridad para garantizar la estabilidad.</li>
                    <li><strong>Soporte Prioritario:</strong> Acceda a un soporte rápido y prioritario para resolver cualquier problema de manera eficiente y minimizar tiempos de inactividad.</li>
                    <li><strong>Informes Detallados:</strong> Proporcionamos informes periódicos detallados sobre el estado de sus sistemas y las actividades de mantenimiento realizadas.</li>
                </ul>
            </ServiceText>
        </Service2>


      </ServicesContainer>
    </ServiceCointainer>
  );
};

export default Services;
