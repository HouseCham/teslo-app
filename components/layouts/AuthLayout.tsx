import { Box } from '@mui/material';
import Head from 'next/head';
import { FC } from 'react';

interface AuthLayoutProps {
    children: React.ReactNode
    title: string
}

const AuthLayout: FC<AuthLayoutProps> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <main>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                height={'calc(100vh - 200px)'}
            >
                { children }
            </Box>
        </main>
    </>
  )
}

export default AuthLayout