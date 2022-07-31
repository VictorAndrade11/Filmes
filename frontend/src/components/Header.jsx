import React from 'react';
import { Grid, Paper, Box, Typography, Container, IconButton } from '@mui/material';

import { ReactComponent as RightIcon } from '../assets/right.svg';
import { ReactComponent as LeftIcon } from '../assets/left.svg';


function Header(){
    return (
       <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
                bgcolor: 'background.header',
                height: '100px',
            }}>
            <IconButton>
                <LeftIcon fontSize='small' />
            </IconButton>
            <Grid item xs={2}>
                <Typography variant="h4" align='center'>
                    1 / 10
                </Typography>
            </Grid>
            <IconButton>
                <RightIcon fontSize='small' />
            </IconButton>
        </Grid>
    );
};

export default Header;