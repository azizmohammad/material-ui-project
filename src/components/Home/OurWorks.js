import { ArrowBackIos } from '@mui/icons-material';
import { Box, Grid, IconButton, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CreativeCart from './CreativeCart';
import { cardData } from './cardData';

function OurWorks() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{ py: 5 }}>
            {/* heading section */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }} >
                <Typography sx={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                }} >
                    <span>Here Are Some Of </span>
                    <span style={{ color: '#7AB259' }}>Our Works</span>
                </Typography>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 2
                }}>
                    <Tabs value={value} onChange={handleChange} centered
                        sx={{
                            '& .MuiTabs-indicator': {
                                display: 'none'
                            },
                            '& .css-125dws3-MuiButtonBase-root-MuiTab-root.Mui-selected': {
                                color: '#ff6f00'
                            },
                            '& .MuiButtonBase-root': {
                                textTransform: "capitalize"
                            }
                        }}>
                        <Tab sx={{ fontWeight: 'bold', color: '#7AB259' }} label="All" />
                        <Tab sx={{ fontWeight: 'bold', color: '#7AB259' }} label="Web Design" />
                        <Tab sx={{ fontWeight: 'bold', color: '#7AB259' }} label="Development" />
                        <Tab sx={{ fontWeight: 'bold', color: '#7AB259' }} label="Mobile App" />
                    </Tabs>
                    <Box>
                        <IconButton sx={{
                            border: `1px solid #959EAD`,
                            marginRight: 1,
                        }}
                            onClick={() => setValue(value - 1)}
                            disabled={value === 0}
                        >
                            <ArrowBackIcon />
                        </IconButton>

                        <IconButton sx={{
                            border: `1px solid #959EAD`
                        }}
                            onClick={() => setValue(value + 1)}
                            disabled={value === 3}
                        >
                            <ArrowForwardIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            {/* card section */}
            <>
                <Grid container spacing={2}>
                    {
                        cardData[value].map(image => (

                            <Grid item xs={12} sm={6} md={4} >
                                <CreativeCart image={image} />
                            </Grid>
                        ))
                    }
                </Grid>
            </>

        </Box >
    )
}

export default OurWorks