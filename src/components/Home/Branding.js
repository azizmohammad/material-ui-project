import { Box, Button, Stack, Typography, styled } from '@mui/material'
import React from 'react'


const BrandingWraper = styled(Box)(({ theme }) => ({
    height: '80vh',
    backgroundColor: 'rgba(122, 178, 89, 0.15)',
    paddingTop: '150px',
    paddingBottom: '200px',
    padding: theme.spacing(5),
    margin: '70px 0',
    borderRadius: '5px',
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

const Branding = () => {
    return (
        <BrandingWraper>
            <Stack spacing={4}>
                <Typography sx={{
                    fontSize: "40px",
                    fontWeight: 'bold',
                    lineHeight: '1.2'
                }}>Let's Grow Your Brand To <br /> The Next Lavel</Typography>
                <Typography sx={{
                    fontSize: "18px",
                    fontWeight: 'light',
                }}>Lorem Ipsum is simply dummy text of the printing and <br />typesetting industry. Lorem Ipsum has been the industry's<br /> standard text ever since the 1500s,</Typography>
                <Button sx={{
                    width: '40%'
                }} variant="contained">Hire Us</Button>
            </Stack>

            <Box sx={{
                width: '50%',
                // display: ['none', 'none', 'block']
                display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'block',
                }
            }}>
                <img src='https://i.ibb.co/sPXVMbC/Frame.png' alt='branding-img'
                    style={{
                        width: '100%'
                    }} />
            </Box>
        </BrandingWraper>
    )
}

export default Branding