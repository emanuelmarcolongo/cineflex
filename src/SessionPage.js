import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import Loading from './Loading';
import { useParams } from 'react-router-dom';


export default function SessionPage() {
    const { idFilme } = useParams();
    const [session, setSession] = useState([]);
    const [movieInfo, setMovieInfo] = useState({})

    console.log(movieInfo)
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

    useEffect(() => {
        promise.then(response => {
            setSession(response.data.days);
            setMovieInfo(response.data)

        })
    }, [])


    if (session.length === 0 || session === undefined || session === null) {
        return <Loading src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="Loading Gif" />;

    }

    return (
        <>
            <Info>Selecione o Horário</Info>
            {session.map((session, idx) => <Session key={idx} day={session.date} weekday={session.weekday} showtime={session.showtimes} />)}
            <MoviePreview >
                <MovieContainer>
                    <img src={movieInfo.posterURL} />
                </MovieContainer>
                <p>{movieInfo.title}</p>
            </MoviePreview>
        </>
    )
}


function Session({ day, weekday, showtime }) {

    return (
        <Sessao>
            <p>{weekday} - {day}</p>
            <Schedule>
                {/* <Showtime > ola </Showtime> */}
                {showtime.map((item, idx) => <Showtime key={idx}> {item.name} </Showtime>)}
            </Schedule>

        </Sessao>
    )
}
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

const Sessao = styled.div`
    width: 350px;
    margin-left: 10px;
`

const Showtime = styled.div`
    display: flex;
    width: 83px;
    height: 43px;
    font-size: 20px;
    color: white;
    align-items: center;
    justify-content: center;
    background-color: #E8833A;
    margin: 22px 0px;
    margin-right: 10px;
    border-radius: 3px;
`

const Schedule = styled.div`
    display: flex;

`
const MoviePreview = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    background-color: #9EADBA;
    align-items: center;
    p {
        color: #293845;
        font-size: 26px;
        text-align: center;
    }

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
