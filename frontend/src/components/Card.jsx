import { Grid, Paper, Box, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#fff',
    ...theme.typography.body2,
    //padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '300px',
    height: '200px',
    marginBottom: '1cm',
    marginTop: '1cm',
    position: 'relative',
    overflow: 'hidden',
}));


const ItemTwo = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '300px',
    height: '150px',
    position: 'absolute',
    bottom: '-150px',
}));

export function Card({ item }) {
    return (
        <Grid item xs={6}>
            <Item>
                <ItemTwo></ItemTwo>
            </Item>

        </Grid >
    );
}