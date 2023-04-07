import React from 'react';
import type { User } from 'api';
import { UserForm } from './modules/UserForm';
import { UsersList } from './components/UsersList';

const users: User[] = [
    {
        id: 1,
        name: 'Petya',
        group: 'M22-512'
    },
    {
        id: 2,
        name: 'Slava',
        group: 'M22-512'
    }
]

export function UsersPage() {
    return (
        <main>
            <UserForm />
            <UsersList users={users} />
        </main>
    );
}
