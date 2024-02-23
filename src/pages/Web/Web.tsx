import { useState } from "react";
import styled from "styled-components";
/* import { ValidationError, useForm } from '@formspree/react';
import TextField from '@mui/material/TextField'; */
import { Toaster, toast } from 'sonner';

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const Header = styled.h1`
    font-size: 2.5em;
    text-align: center;
    width: 100%;
    font-weight: 600;
    max-width: 800px;
    text-align: center;
    text-wrap: balance;
    max-width: 800px;
`;

const PlansContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 50px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    max-width: 1600px;
    flex-wrap: wrap;
    gap: 20px;
`;
const Plan = styled.div`
    border: 1px solid red;
    padding: 40px;
    position: relative;
    width: 100%;
    border: 2px solid #333;
    border-radius: 12px;
    height: 510px;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    box-shadow: 0px 27px 29px -5px rgba(255, 255, 255, 0.04);
    animation: all fadeIn 0.1s ease-in-out;
    &:hover {
        scale: 1.01;
        box-shadow: 0px 27px 29px -5px rgba(83, 83, 83, 0.3);
    }
`;

const PlaneHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    h2 {
        font-size: 1.9em;
        margin-bottom: 10px;
        font-weight: 500;
    }
    p {
        font-size: 1.6em;
        margin-bottom: 10px;
        color: #bdbdbd;
        font-weight: 700;
    }
    span {
        font-size: 1.0em;
        color: #bdbdbd;
    }
`;
const PlanBody = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    ul {
        list-style: square outside;
        padding: 0;
        margin: 0;
        li {
            font-size: 1.0em;
            margin-bottom: 10px;
        }
    }
`;
const PlanFooter = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    button {
        padding: 10px 20px;
        font-size: 1.2em;
        background-color: #333;
        border: none;
        color: #fff;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
            background-color: #222;
        }
    }
`;

const BurbujaPopular = styled.div`
    position: absolute;
    top: -20px;
    left: 50%;
    right: 50%;
    background-color: #ffffff;
    color: #000000;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 1.1em;
    font-weight: 600;
    width: 110px;
    text-align: center;
    transform: translateX(-50%);
    z-index: 100;
`;

const Suscripcion = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 120px;
    margin-bottom: 100px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    flex-wrap: wrap;
    border-top: 1px solid #333;
    padding-top: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid #333;
`;
const SuscripcionLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    text-wrap: balance;
    h3 {
        font-size: 2.5em;
        font-weight: 600;
    }
    p {
        font-size: 1.5em;
        color: #bdbdbd;
    }
    ul {
        list-style: square outside;
        padding: 0;
        margin: 0;
        li {
            font-size: 1.2em;
            margin-bottom: 10px;
        }
    }
`;
const SuscripcionRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-align: center;
    width: 50%;
    text-wrap: balance;
    button {
        padding: 10px 20px;
        font-size: 1.2em;
        background-color: #333;
        border: none;
        color: #fff;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        max-width: 200px;
        animation: buttonRaindowShadow 1s infinite;
        &:hover {
            background-color: #222;
        }
    }
    p {
        font-size: 1.5em;
        color: #bdbdbd;
    }
    @keyframes buttonRainbowShadow {
        0% {
            box-shadow: 0px 0px 0px 0px rgb(0, 191, 255);
            filter: hue-rotate(0deg);
        }
        100% {
            box-shadow: 0px 0px 20px 10px rgba(255, 255, 255, 0.1);
            filter: hue-rotate(360deg);
            transform: rotate(360deg);
        }
    }
