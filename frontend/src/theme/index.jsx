import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';


const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            paper: '#282C34',
            default: '#282C34',
            header: '#000',
        },
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