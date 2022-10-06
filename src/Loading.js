import styled from "styled-components";
import loading from "./assets/loading.gif"

export default function Loading () {
    return (
        <LoadGif src={loading} alt="Loading Page"/>
    )
}

const LoadGif = styled.img `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    margin: 40% auto; 
`