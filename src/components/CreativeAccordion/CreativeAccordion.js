import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CostumExpandedIcon = () => {
    return (
        <div>
            <div className='expandedPlus'>
                <AddIcon />
            </div>

            <div className='expandedRemove'>
                <RemoveIcon />
            </div>
        </div>
    )
}

const CreativeAccordion = ({ title, driscruption }) => {
    return (
        <div>
            <Accordion sx={{
                boxShadow: 1,
                border: '1px solid #e5eaf2',
                // mb: 2,
                p: 2,
                borderRadius: 2,
                '& .Mui-expanded': {
                    '& .expandedPlus': {
                        display: 'none'
                    },
                    '& .expandedRemove': {
                        display: 'block',
                        '& svg': {
                            color: '#7AB259'
                        }
                    },
                }
            }}>
                <AccordionSummary

                    sx={{
                        '& .expandedRemove': {
                            display: 'none'
                        },
                        '& p': {
                            color: '#111430',
                            fontWeight: 'bold',
                        },
                        '& .Mui-expanded': {
                            '& p': {
                                color: '#7AB259',
                                display: 'block'
                            },
                        }
                    }}
                    expandIcon={<CostumExpandedIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{
                        color: '#5a7184'
                    }}>
                        {driscruption}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default CreativeAccordion