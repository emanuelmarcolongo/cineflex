import GlobalStyle from './globalStyles';
import HomePage from './HomePage';
import Navbar from './Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SessionPage from './SessionPage';
import SeatPage from './SeatPage';
import SucessPage from './SucessPage';





export default function App() {



    return (
        <BrowserRouter>
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/" element= { <HomePage />} />
                <Route path="/sessoes/:idFilme" element = {<SessionPage/>}/>
                <Route path="/assentos/:idSessao" element = {<SeatPage/>}/>
                
            </Routes>
            <SucessPage />
        </BrowserRouter>
    )
}