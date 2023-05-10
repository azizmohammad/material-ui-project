import { Box, Button, Container, Divider, Typography } from '@mui/material'
import React from 'react'

const FooterPart = () => {
    return (
        <Box sx={{
            bgcolor: '#111430',
            py: 8
        }}>
            <Container>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignContent: 'center'
                }}>
                    <Typography sx={{
                        fontSize: '1.5rem',
                        color: '#fff',

                    }}>
                        Creative Argency
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignContent: 'center'
                    }}>
                        <Typography sx={{
                            fontSize: '1.5rem',
                            color: '#fff',

                        }}>
                            Ready to get Start
                        </Typography>
                        <Button sx={{
                            bgcolor: '#7AB259',
                            color: '#fff',
                            ml: 2,
                            '&:hover': {
                                backgroundColor: '#fff',
                                color: '#111430',
                            }
                        }}
                        >Get Started</Button>
                    </Box>

                </Box>
                <Divider sx={{
                    mt: 3,
                    bgcolor: '#fff'
                }} />
            </Container>
        </Box>
    )
}

export default FooterPart