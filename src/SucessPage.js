import { Link } from "react-router-dom"
import styled from "styled-components"



export default function SucessPage() {
    return (
        <>
            <Info>Pedido feito com sucesso!</Info>
            <TicketInfo>
                <Negrito>Filme e sessão</Negrito>
                <p>Shrek</p>
                <p>24/06/2021    15h</p>
                <Negrito>Ingressos</Negrito>
                <p>Assento 15</p>
                <p>Assento 16</p>
                <Negrito>Comprador</Negrito>
                <p>Joaozinho56</p>
            </TicketInfo>

            <DivReservar>
                <Link to="/">
                <Reservar > Voltar para home</Reservar>
                </Link>
            </DivReservar>

        </>
    )
}

const Info = styled.p`
    color: #247A6B;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 24px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 110px;
    margin-bottom: 25px;

`

const TicketInfo = styled.div`
    color: #293845;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 29px;
    p {
        font-size: 22px;
    }
`
const Negrito = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: #293845;
    margin: 35px 0 10px;
    


`

const DivReservar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
`
const Reservar = styled.button`
    width: 225px;
    height: 42px;
    color: white;
    background-color: #e8833a;
    border-radius: 3px;
    margin: 0 auto;
    font-size: 18px;
`