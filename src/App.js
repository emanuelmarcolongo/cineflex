import GlobalStyle from './globalStyles';
import { useState } from 'react';
import HomePage from './HomePage';
import Navbar from './Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SessionPage from './SessionPage';




export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/" element= { <HomePage />} />
                <Route path="/sessoes/:idFilme" element = {<SessionPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}