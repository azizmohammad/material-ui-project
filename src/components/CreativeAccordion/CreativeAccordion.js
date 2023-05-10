import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CreativeAccordion = () => {
    return (
        <div>
            <Accordion sx={{
                boxShadow: 1,
                border: '1px solid #e5eaf2',
                mb: 10,
                p: 2,
                borderRadius: 2
            }}>
                <AccordionSummary
                    sx={{
                        '& p': {
                            color: '#111430',
                            fontWeight: 'bold',
                        },
                        '& .Mui-expanded': {
                            '& p': {
                                color: '#7AB259',
                            },
                        }
                    }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Web Design</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{
                        color: '#5a7184'
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default CreativeAccordion