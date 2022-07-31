import React from 'react';
import { Grid, Paper, Box } from '@mui/material';

import { Card } from './Card';

function List(){
    return (
        <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Card />
                    <Card />
                </Grid>
                <Grid container spacing={2}>
                    <Card />
                    <Card />
                </Grid>
                <Grid container spacing={2}>
                    <Card />
                    <Card />
                </Grid>
                <Grid container spacing={2}>
                    <Card />
                    <Card />
                </Grid>
                <Grid container spacing={2}>
                    <Card />
                    <Card />
                </Grid>
        </Box>
    )
};

export default List;