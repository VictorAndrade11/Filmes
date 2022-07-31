import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';


const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
            contrastText: '#282C34',
        },
        mode: 'dark',
        background: {
            paper: '#282C34',
            default: '#282C34',
            header: '#000',
        },
        text: {
            primary: '#fff',
            secondary: '#000',
        },
        typography: {
            fontFamily: ["Roboto", "Helvetica", "Arial", 'sans-serif'].join(','),
            fontSize: 14,
        }
    },
});

export function FilmThemeProvider({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}