import { Box, Typography } from "@mui/material"
import ShopLayout from "../components/layouts/ShopLayout"

const Custom404 = () => {
  return (
    <ShopLayout title="Page not found" pageDescription="Page or info requested not found">
        <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)' sx={{ flexDirection: {xs: 'column', sm: 'row'} }}>
            <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>404 |</Typography>
            <Typography marginLeft={2}>Página no encontrada</Typography>
        </Box>
    </ShopLayout>
  )
}

export default Custom404