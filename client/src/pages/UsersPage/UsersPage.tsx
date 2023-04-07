import Stack from '@mui/material/Stack';
import React from 'react';
import { useUsers } from 'api';
import { UserForm } from './modules/UserForm';
import { UsersList } from './components/UsersList';

export function UsersPage() {
    const { data, loading } = useUsers({});

    return (
        <main>
            <Stack spacing="12px">
                <UserForm />
                <UsersList
                    users={data || []}
                    loading={loading} />
            </Stack>
        </main>
    );
}
