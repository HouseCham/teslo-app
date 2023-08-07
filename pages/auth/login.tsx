import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import NextLink from 'next/link';

const LoginPage = () => {
  return (
    <AuthLayout title={'Login'}>
        <Box sx={{ width: '30%', padding: '10px 20px', minWidth: '20%' }}>
            <Grid container sx={{ backgroundColor: '#d1e0dd', padding: 5, borderRadius: 10 }}>
                {/* LOGIN form */}
                <Grid item xs={12}>
                    <Typography variant={'h1'} component={'h1'} textAlign={'center'}>Iniciar Sesión</Typography>
                </Grid>
                <Grid item xs={12} marginTop={4}>
                    <TextField label={'Email'} type={'email'} variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} marginTop={2}>
                    <TextField label={'Contraseña'} type={'password'} variant='filled' fullWidth />
                </ Grid>
                <Grid item xs={12} marginTop={2} textAlign={'right'}>
                    <Button variant='contained' className='circular-btn' size='large' fullWidth>Ingresar</Button>
                </Grid>
                    
                {/* Register */}
                <Grid item xs={12} marginTop={2} textAlign={'center'}>
                <Typography variant='subtitle2'>
                    ¿No tienes cuenta?
                    <NextLink href='/auth/register' passHref>
                        <Typography variant='subtitle2' sx={{ color: '#000', fontWeight: 'bold', textDecoration: 'underline' }}>
                            Regístrate
                        </Typography>
                    </NextLink>
                </Typography>
                </Grid>
            </Grid>
        </Box>
    </AuthLayout>
  )
}

export default LoginPage