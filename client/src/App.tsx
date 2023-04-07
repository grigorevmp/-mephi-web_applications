import React from 'react';
import { BrowserRouter, Navigate, Route, Routes }
    from 'react-router-dom';
import { DefaultLayout } from 'layout/DefaultLayout';
import { defaultRoutes } from 'routes';
import { UsersPage } from 'pages/UsersPage';

export function App() {
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
