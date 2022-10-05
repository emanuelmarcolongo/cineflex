import styled from 'styled-components';

export default function Navbar() {
    return (
        <Header>CINEFLEX</Header>
    )
}


const Header = styled.div`
    font-family: 'Roboto', sans-serif;
    height: 67px;
    font-weight: 400;
    font-size: 34px;
    color: #e8833a;
    background-color: #c3cfd9;
    display: flex;
    align-items: center;
    justify-content: center;
`