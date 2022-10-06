import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';


export default function MovieList({ filmes }) {

    return (
        <>
            <Info>Selecione o Filme</Info>
            <Movies>
                {filmes.map((item) => <Movie key={item.id} filmes={item} />)}
                {/* <Movie filmes={filmes} /> */}
            </Movies>
        </>
    )
}

function Movie({ filmes }) {

    return (
        <>
            <Link to={`/sessoes/${filmes.id}`}>
                <MovieContainer >
                    <MoviePoster src={filmes.posterURL} alt="Poster do Filme" />
                </MovieContainer>
            </Link>
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