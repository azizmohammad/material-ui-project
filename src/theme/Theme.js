import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#111430',
            yellow: '#FBD062',
            green: '#7AB259',
        },
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'lg'
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '16px',
                    padding: '10px 40px'
                },
            },
            defaultProps: {
                variant: 'contained',
                color: 'primary',
                // disableRipple: true,
            },
        },
    },
});