import { useEffect, useState } from "react";
import styled from "styled-components";
import { ValidationError, useForm } from '@formspree/react';
import { Toaster, toast } from 'sonner';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

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
    height: 610px;
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
    s {
        font-size: 0.7em;
        color: #ff8282;
    }
    sup {
        font-size: 0.6em;
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
    width: 95%;
    margin-top: 120px;
    margin-bottom: 100px;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        text-align: center;
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
    span {
        font-size: 1.6em;
        color: #4bbaff;
    }
    strong {
        color: #ffffff;
        text-transform: uppercase;
    }
    @media (max-width: 768px) {
        width: 100%;
        border-bottom: 1px solid #333;
        padding-bottom: 20px;
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
    @media (max-width: 768px) {
        width: 100%;
    }
    flex-wrap: wrap;

`;

const CustomInput = styled(TextField)`
    margin: 10px 0;
    width: 100%;
    & label.Mui-focused {
        color: #ffffff;
    }
    & .MuiOutlinedInput-root {
        & fieldset {
            border-color: #ffffff;
        }
        &:hover fieldset {
            border-color: #ffffff;
        }
        &.Mui-focused fieldset {
            border-color: #ffffff;
        }
    }
    & .MuiInputBase-input {
        color: #ffffff;
    }
    & .MuiInputLabel-root {
        color: #ffffff;
    }
    & .MuiOutlinedInput-notchedOutline {
        border-color: #ffffff;
    }
    & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
        border-color: #ffffff;
    }
    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #ffffff;
    }
    & .MuiFormLabel-root {
        color: #ffffff;
    }
    & .MuiFormLabel-root.Mui-focused {
        color: #ffffff;
    }
    & .MuiOutlinedInput-multiline {
        padding: 0;
    }
    & .MuiOutlinedInput-multiline.MuiOutlinedInput-multiline {
        padding: 0;
    }
    & .MuiOutlinedInput-multiline {
        padding: 0;
    }
    & .MuiFormHelperText-root {
        color: #ffffff;
        margin-bottom: 5px;
        text-align: left;
    }
    & .MuiFormHelperText-contained {
        margin-bottom: 5px;
    }
    & .MuiFormHelperText-contained.Mui-error {
        color: #ff8282;
    }
    & .MuiFormHelperText-contained.Mui-focused {
        color: #ffffff;
    }
    & .MuiFormHelperText-contained.Mui-disabled {
        color: #ffffff;
    }

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 900px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    flex-wrap: wrap;
    gap: 20px;
`;

const FormTitle = styled.h2`
    font-size: 1.8em;
    text-align: center;
    width: 100%;
    font-weight: 600;
    max-width: 800px;
    text-align: center;
    text-wrap: balance;
    max-width: 800px;
`;
const SubTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 900px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    flex-wrap: wrap;
    p {
        font-size: 1.4em;
        color: #bdbdbd;
    }
    strong {
        color: #ffffff;
        text-transform: uppercase;
    }
`;

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 600px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    flex-wrap: wrap;
    gap: 20px;
