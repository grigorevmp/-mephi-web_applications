import Box from '@mui/material/Box';
import * as React from 'react';
import { Navigation } from './components/Navigation';

export function DefaultLayout(props: React.PropsWithChildren) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    maxWidth: 768,
                }}>
                <Box
                    sx={{
                        flexBasis: 250,
                    }}>
                    <Navigation />
                </Box>
                <Box
                    sx={{
                        flex: 1,
                    }}>
                    {props.children}
                </Box>
            </Box>
        </Box>
    );
}
