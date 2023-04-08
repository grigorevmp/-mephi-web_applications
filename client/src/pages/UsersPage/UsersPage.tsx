import Stack from '@mui/material/Stack';
import React from 'react';
import { UserForm } from './modules/UserForm';
import { UsersList } from './components/UsersList';
import { DataProvider } from './context/DataContext';

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