`;



const Web = () => {

    const [plan, setPlan] = useState("");
    const [suscripcion, setSuscripcion] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [ state, handleSubmit ] = useForm("xrgnkevr");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    const handlePlan = (plan: string) => {
        setPlan(plan);
        if( plan === "personalizado") {
            toast.info("Nos pondremos en contacto contigo para personalizar tu plan.")
        } else {
            toast.success(`Plan ${plan} seleccionado con éxito!`);
        }
    }

    const handleSuscripcion = () => {
        if(!plan) {
            toast.error("Selecciona un plan antes de suscribirte");
            return;
        } 
        setSuscripcion(!suscripcion);
        if(suscripcion) {
            toast.error("Suscripción cancelada con éxito!");
        } else {
            toast.success("Suscripción realizada con éxito!");
        }
    }

    const handleName = (e: any) => {
        const value = e.target.value;
        setName(value);
        if( value === "" ) {
            setNameError("El nombre es requerido");
        } else if ( value.length < 3 ) {
            setNameError("El nombre debe tener al menos 3 caracteres");
        } else if ( value.length > 50 ) {
            setNameError("El nombre debe tener menos de 50 caracteres");
        } else {
            setNameError("");
        }
    }
    const handleEmail = (e: any) => {
        const value = e.target.value;
        setEmail(value);
        if( value == "") {
            setEmailError('El campo correo es requerido')
        } else if ( value.length < 3 ) {
            setEmailError('El campo correo debe tener al menos 3 caracteres')
        } else if ( value.length > 30 ) {
            setEmailError('El campo correo debe tener menos de 30 caracteres')
        } else if ( !value.includes('@') ) {
            setEmailError('El campo correo debe ser un correo valido')
        } else if ( !value.includes('.') ) {
            setEmailError('El campo correo debe ser un correo valido')
        } else {
            setEmailError('')
        }
    }
    const handleMessage = (e: any) => {
        const value = e.target.value;
        setMessage(value);
        if( value === "" ) {
            setMessageError("El mensaje es requerido");
        } else if ( value.length < 3 ) {
            setMessageError("El mensaje debe tener al menos 3 caracteres");
        } else if ( value.length > 500 ) {
            setMessageError("El mensaje debe tener menos de 50 caracteres");
        } else {
            setMessageError("");
        }
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if( plan === "" ) {
            toast.error("Selecciona un plan antes de enviar el mensaje");
            return;
        }

        if( name != "" && email != "" && message !== "" && plan !== "" ) {
            setName("");
            setEmail("");
            setMessage(""); 
            handleSubmit(e);
            toast.message("Mensaje enviado con éxito! Nos pondremos en contacto contigo lo antes posible.");
        } else if( state.errors) {
            if( name === "" ) {
                setNameError("El nombre es requerido");
                toast.error("El nombre es requerido");
            } else if ( email === "" ) {
                setEmailError("El correo es requerido");
                toast.error("El correo es requerido");
            } else if ( message === "" ) {
                setMessageError("El mensaje es requerido");
                toast.error("El mensaje es requerido");
            }
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        window.document.title = "oultra.dev | Desarrollo Web"
    }, [])

    return (
        <Main>
            <Header>Encuentra un plan para impulsar tus proyectos en desarrollo web.</Header>
            <PlansContainer>
            <Plan>
                <PlaneHeader>
                    <h2>Plan Esencial</h2>
                    <p>$2,499<sup>00</sup> MXN <s>$3,599<sup>00</sup></s></p>
                    <span>Sitio Web Básico</span>
                </PlaneHeader>

                <PlanBody>
                    <ul>
                        <li>Hosting y Dominio Incluidos</li>
                        <li>Certificado SSL</li>
                        <li>Rendimiento estandar</li>
                        <li>Diseño y Desarrollo Personalizado</li>
                        <li>2 correos empresariales</li>
                        <li>Landing Page de Presentación</li>
                        <li>Soporte por Correo Electrónico</li>
                    </ul>
                </PlanBody>
                <PlanFooter>
                    <button onClick={() => handlePlan("esencial")}>Seleccionar</button>
                </PlanFooter>
            </Plan>

            <Plan>
                <BurbujaPopular>
                    <p>Mas popular</p>
                </BurbujaPopular>
                <PlaneHeader>
                    <h2>Plan Avanzado</h2>
                    <p>$5,999<sup>00</sup> MXN <s>$7,499<sup>00</sup></s> </p>
                    <span>Sitio Web Estático</span>
                </PlaneHeader>

                <PlanBody>
                    <ul>
                        <li>Hosting y Dominio Incluidos</li>
                        <li>Certificado SSL</li>
                        <li>Mayor rendimiento</li>
                        <li>Optimizacion SEO</li>
                        <li>Google Analytics</li>
                        <li>Diseño y Desarrollo Personalizado</li>
                        <li>10 Correos Empresariales</li>
                        <li>Web Estática Personalizada (Inicio, Servicios, Nosotros, Contacto)</li>
                        <li>Soporte por Correo Electrónico y Chat</li>
                    </ul>
                </PlanBody>
                <PlanFooter>
                    <button onClick={() => handlePlan("avanzado")}>Seleccionar</button>
                </PlanFooter>
            </Plan>

            <Plan>
                <PlaneHeader>
                    <h2>Plan Profesional</h2>
                    <p>$9,999<sup>00</sup> MXN <s>$18,000<sup>00</sup></s></p>
                    <span>Sitio Web Avanzado</span>
                </PlaneHeader>

                <PlanBody>
                    <ul>
                        <li>Hosting y Dominio Incluidos</li>
                        <li>Certificado SSL</li>
                        <li>Rendimiento máximo</li>
                        <li>Optimizacion SEO con IA</li>
                        <li>Google Analytics</li>
                        <li>Diseño y Desarrollo Personalizado</li>
                        <li>Garantia del 99.9% de uptime</li>
                        <li>50 Correos Empresariales</li>
                        <li>Web Estática Personalizada (Inicio, Servicios, Nosotros, Contacto)</li>
                        <li>Soporte por Correo Electrónico, Chat y Llamada</li>
                        <li>Atencion 24/7</li>
                    </ul>
                </PlanBody>
                <PlanFooter>
                    <button onClick={() => handlePlan("profesional")}>Seleccionar</button>
                </PlanFooter>
            </Plan>

            <Plan>
                <PlaneHeader>
                    <h2>Plan Personalizado</h2>
                    <p>Contactanos</p>
                    <span>Sitio Web a Medida</span>
                </PlaneHeader>

                <PlanBody>
                    <ul>
                        <li>Incluye las caracteristicas de los anteriores paquetes</li>
                        <li>Correos Empresariales a la medida</li>
                        <li>Web Dinámica Adaptada a Tus Necesidades</li>
                        <li>Soporte por Correo Electrónico, Chat y Llamada</li>
                    </ul>
                </PlanBody>
                <PlanFooter>
                    <button onClick={() => handlePlan("personalizado")}>Seleccionar</button>
                </PlanFooter>
            </Plan>


            <Suscripcion>
                <SuscripcionLeft>
                    <h3>Oultra plus </h3>
                    <span>Solor por: { plan == "esencial" ? "$250.00 al mes" : plan == "avanzado" ? "$350.00 al mes" : plan == "profesional" ? "$450.00 al mes" : plan == "personalizado" ? "perzonalizado" : "Selecciona un plan" }</span>
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

            <Form onSubmit={onSubmit}>
                <FormTitle>
                    Mandanos correo por el paquete de tu interes y nos pondremos en contacto contigo.
                </FormTitle>
                <SubTitleContainer>
                    <p>Paquete seleccionado: <strong>{ plan ? plan : "Sin paquete seleccionado"   }</strong></p>
                    <p>Suscripcion: <strong>{ suscripcion ? "¡Suscripción activa!" : "No estás suscrito" }</strong></p>
                </SubTitleContainer>
                <InputsContainer>
                    <CustomInput
                        id="name"
                        label="Nombre"
                        variant="outlined"
                        autoComplete="off"
                        onChange={handleName}
                        required
                        helperText={nameError}
                        error={ nameError ? true : false }
                        value={name}
                        name="name"
                        type="text"
                    />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                    <CustomInput
                        id="email"
                        label="Correo"
                        variant="outlined"
                        autoComplete="off"
                        onChange={handleEmail}
                        required
                        helperText={emailError}
                        error={ emailError ? true : false }
                        value={email}
                        name="email"
                        type="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <CustomInput
                        id="message"
                        label="Mensaje"
                        variant="outlined"
                        autoComplete="off"
                        onChange={handleMessage}
                        required
                        helperText={messageError}
                        error={ messageError ? true : false }
                        value={message}
                        name="message"
                        type="text"
                        multiline
                        rows={4}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <CustomInput
                        id="plan"
                        label="Plan"
                        style={{display: "none"}}
                        variant="outlined"
                        autoComplete="off"
                        value={plan}
                        name="plan"
                        type="hidden"
                    />
                    <CustomInput
                        style={{display: "none"}}
                        id="suscripcion"
                        label="Suscripcion"
                        variant="outlined"
                        autoComplete="off"
                        value={suscripcion ? "Si" : "No"}
                        name="suscripcion"
                        type="hidden"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={state.submitting}
                    >
                        { state.submitting ? 'Enviando...' : 'Enviar'}
                    </Button>

                </InputsContainer>

            </Form>

            </PlansContainer>
            <Toaster position='bottom-center' richColors/>   
        </Main>
    );
}
export default Web;