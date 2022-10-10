import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import { Link, useParams } from 'react-router-dom';


export default function SessionPage({data}) {
    const { idFilme } = useParams();
    const [session, setSession] = useState([]);
    const [movieInfo, setMovieInfo] = useState({})
    data.title = movieInfo.title;

    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

    useEffect(() => {
        promise.then(response => {
            setSession(response.data.days);
            setMovieInfo(response.data)
        })
    }, [])


    if (session.length === 0 || session === undefined || session === null) {
        return <Loading />;

    }

    return (
        <>
            <Info>Selecione o Horário</Info>
            {session.map((session, idx) => <Session key={idx} day={session.date} weekday={session.weekday} showtime={session.showtimes} />)}
            <MoviePreview >
                <MovieContainer>
                    <img data-identifier="movie-img-preview" src={movieInfo.posterURL} />
                </MovieContainer>
                <p>{movieInfo.title}</p>
            </MoviePreview>
        </>
    )
}


function Session({ day, weekday, showtime }) {
    return (
        <Sessao >
            <p data-identifier="session-date">{weekday} - {day}</p>
            <Schedule >
                {showtime.map((item, idx) =>
                    <Link to={`/assentos/${item.id}`}>
                      <Showtime data-identifier="hour-minute-btn" key={idx}> {item.name} </Showtime>
                    </Link>
              
                
                )
                }
            </Schedule>

        </Sessao>
    )
}
const Info = styled.p`
    color: #293845;
    width: 375px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
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
    a {
        text-decoration: none;
    }
`
const MoviePreview = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    background-color: #DFE6ED;
    align-items: center;
    justify-content: center;
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
