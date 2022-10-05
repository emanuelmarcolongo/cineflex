import styled from "styled-components";

export default function Loading () {
    return (
        <LoadGif src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt="Loading Gif"/>
    )
}

const LoadGif = styled.img `
    width: 100%;
    height: 100%;
    margin: 0 auto; 
`