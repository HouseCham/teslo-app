import { Grid, Typography } from '@mui/material'
import React from 'react'

const OrderSummary = () => {
  return (
    <Grid container>
        { /* Total of items */ }
        <Grid item xs={6} marginBottom={'5px'}>
            <Typography>No. Productos</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>3</Typography>
        </Grid>

        { /* Subtotal */ }
        <Grid item xs={6} marginBottom={'5px'}>
            <Typography>Subtotal</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>${150.36}</Typography>
        </Grid>

        { /* Taxes */ }
        <Grid item xs={6} marginBottom={'10px'}>
            <Typography>IVA (16%)</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>${23}</Typography>
        </Grid>

        { /* Total */ }
        <Grid item xs={6}>
            <Typography variant='subtitle1'>Total</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography variant='subtitle1'>
                <strong>${150.36}</strong>
            </Typography>
        </Grid>
    </Grid>
  )
}

export default OrderSummary