`;



const Web = () => {

    const [plan, setPlan] = useState("");
    const [suscripcion, setSuscripcion] = useState(false);

    const handlePlan = (plan: string) => {
        setPlan(plan);
        if( plan === "personalizado") {
            toast.info("Nos pondremos en contacto contigo para personalizar tu plan.")
        } else {
            toast.success(`Plan ${plan} seleccionado con éxito!`);
        }
    }

    const handleSuscripcion = () => {
        setSuscripcion(!suscripcion);
        if(suscripcion) {
            toast.error("Suscripción cancelada con éxito!");
        } else {
            toast.success("Suscripción realizada con éxito!");
        }
    }


    return (
        <Main>
            <Header>Encuentra un plan para impulsar tus proyectos en desarrollo web.</Header>
            <PlansContainer>
            <Plan>
                <PlaneHeader>
                    <h2>Plan Esencial</h2>
                    <p>$2,499.00 MXN</p>
                    <span>Sitio Web Básico</span>
                </PlaneHeader>

                <PlanBody>
                    <ul>
                        <li>Hosting y Dominio Incluidos</li>
                        <li>Diseño y Desarrollo Personalizado</li>
                        <li>2 Correo Empresarial</li>
                        <li>Landing Page de Presentación</li>
                        <li>Soporte por Correo Electrónico</li>
                    </ul>
                </PlanBody>
                <PlanFooter>
                    <button onClick={() => handlePlan("esencial")}>Contratar</button>
                </PlanFooter>
            </Plan>

            <Plan>
                <BurbujaPopular>
                    <p>Mas popular</p>
                </BurbujaPopular>
                <PlaneHeader>
                    <h2>Plan Avanzado</h2>
                    <p>$5,999.00 MXN</p>
                    <span>Sitio Web Estático</span>
                </PlaneHeader>

                <PlanBody>
                    <ul>
                        <li>Hosting y Dominio Incluidos</li>
                        <li>Diseño y Desarrollo Personalizado</li>
                        <li>10 Correos Empresariales</li>
                        <li>Web Estática Personalizada (Inicio, Servicios, Nosotros, Contacto)</li>
                        <li>Soporte por Correo Electrónico y Chat</li>
                    </ul>
                </PlanBody>
                <PlanFooter>
                    <button onClick={() => handlePlan("avanzado")}>Contratar</button>
                </PlanFooter>
            </Plan>

            <Plan>
                <PlaneHeader>
                    <h2>Plan Profesional</h2>
                    <p>$9,999.00 MXN</p>
                    <span>Sitio Web Avanzado</span>
                </PlaneHeader>

                <PlanBody>
                    <ul>
                        <li>Hosting y Dominio Incluidos</li>
                        <li>Diseño y Desarrollo Personalizado</li>
                        <li>50 Correos Empresariales</li>
                        <li>Web Estática Personalizada (Inicio, Servicios, Nosotros, Contacto)</li>
                        <li>Soporte por Correo Electrónico, Chat y Llamada</li>
                    </ul>
                </PlanBody>
                <PlanFooter>
                    <button onClick={() => handlePlan("profesional")}>Contratar</button>
                </PlanFooter>
            </Plan>

            <Plan>
                <PlaneHeader>
                    <h2>Plan Personalizado</h2>
                    <p>Contactar</p>
                    <span>Sitio Web a Medida</span>
                </PlaneHeader>

                <PlanBody>
                    <ul>
                        <li>Hosting y Dominio Personalizados</li>
                        <li>Diseño y Desarrollo Totalmente Personalizado</li>
                        <li>Correos Empresariales a la medida</li>
                        <li>Web Dinámica Adaptada a Tus Necesidades</li>
                        <li>Soporte por Correo Electrónico, Chat y Llamada</li>
                    </ul>
                </PlanBody>
                <PlanFooter>
                    <button onClick={() => handlePlan("personalizado")}>Contactarnos</button>
                </PlanFooter>
            </Plan>


            <Suscripcion>
                <SuscripcionLeft>
                    <h3>Oultra plus</h3>
                    <p>Únete a nuestra suscripción mensual y disfruta de beneficios exclusivos:</p>
                    <ul>
                        <li><strong>Flexibilidad Total:</strong> Personaliza tu plan según tus preferencias.</li>
                        <li><strong>Descuento en Renovación:</strong> Renueva tu dominio con atractivos descuentos.</li>
                        <li><strong>Soporte Prioritario:</strong> Accede a asistencia especializada de manera prioritaria.</li>
                    </ul>
                    
                    <p>Destaca en línea con un sitio web que refleje tu visión. ¿Listo para dar el siguiente paso?</p>

                </SuscripcionLeft>
                <SuscripcionRight>
                    <p>Contáctanos ahora para suscribirte y aprovechar al máximo tu presencia en línea.</p>
                    <button onClick={() => handleSuscripcion()} >
                        { plan ? suscripcion ? "Cancelar Suscripción" : "Suscribirme" : "Selecciona un plan"}
                    </button>
                </SuscripcionRight>
            </Suscripcion>

            <form>

            </form>

            <Toaster position='bottom-center' richColors/>   
            </PlansContainer>
        </Main>
    );
}
export default Web;