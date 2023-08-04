import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import React, { FC, useMemo, useState } from 'react'
import { IProduct } from '../../interfaces'
import NextLink from 'next/link'

interface Props {
    product: IProduct
}

const ProductCard: FC<Props> = ({ product }) => {

    // hook to check if the mouse is hovering over the product card
    const [isHovered, setIsHovered] = useState(false);

    // hook to change the product image when the mouse is hovering over the product card
    const productImage = useMemo(() => {
        return isHovered ? `products/${product.images[1]}` : `products/${product.images[0]}`;
    }, [isHovered, product.images]);

    return (
        <Grid item 
            xs={6} 
            sm={4} 
            onMouseEnter={ () => setIsHovered(true) } 
            onMouseLeave={ () => setIsHovered(false)} 
        >
            <Card>
                {/* Prefetch = false -> in order to not generate all specific product pages */}
                <NextLink href={"product/slug"} passHref prefetch={ false } >
                    <CardActionArea>
                        <CardMedia
                            component={'img'}
                            className='fadeIn'
                            image={productImage}
                            alt={product.title}
                        />
                    </CardActionArea>
                </NextLink>
            </Card>

            <Box sx={{ mt: 1 }} className='fadeIn'>
                <Typography fontWeight={700}>{product.title}</Typography>
                <Typography fontWeight={500}>${product.price}</Typography>
            </Box>

        </Grid>
    )
}

export default ProductCard