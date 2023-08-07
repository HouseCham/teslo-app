import React from 'react'
import ShopLayout from '../../components/layouts/ShopLayout'
import { Button, Chip, Grid, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { CreditCardOffOutlined, CreditScoreOutlined, VisibilityOutlined } from '@mui/icons-material';
import NextLink from 'next/link';

const OrderHistoryPage = () => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 10 },
        { field: 'fullname', headerName: 'Nombre completo', width: 300 },

        {
            field: 'paid',
            headerName: 'Pagado',
            description: 'Muestra si la orden ha sido pagada',
            width: 200,
            renderCell: (params: GridRenderCellParams) => {
                return (
                    params.row.paid
                        ? <Chip
                            sx={{ mt: 2 }}
                            label='Pendiente'
                            variant='outlined'
                            color='error'
                            icon={<CreditCardOffOutlined />}
                        />
                        : <Chip
                            sx={{ mt: 2 }}
                            label='Completado'
                            variant='outlined'
                            color='success'
                            icon={<CreditScoreOutlined />}
                        />
                )
            }
        },

        {
            field: 'seeMore',
            headerName: 'Ver más',
            width: 100,
            description: 'Ver más detalles de la orden',
            renderCell: (params: GridRenderCellParams) => {
                return (
                    <NextLink href={`/orders/${params.row.id}`} passHref>
                        <Button variant="contained">
                            <VisibilityOutlined sx={{ color: '#000', alignItems: 'center' }} />
                        </Button>
                    </NextLink>
                )
            }
        }
    ]

    const rows = [
        { id: 1, paid: true, fullname: 'Snow' },
        { id: 2, paid: true, fullname: 'Lannister' },
        { id: 4, paid: false, fullname: 'Stark' },
        { id: 5, paid: true, fullname: 'Targaryen' },
        { id: 6, paid: false, fullname: 'Melisandre' },
        { id: 7, paid: true, fullname: 'Clifford' },
        { id: 8, paid: true, fullname: 'Frances' },
        { id: 9, paid: false, fullname: 'Roxie' },
    ]
    return (
        <ShopLayout title="Historial de órdenes" pageDescription='Order list the costumer has made' >
            <Typography variant="h1" component="h1">Historial de ordenes</Typography>

            <Grid container marginTop={3}>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        columns={columns}
                        rows={rows}
                        pagination
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,
                                },
                            },
                        }}
                        pageSizeOptions={[5, 10, 15, 20]}
                    />
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default OrderHistoryPage