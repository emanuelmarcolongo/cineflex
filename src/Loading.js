import styled from "styled-components";

export default function Loading () {
    return (
        <LoadGif src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt="Loading Page"/>
    )
}

const LoadGif = styled.img `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    margin: 30% auto; 
`