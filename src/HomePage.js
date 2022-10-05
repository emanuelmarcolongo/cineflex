import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import Loading from './Loading';


export default function HomePage() {

    const [filmes, setFilmes] = useState([]);


    const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    useEffect(() => {
        promise.then(resposta => {
           setFilmes(resposta.data);
           console.log(resposta.data)
        })
    }, [])


    if(filmes.length === 0 || filmes === undefined || filmes === null) {
		return <Loading src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="Loading Gif"/>;

	}


    return (
        <>
            <MovieList filmes = {filmes}/>
        </>
    )
}
