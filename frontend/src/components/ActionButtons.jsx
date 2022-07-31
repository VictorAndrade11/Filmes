import React from 'react';
import { IconButton, Box, Grid } from '@mui/material';

import { ReactComponent as ReloadIcon } from '../assets/reload.svg';
import { ReactComponent as GoToUpIcon } from '../assets/goToUp.svg';

function ActionButtons(){
    return (
        <Box sx={{ position: 'fixed', right: '20px', bottom: 10 }}>
            <Grid container direction="row" spacing={2}>
                <Grid item xs={6}>
                    <IconButton>
                       <ReloadIcon fontSize="small"/>
                    </IconButton>
                </Grid>
                <Grid item xs={6}>
                    <IconButton>
                        <GoToUpIcon fontSize="small" />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    )
};

export default ActionButtons;