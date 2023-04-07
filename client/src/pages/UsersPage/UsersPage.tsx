import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import type { User } from 'api';

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
            <List>
                {users.map((user) => (
                    <ListItem
                        secondaryAction={
                            <Button>
                                <PersonRemoveIcon />
                            </Button>
                        }>
                        <ListItemText
                            primary={user.name}
                            secondary={user.group} />
                    </ListItem>
                ))}
            </List>
        </main>
    );
}
