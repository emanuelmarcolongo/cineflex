import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import Loading from './Loading';


export default function HomePage() {

    const [filmes, setFilmes] = useState([]);


    const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    useEffect(() => {
        promise.then(resposta => {
           setFilmes(resposta.data);
        })
    }, [])

    if(filmes.length === 0 || filmes === undefined || filmes === null) {
		return <Loading />;

	}

    return (
        <>
            <MovieList filmes = {filmes}/>
        </>
    )
}
