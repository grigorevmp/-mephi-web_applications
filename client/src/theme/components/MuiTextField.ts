import { createTheme } from '@mui/material/styles';

export const MuiTextField = createTheme({
    components: {
        MuiTextField: {
            defaultProps: {
                size: 'small',
                autoComplete: 'off',
            },
        },
    },
});
