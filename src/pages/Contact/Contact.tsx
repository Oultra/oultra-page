import { ValidationError, useForm } from '@formspree/react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';
import styled from 'styled-components';

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-top: 20px;
    color: #ffffff;
    & h1 {
        font-size: 2.5rem;
    }
    & p {
        font-size: 1.2rem;
        text-align: center;
        max-width: 800px;
        text-wrap: balance;
    }
    & a {
        color: #ffffff;
        text-decoration: none;
        font-weight: bold;
    }
`

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 0;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    margin-top: 20px;
`

const CustomInput = styled(TextField)`
    margin: 10px 0;
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

`


const Contact = () => {

    // sate
    const [ name, setName ] = useState('')
    const [ surname, setSurname ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ company, setCompany ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ state, handleSubmit ] = useForm("xpzvdvnb");

    const [ nameError, setNameError ] = useState("")
    const [ surnameError, setSurnameError ] = useState("")
    const [ emailError, setEmailError ] = useState("")
    const [ companyError, setCompanyError ] = useState("")
    const [ phoneError, setPhoneError ] = useState("")
    const [ messageError, setMessageError ] = useState("")

    const handleName  = (e: any) => {
        const value = e.target.value
        setName(value)
        if( value == "") {
            setNameError('El campo nombre es requerido')
        } else if ( value.length < 3 ) {
            setNameError('El campo nombre debe tener al menos 3 caracteres')
        } else if ( value.length > 30 ) {
            setNameError('El campo nombre debe tener menos de 30 caracteres')
        } else {
            setNameError('')
        }
    }
    const handleSurname  = (e: any) => {
        const value = e.target.value
        setSurname(value)
        if( value == "") {
            setSurnameError('El campo apellido es requerido')
        } else if ( value.length < 3 ) {
            setSurnameError('El campo apellido debe tener al menos 3 caracteres')
        } else if ( value.length > 30 ) {
            setSurnameError('El campo apellido debe tener menos de 30 caracteres')
        } else {
            setSurnameError('')
        }
    }
    const handleEmail  = (e: any) => {
        const value = e.target.value
        setEmail(value)
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
    const handleCompany  = (e: any) => {
        const value = e.target.value;
        setCompany(value)
        if( value < 50 ) {
            setCompanyError('El campo empresa debe tener menos de 50 caracteres')
        }  else {
            setCompanyError('')
        }
    }
    const handlePhone  = (e: any) => {
        const value = e.target.value;
        setPhone(value)
        if( value < 15 ) {
            setPhoneError('El campo telefono debe tener menos de 15 caracteres')
        } else {
            setPhoneError('')
        }
    }
    const handleMessage  = (e: any) => {
        const value = e.target.value;
        setMessage(value)
        if( value.length > 500 ) {
            setMessageError('El campo mensaje debe tener menos de 500 caracteres')
        }  else {
            setMessageError('')
        }
    }


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if ( name != "" && surname != "" && email != "" && message != "") {
            setName("");
            setSurname("");
            setEmail("");
            setCompany("");
            setPhone("");
            setMessage("");
            handleSubmit(e);
            /* console.log(e)
            console.log(state)
            console.log(state.succeeded) */
            toast.success('Mensaje enviado con exito');
        } else if ( state.errors ) {
            if ( name == "" ) {
                setNameError('El campo nombre es requerido')
                toast.error('El campo nombre es requerido');
            } else if ( surname == "" ) {
                setSurnameError('El campo apellido es requerido')
                toast.error('El campo apellido es requerido');
            } else if ( email == "" ) {
                setEmailError('El campo correo es requerido')
                toast.error('El campo correo es requerido');
            } else if ( message == "" ) {
                setMessageError('El campo mensaje es requerido')
                toast.error('El campo mensaje es requerido');
            }
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        window.document.title = "oultra.dev | Contacto"
    }, [])

    return (

        <form onSubmit={onSubmit}>
            <ContactContainer>
                <h1>Contacta con Nosotros</h1>
                <p>Estamos aquí para brindarte la asistencia que necesitas. Completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>
                <p>Envianos un correo: <a href='mailto:contacto@oultra.dev' >contacto@oultra.dev</a></p>

                <InputsContainer>
                    <CustomInput 
                        id="name"
                        label="Nombre"
                        variant='outlined'
                        autoComplete='off'
                        onChange={handleName}
                        required
                        helperText={nameError}
                        error={nameError ? true : false}
                        value={name}
                        name='name'
                        type='text'
                    />
                    <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />
                    <CustomInput
                        id="surname"
                        label="Apellido"
                        variant='outlined'
                        autoComplete='off'
                        onChange={handleSurname}
                        required
                        helperText={surnameError}
                        error={surnameError ? true : false}
                        value={surname}
                        name='surname'
                    />
                    <ValidationError
                        prefix="Surname"
                        field="surname"
                        errors={state.errors}
                    />
                    <CustomInput
                        id="email"
                        label="Correo"
                        variant='outlined'
                        autoComplete='off'
                        onChange={handleEmail}
                        required
                        helperText={emailError}
                        error={emailError ? true : false}
                        value={email}
                        name='email'
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <CustomInput
                        id="company"
                        label="Empresa"
                        variant='outlined'
                        autoComplete='off'
                        onChange={handleCompany}
                        helperText={companyError}
                        error={companyError ? true : false}
                        value={company}
                        name='company'
                    />
                    <ValidationError
                        prefix="Company"
                        field="company"
                        errors={state.errors}
                    />
                    <CustomInput
                        id="phone"
                        label="Teléfono"
                        variant='outlined'
                        autoComplete='off'
                        onChange={handlePhone}
                        helperText={phoneError}
                        error={phoneError ? true : false}
                        value={phone}
                        name='phone'
                    />
                    <ValidationError
                        prefix="Phone"
                        field="phone"
                        errors={state.errors}
                    />
                    <CustomInput
                        id="message"
                        label="Mensaje"
                        variant='outlined'
                        multiline
                        rows={5}
                        autoComplete='off'
                        required
                        onChange={handleMessage}
                        helperText={messageError}
                        error={messageError ? true : false}
                        value={message}
                        name='message'
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <Button 
                        type="submit"
                        variant='contained'
                        size='large'
                        disabled={state.submitting}
                    >
                        { state.submitting ? 'Enviando...' : 'Enviar'}
                    </Button>

                </InputsContainer>

            </ContactContainer>
            <Toaster position='bottom-center' richColors/>
        </form>
    )
}

export default Contact