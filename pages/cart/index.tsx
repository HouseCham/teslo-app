import React from 'react'
import ShopLayout from '../../components/layouts/ShopLayout'
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import CartList from '../../components/cart/CartList'

const CartPage = () => {
  return (
    <ShopLayout title={'Carrito'} pageDescription={'Carrito de compras de la tienda'}>
        <Typography variant='h1' component={'h1'} >Carrito</Typography>

        <Grid container>
            <Grid item xs={12} sm={7}>
                {/* cart items */}
                <CartList />
            </Grid>
            <Grid item xs={12} sm={5}>
                {/* cart summary */}
                <Card className='summaryCard'>
                    <CardContent>
                        <Typography variant='h2' component={'h2'}>Orden</Typography>
                        <Divider sx={{ my: 1 }} />

                        { /* Order summary */ }
                        <Box sx={{ mt: 3 }}>
                            <Button color='secondary' className='circular-btn' fullWidth>Checkout</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default CartPage