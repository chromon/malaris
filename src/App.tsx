// import * as React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './themes/Palette'
import './App.css'
import Header from './components/header/Header'

export default function App() {

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
            </ThemeProvider>
        </>
    );
}