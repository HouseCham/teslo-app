import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import NextLink from 'next/link';

const RegisterPage = () => {
    return (
        <AuthLayout title={'Registro'}>
            <Grid container spacing={2} sx={{ width: '30%' }}>
                {/* REGISTER form */}
                <Grid item xs={12}>
                    <Typography variant={'h1'} component={'h1'}>Registro</Typography>
                </Grid>
                <Grid item xs={12} sm={4} marginTop={4}>
                    <TextField label={'Nombre'} type={'text'} variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4} marginTop={4}>
                    <TextField label={'Apellido paterno'} type={'text'} variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4} marginTop={4}>
                    <TextField label={'Apellido materno'} type={'text'} variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} marginTop={4}>
                    <TextField label={'Email'} type={'email'} variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} marginTop={2}>
                    <TextField label={'Contraseña'} type={'password'} variant='filled' fullWidth />
                </ Grid>
                <Grid item xs={12} sm={6} marginTop={2}>
                    <TextField label={'Confirmar contraseña'} type={'password'} variant='filled' fullWidth />
                </ Grid>
                <Grid item xs={12} marginTop={2} textAlign={'center'} >
                    <Button variant='contained' className='circular-btn' sx={{ width:'30%', minWidth: 'fit-content' }} size='large'>Registrarse</Button>
                </Grid>

                {/* Register */}
                <Grid item xs={12} marginTop={2} textAlign={'center'}>
                    <Typography variant='subtitle2'>
                        ¿Ya tienes una cuenta?
                        <NextLink href='/auth/login' passHref>
                            <Typography variant='subtitle2' sx={{ color: '#000', fontWeight: 'bold', textDecoration: 'underline' }}>
                                Ingresa
                            </Typography>
                        </NextLink>
                    </Typography>
                </Grid>
            </Grid>
        </AuthLayout>
    )
}

export default RegisterPage