import Box from '@mui/material/Box';
import * as React from 'react';
import { Navigation } from './components/Navigation';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export function DefaultLayout(props: React.PropsWithChildren) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
            <Stack
                direction="row"
                spacing="12px"
                sx={{
                    flex: 1,
                    maxWidth: 768,
                }}
                divider={
                    <Divider orientation="vertical" />
                }>
                <Box
                    sx={{
                        flexBasis: 120,
                    }}>
                    <Navigation />
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        padding: '8px 0',
                    }}>
                    {props.children}
                </Box>
            </Stack>
        </Box>
    );
}
