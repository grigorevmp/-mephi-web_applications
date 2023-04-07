import { ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes }
    from 'react-router-dom';
import { defaultRoutes } from 'routes';
import { theme } from 'theme';
import { DefaultLayout } from 'layout/DefaultLayout';

function App() {
    return (
        <BrowserRouter>
            <DefaultLayout>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Navigate to={defaultRoutes.users.path} />
                        } />
                    {Object.values(defaultRoutes).map((route) =>
                        <Route
                            key={`route-${route.path}`}
                            path={route.path}
                            element={route.component} />
                    )}
                    <Route
                        path="*"
                        element="Некорректный URL-адрес" />
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
