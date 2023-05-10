import { Box, Container } from '@mui/material'
import React from 'react'
import Branding from '../components/Home/Branding'
import Brands from '../components/Home/Brands'
import Services from '../components/Home/Services'
import OurWorks from '../components/Home/OurWorks'
import Faq from '../components/Home/Faq'

const Home = () => {
    return (
        <Box>
            <Container>
                <Branding />
                <Brands />
                <Services />
                <OurWorks />
                <Faq />
            </Container>
        </Box>
    )
}

export default Home