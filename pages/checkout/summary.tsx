import React from 'react'
import ShopLayout from '../../components/layouts/ShopLayout'
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import CartList from '../../components/cart/CartList';
import OrderSummary from '../../components/cart/OrderSummary';
import NextLink from 'next/link';

const SummaryPage = () => {
  return (
    <ShopLayout title={'Resumen de compra'} pageDescription={'Resumen de compra del cliente'}>
        <Typography variant='h1' component={'h1'} >Resumen de compra</Typography>

        <Grid container marginTop={3}>
            <Grid item xs={12} sm={7}>
                {/* cart items */}
                <CartList />
            </Grid>
            <Grid item xs={12} sm={5}>
                {/* cart summary */}
                <Card className='summaryCard'>
                    <CardContent>
                        <Typography variant='h2' component={'h2'}>Resumen (3 productos)</Typography>
                        <Divider sx={{ my: 1 }} />

                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Typography variant='subtitle1'>Dirección de entrega</Typography>
                            <NextLink href={'/checkout/address'} passHref>
                                <Typography variant='subtitle2' component={'a'} sx={{ textDecoration: 'underline', color: '#000' }} >
                                    Editar
                                </Typography> 
                            </NextLink>
                        </Box>

                        { /* Costumer and address information */}
                        <Typography>Chamito Ramirez</Typography>
                        <Typography>Av. Siempre Viva 742, 28017</Typography>
                        <Typography>Colima, Colima</Typography>
                        <Typography>México</Typography>
                        <Typography>312 133 2750</Typography>
                        
                        <Divider sx={{ my: 1 }} />

                        <Box display={'flex'} justifyContent={'end'} marginBottom={1}>
                            <NextLink href={'/cart'} passHref>
                                <Typography variant='subtitle2' component={'a'} sx={{ textDecoration: 'underline', color: '#000' }} >
                                    Editar
                                </Typography> 
                            </NextLink>
                        </Box>

                        <OrderSummary />

                        <Box sx={{ mt: 3 }}>
                            <Button
                                color='secondary'
                                className='circular-btn'
                                fullWidth>
                                    Confirmar orden
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default SummaryPage