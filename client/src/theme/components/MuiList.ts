import { createTheme } from '@mui/material/styles';

export const MuiList = createTheme({
    components: {
        MuiListItemSecondaryAction: {
            styleOverrides: {
                root: {
                    right: 0,
                }
            }
        }
    }
});
