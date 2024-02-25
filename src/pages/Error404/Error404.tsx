import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const ErroPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1.5rem;
        text-align: center;
    }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #f2f2f2;
  &:hover {
    background-color: #e8e8e8;
  }
`;

const ErrorPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        window.document.title = "oultra.dev | Error 404 ";
    }, []);

    return (
        <ErroPageContainer>
            <h1>Error 404</h1>
            <p>No encontramos la pagina que buscas 😢</p>
            <StyledLink to="/">Regresar al inicio</StyledLink>
        </ErroPageContainer>
    );
}

export default ErrorPage;