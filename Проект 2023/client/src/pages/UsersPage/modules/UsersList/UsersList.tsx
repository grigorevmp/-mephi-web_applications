import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { useOnDelete } from './hooks/useOnDelete';
import { useUsers } from './hooks/useUsers';

export function UsersList() {
    const { users, loading } = useUsers();
    const { onDelete } = useOnDelete();

    if (loading) {
        return <LinearProgress color="inherit" />;
    }

    if (!users?.length) {
        return (
            <Box>
                Список пользователей пуст
            </Box>
        );
    }

    return (
        <List aria-label="Список пользователей">
            {users.map((user) => (
                <ListItem
                    key={user.id}
                    secondaryAction={
                        <Button
                            id={String(user.id)}
                            size="large"
                            onClick={onDelete}
                            aria-label={`Удалить пользователя ${user.name}`}>
                            <PersonRemoveIcon />
                        </Button>
                    }>
                    <ListItemText
                        primary={user.name}
                        secondary={user.group} />
                </ListItem>
            ))}
        </List>
    );
}
