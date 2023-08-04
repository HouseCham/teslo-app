import React from 'react'
import ShopLayout from '../../components/layouts/ShopLayout'
import { initialData } from '../../database/products'
import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import ProductSlideShow from '../../components/products/ProductSlideShow';
import ItemCounter from '../../components/ui/ItemCounter';
import SizeSelector from '../../components/ui/SizeSelector';

const product = initialData.products[0];

const ProductPage = () => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={7}>
          <ProductSlideShow images={product.images} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display={"flex"} flexDirection={"column"}>
            {/* titles */}
            <Typography variant='h1' component={'h1'}> { product.title } </Typography>
            <Typography variant='subtitle1' component={'h2'}>$ { product.price } </Typography>
            
            {/* quantity */}
            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle2' component={'p'}>Cantidad:</Typography>
              {/* counter */}
              <ItemCounter />
              {/* sizes */}
              <SizeSelector
                sizes={ product.sizes }
                //selectedSize={ product.sizes[1] }
              />
            </Box>

            {/* add to cart button */}
            <Button color={"secondary"} className='circular-btn' style={{ width: '30%' }}>Agregar al carrito</Button>

            {/* chip -> inform in case of lack availability */}
            <Chip 
              label="No hay disponibles"
              color="error"
              variant='outlined'
              style={{ width: '30%' }}
            />

            <Box sx={{ mt:3 }}>
              <Typography variant='subtitle2'>Descripción</Typography>
              <Typography variant='body2'>{ product.description }</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default ProductPage