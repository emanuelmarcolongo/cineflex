import { Link } from "react-router-dom"
import styled from "styled-components"



export default function SucessPage({ data }) {
    console.log(data)
    return (
        <>
            <Info>Pedido feito com sucesso!</Info>
            <TicketInfo data-identifier="movie-session-infos-reserve-finished" >
                <Negrito>Filme e sessão</Negrito>
                <p>{data.title}</p>
                <p>{data.date}  -  {data.day}</p>
                <p>Horário: {data.hour} </p>
                <Negrito>Ingressos</Negrito>
                {data.seats.map((seat) => <p data-identifier="seat-infos-reserve-finished" key={seat}>Assento {seat}</p>)}
                <Negrito>Comprador</Negrito>
                <p data-identifier="buyer-infos-reserve-finished">{data.buyer}</p>
            </TicketInfo>

            <DivReservar>
                <Link to="/">
                    <Reservar data-identifier="back-to-home-btn" > Voltar para home</Reservar>
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
    width: 375px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
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
    a {
        text-decoration: none;
    }
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