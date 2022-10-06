import GlobalStyle from './globalStyles';
import HomePage from './HomePage';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SessionPage from './SessionPage';
import SeatPage from './SeatPage';
import SucessPage from './SucessPage';





export default function App() {
    const data  = ({title: "", day: "", date: "", hour: "", buyer: "", seats: []});


    return (
        <BrowserRouter>
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/" element= { <HomePage />} />
                <Route path="/sessoes/:idFilme" element = {<SessionPage  data={data}/>}/>
                <Route path="/assentos/:idSessao" element = {<SeatPage  data={data}/>}/>
                <Route path="/sucess" element = {<SucessPage data={data}/>}/>

            </Routes>
            
        </BrowserRouter>
    )
}