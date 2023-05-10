import styled from '@emotion/styled'
import { Box, Grid } from '@mui/material'
import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import ServicesItem from './ServicesItem'

const serviceImages = [
    'https://i.ibb.co/HNhykGp/iphone-5.png',
    'https://i.ibb.co/r0gHkvM/color-palette-1.png',
    'https://i.ibb.co/CvQwzKC/coding-1.png',
]


function Services() {
    return (
        <Box>
            <SectionTitle
                title='Provide Awesome'
                colored='Services'
                sx={{ mb: 8 }}
            />

            <Grid container spacing={2}>

                {
                    serviceImages.map((image, index) => (

                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <ServicesItem image={image} key={index} />
                        </Grid>

                    ))
                }

            </Grid>

        </Box>
    )
}

export default Services;

