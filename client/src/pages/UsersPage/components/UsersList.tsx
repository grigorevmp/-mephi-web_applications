import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import type { User } from 'api';

type UsersListProps = {
    users: User[];
    loading?: boolean;
}

export function UsersList(props: UsersListProps) {
    const { users, loading } = props;

    if (loading) {
        return <LinearProgress color="inherit" />;
    }

    return (
        <List aria-label="Список пользователей">
            {users.map((user) => (
                <ListItem
                    key={user.id}
                    secondaryAction={
                        <Button
                            size="large"
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