import Stack from '@mui/material/Stack';
import React from 'react';
import { DataProvider } from './context/DataContext';
import { UserForm } from './modules/UserForm';
import { UsersList } from './modules/UsersList';

function UsersPage() {
    return (
        <main>
            <Stack spacing="12px">
                <UserForm />
                <UsersList />
            </Stack>
        </main>
    );
}

function UsersPageWithContext() {
    return (
        <DataProvider>
            <UsersPage />
        </DataProvider>
    );
}

export { UsersPageWithContext as UsersPage };
