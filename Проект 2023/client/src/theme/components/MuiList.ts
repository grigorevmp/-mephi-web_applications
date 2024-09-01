import { createTheme } from '@mui/material/styles';

export const MuiList = createTheme({
    components: {
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                }
            }
        },
        MuiListItemSecondaryAction: {
            styleOverrides: {
                root: {
                    right: 0,
                }
            }
        }
    }
});
