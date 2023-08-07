import React, { FC } from 'react'
import { initialData } from '../../database/products'
import { Box, Button, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import NextLink from 'next/link'
import ItemCounter from '../ui/ItemCounter'

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

interface CartListProps {
    editable?: boolean
}

const CartList: FC<CartListProps> = ({ editable = false }) => {

    return (
        <>
            {
                productsInCart.map(product => (
                    <Grid container key={product.slug} spacing={2} sx={{ mb: 1 }}>
                        <Grid item xs={3}>
                            {/*TODO: llevar a la pagina del producto */}
                            {/* Imagen producto */}
                            <NextLink href="product/slug" passHref>
                                <CardActionArea>
                                    <CardMedia
                                        image={`/products/${product.images[0]}`}
                                        component={'img'}
                                        sx={{ borderRadius: '30px' }}
                                    />
                                </CardActionArea>
                            </NextLink>
                        </Grid>
                        {/* Nombre del producto */}
                        <Grid item xs={7}>
                            <Box display='flex' flexDirection='column'>
                                {/* Nombre del producto */}
                                <Typography variant='body1'>{product.title}</Typography>
                                {/* Talle del producto */}
                                <Typography variant='body2'>Talla: <strong>{product.sizes[0]}</strong></Typography>
                                {/* Cantidad del producto */}
                                {editable
                                    ? <ItemCounter />
                                    : <Typography variant='h4'>3</Typography>
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={2} display={'flex'} alignItems={'center'} flexDirection={'column'}>
                            {/* Precio del producto */}
                            <Typography variant='subtitle1'>${product.price}</Typography>
                            {/* Eliminar producto */}
                            {editable && (
                                <Button variant='text' color='secondary' style={{ color: 'red' }}>Remover</Button>
                            )
                            }
                        </Grid>
                    </Grid>
                ))
            }
        </>
    )
}

export default CartList