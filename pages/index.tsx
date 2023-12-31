import type { NextPage } from 'next'
import ShopLayout from '../components/layouts/ShopLayout'
import { Typography } from '@mui/material'
import { initialData } from '../database/products'
import { ProductList } from '../components/products'
import { IProduct } from '../interfaces'

const Home: NextPage = () => {
  return (
    <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Los mejores productos :)'}>
      <Typography variant='h1' component={'h1'}>Home</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>

      <ProductList products={ initialData.products as any } />

    </ShopLayout>
  )
}

export default Home
