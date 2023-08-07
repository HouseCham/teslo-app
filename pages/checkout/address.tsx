import React from 'react'
import ShopLayout from '../../components/layouts/ShopLayout'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'

const AddressPage = () => {

    const countryList = [
        { id: 1, name: 'Mexico' },
        { id: 2, name: 'USA' },
        { id: 3, name: 'El Salvador' },
        { id: 4, name: 'Honduras' },
    ]

    return (
        <ShopLayout title={'Dirección'} pageDescription={'Dirección de envío'} >
            <Typography variant='h1' component={'h1'}>Dirección</Typography>

            <Grid container spacing={2} marginTop={2}>
                { /* Name and last name */}
                <Grid item xs={12} sm={6}>
                    <TextField label='Nombre' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Apellido' variant='filled' fullWidth />
                </Grid>
                { /* Address  */}
                <Grid item xs={12} sm={6}>
                    <TextField label='Dirección' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Dirección 2 (opcional)' variant='filled' fullWidth />
                </Grid>
                { /* Country */}
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth >
                        <InputLabel>País</InputLabel>
                        <Select
                            variant='filled'
                            label='País'
                            value={1}
                        >
                            {countryList.map(country => (
                                <MenuItem key={country.id} value={country.id}>{country.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Teléfono' variant='filled' fullWidth />
                </Grid>
            </Grid>

            <Box sx={{ mt: 5 }} display={'flex'} justifyContent={'center'}>
                <Button color='secondary' className='circular-btn' size='large'>
                    Realizar pedido
                </Button>
            </Box>
        </ShopLayout>
    )
}

export default AddressPage