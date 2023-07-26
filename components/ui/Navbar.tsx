import React from 'react';
import { AppBar, Link, Toolbar, Typography, Box, Button, IconButton, Badge } from '@mui/material';
import NextLink from 'next/link';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Link display={'flex'} href='/' alignItems={'center'}>
                    <Typography variant='h6'>Teslo |</Typography>
                    <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                </Link>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <NextLink href='/category/men' passHref>
                        <Button>Hombres</Button>
                    </NextLink>

                    <NextLink href='/category/women' passHref>
                        <Button>Mujeres</Button>
                    </NextLink>

                    <NextLink href='/category/kid' passHref>
                        <Button>Niños</Button>
                    </NextLink>
                </Box>

                <Box flex={1} />

                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <NextLink href="/cart" passHref>
                    <Badge badgeContent={2} color='secondary'>
                        <ShoppingCartOutlined />
                    </Badge>
                </NextLink>

                <Button>
                    Menú
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar