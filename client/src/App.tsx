import { ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes }
    from 'react-router-dom';
import { defaultRoutes } from 'routes';
import { theme } from 'theme';
import { DefaultLayout } from 'layout/DefaultLayout';
import { UsersPage } from 'pages/UsersPage';

function App() {
    return (
        <BrowserRouter>
            <DefaultLayout>
                <Routes>
                    <Route
                        path={defaultRoutes.home}
                        element={
                            <Navigate to={defaultRoutes.users} />
                        } />
                    <Route
                        path={defaultRoutes.users}
                        element={<UsersPage />} />
                </Routes>
            </DefaultLayout>
        </BrowserRouter>
    );
}

function AppWithContext() {
    return (
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    )
}

export { AppWithContext as App };
