import React from 'react'
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

function CreativeCart({ image }) {
    return (
        <Box>

            <Card sx={{ maxWidth: 345, p: 2, mt: 4, borderRadius: '10px', boxShadow: 3 }}

            >
                <CardMedia
                    sx={{ height: 190, borderRadius: 2 }}
                    image={image}
                    title="green iguana"

                />
                <CardContent sx={{
                    p: 0,
                    pt: 4,
                    '&:last-child': {
                        pb: 0
                    },
                    '& .css-mhc70k-MuiGrid-root': {
                        pl: 0,
                        pt: 0
                    },
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Box>
                        <Typography gutterBottom variant="body" color="text.secondary" component="div">
                            Web Design
                        </Typography>
                        <Typography variant="body2" color='#111430' fontWeight='bold' fontSize='16px'>
                            Web Design Resecrch
                        </Typography>
                    </Box>
                    <IconButton sx={{
                        border: '1px solid #111430', '& svg': {
                            color: '#111430'
                        }
                    }}>
                        <AddIcon />
                    </IconButton>
                </CardContent>

            </Card>

        </Box>
    )
}

export default CreativeCart