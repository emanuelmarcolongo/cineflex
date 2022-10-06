import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';


export default function SeatPage() {
    const { idSessao } = useParams();
    const [seats, setSeats] = useState([]);
    const [movieInfo, setMovieInfo] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([])
    const [name, setName] = useState("");
    const [sendoRequest, setSendRequest] = useState({})
    const [cpf, setCpf] = useState("");


    function reservarAssentos () {
        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {ids: selectedSeats, name: name, cpf:cpf})
        promise.then((res)=> {console.log(res.config)})
        promise.catch((err) => {console.log(err.response.data)})
    }

    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

    useEffect(() => {
        promise.then(response => {
            setSeats(response.data.seats)
            setMovieInfo(response.data)
        })
    }, [])


    if (movieInfo.length === 0 || movieInfo === undefined || movieInfo === null) {
        return <Loading />;

    }

    if (seats.length === 0 || seats === undefined || seats === null) {
        return <Loading />;

    }

    return (
        <>
            <Info>Selecione o(s) assento(s)</Info>
            <Assentos>
                {seats.map((assento, i) => <Seat key={assento.id} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} id={seats[i].id} name={seats[i].name} isAvailable={seats[i].isAvailable} seats={seats} />)}

            </Assentos>
            <SeatsInfo>
                <div>
                    <Selecionado />
                    <p>Selecionado</p>
                </div>
                <div>
                    <Disponviel />
                    <p>Disponivel</p>
                </div>
                <div>
                    <Indisponivel />
                    <p>Indisponivel</p>
                </div>
            </SeatsInfo>

            <BuyerInfo>
                <p>Nome do comprador</p>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Digite seu nome...'></input>
                <p>CPF do comprador</p>
                <input type="text" onChange={(e) => setCpf(e.target.value)} placeholder='Digite seu CPF...'></input>
            </BuyerInfo>

            <DivReservar>
                <Reservar onClick={() => reservarAssentos()}> Reservar assento(s)</Reservar>
            </DivReservar>



            <Footer >
                <MovieContainer>
                    <img src={movieInfo.movie.posterURL} />
                </MovieContainer>
                <div>
                    <p>{movieInfo.movie.title}</p>
                    <div>
                        <p>{movieInfo.day.weekday}</p>
                        <p>{movieInfo.day.date}</p>
                    </div>
                </div>
            </Footer>
        </>
    )

}

function Seat({ selectedSeats, setSelectedSeats, id, name, isAvailable }) {
    const [selected, setSelected] = useState(false);

    function clickSeat(nome, id) {
        if (isAvailable === false) {
            alert("esse assento não está disponível")
            return;
        }

        if (!selectedSeats.includes(id)) {

            setSelectedSeats([...selectedSeats, id])
            setSelected(true);
        }
        if (selectedSeats.includes(id)) {
            const novoArray = selectedSeats.filter((i) => i !== id);
            setSelectedSeats([...novoArray])
            setSelected(false);
        }


    }

    return (
        <Assento onClick={() => clickSeat(name, id)} selected={selected} isAvailable={isAvailable}>{name}</Assento>
    )
}

const Footer = styled.div`
    width: 100%;
    height: 117px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    background-color: #DFE6ED;
    align-items: center;
    justify-content: center;
    margin-top: 117px;
    p {
        color: #293845;
        font-size: 26px;
        text-align: center;
    }

`
const Info = styled.p`
    color: #293845;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 110px;
`
const Assento = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 12px;
    margin: 18px 7px 0 0;
    background-color: ${props => (props.isAvailable) ? (props.selected ? "#1AAE9E" : "#C3CFD9") : "#FBE192"};
    border: ${props => (props.isAvailable) ? (props.selected ? "1px solid #0E7D71" : "1px solid #808F9D") : "1px solid #F7C52B"};
    font-size: 11px;
`
const Assentos = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 20px;
    margin-bottom: 10px;

`
const MovieContainer = styled.div`
    width: 64px;
    height: 89px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 15px;
    background-color: white;
    img {
        width: 48px;
        height: 72px;
    }
`
const SeatsInfo = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    margin: 25px auto;
    align-items: center;
    justify-content: space-evenly;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        p {
            font-size: 13px;
            color: #4E5A65;
        }
    }

`
const Disponviel = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 17px;
    background-color: #C3CFD9;
    border: 1px solid #7B8B99;
    font-size: 13px;
`
const Indisponivel = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 17px;
    background-color: #FBE192;
    border: 1px solid #F7C52B;
    font-size: 13px;
`
const Selecionado = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 17px;
    background-color: #1AAE9E;
    border: 1px solid #0E7D71;
    font-size: 13px;
`
const BuyerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    p {
        text-align: left;
        color: #293845;
        font-size: 18px;
        margin-bottom: 15px;
    }
    input {
        font-family: 'Roboto', sans-serif;
        width: 327px;
        height: 51px;
        border-radius: 3px;
        border: 1px solid #D5D5D5;
        background-color: white;
        margin-bottom: 15px;
    }
`
const DivReservar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
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