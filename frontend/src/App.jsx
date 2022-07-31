import React from 'react';
import {  Box } from '@mui/material';

import Header from './components/Header';
import List from './components/List';
import ActionButtons from './components/ActionButtons';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        //height: '200vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Header />
      <List />
      <ActionButtons />
    </Box>
  );
}

export default App;
