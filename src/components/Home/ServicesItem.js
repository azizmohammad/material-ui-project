import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function ServicesItem({ image }) {
    return (
        <>
            <Card sx={{
                maxWidth: 345,
                boxShadow: 2,
                pt: 2,
                mb: 6,
                mx: 'auto'
            }}>

                <CardMedia
                    component='img'
                    height='140'
                    image={image}
                    title="green iguana"
                    sx={{
                        width: 'auto',
                        margin: 'auto'
                    }}
                />
                <CardContent sx={{
                    textAlign: 'center',
                }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{
                        fontWeight: 'bold'
                    }}>
                        Web & Mobile Design
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are group of squamate reptiles, with over
                        species, all except Antarct
                    </Typography>
                </CardContent>

            </Card>
        </>
    )
}

export default ServicesItem