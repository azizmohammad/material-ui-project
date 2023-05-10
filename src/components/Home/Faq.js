import { Box } from '@mui/material'
import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import CreativeAccordion from '../CreativeAccordion/CreativeAccordion'

const Faq = () => {
    return (
        <Box>
            <SectionTitle title='Frequently Asked' colored='question' />

            <CreativeAccordion />
        </Box>
    )
}

export default Faq