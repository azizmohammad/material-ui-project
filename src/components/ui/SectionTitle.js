import { Typography } from '@mui/material'
import React from 'react'

function SectionTitle({ title, colored }) {
    return (
        <div>
            <Typography sx={{
                fontSize: '34px',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '40px'
            }}>{title} {''}
                {colored && (
                    <span style={{ color: '#7AB259' }}>{colored}</span>)}

            </Typography>

        </div>
    )
}

export default SectionTitle