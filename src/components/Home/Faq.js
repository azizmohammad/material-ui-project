import { Box } from '@mui/material'
import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import CreativeAccordion from '../CreativeAccordion/CreativeAccordion'

const Faq = () => {
    return (
        <Box sx={{
            mb: 8
        }}>
            <SectionTitle title='Frequently Asked' colored='question' />

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3
            }}>

                <CreativeAccordion title='Front-end Developer' driscruption='lorem Lizards are group of squamate reptiles, with over species, all except Antarct' />
                <CreativeAccordion title='Front-end Developer' driscruption='lorem Lizards are group of squamate reptiles, with over species, all except Antarct' />
                <CreativeAccordion title='Front-end Developer' driscruption='lorem Lizards are group of squamate reptiles, with over species, all except Antarct' />

            </Box>
        </Box>
    )
}

export default Faq