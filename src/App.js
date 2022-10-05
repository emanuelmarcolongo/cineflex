import GlobalStyle from './globalStyles';
import { useState } from 'react';
import HomePage from './HomePage';
import Navbar from './Navbar';


export default function App () {
    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <HomePage/>
        </>
    )
}