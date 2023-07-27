import NextLink from 'next/link';

import React from 'react'
import ShopLayout from '../../components/layouts/ShopLayout'
import { Box, Typography } from '@mui/material'
import { RemoveShoppingCartOutlined } from '@mui/icons-material'

const CartEmpty = () => {
    return (
        <ShopLayout
            title={'Carrito vacío'}
            pageDescription={'No hay productos en tu carrito de compras'}
        >
            <Box 
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='calc(100vh - 200px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
                <Box display={'flex'} flexDirection='column' alignItems='center'>
                    <Typography>Su carrito está vacío</Typography>
                    <NextLink href='/' passHref>
                        <Typography variant='button' color={'primary'}>Ir a la tienda</Typography>
                    </NextLink>
                </Box>
            </Box>
        </ShopLayout>
    )
}

export default CartEmpty