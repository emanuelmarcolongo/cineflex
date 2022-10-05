import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';




export default function MovieList({ filmes }) {

    return (
        <>
        <Info>Selecione o Filme</Info>
        <Movies>
            {filmes.map((item) => <Movie  key={item.id} filmes={item} />)}
            {/* <Movie filmes={filmes} /> */}
        </Movies>
        </>
    )
}

function Movie({filmes}) {

    function chooseMovie (parametro) {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${parametro}/showtimes`)
            promise.then(resposta => {
               console.log(resposta.data)
            })
    }


    return (
        <>
            <MovieContainer onClick={() => chooseMovie(filmes.id)}>
                <MoviePoster  src={filmes.posterURL} alt="Poster do Filme" />
            </MovieContainer>
        </>
    )
}



const MovieContainer = styled.div`
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 15px;
`


const MoviePoster = styled.img`
    width: 129px;
    height: 193px;
`

const Movies = styled.div`
        font-family: 'Roboto', sans-serif;
        display: flex;
        flex-wrap: wrap;
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
        