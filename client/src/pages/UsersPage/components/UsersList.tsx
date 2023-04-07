import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import type { User } from 'api';

type UsersListProps = {
    users: User[];
}

export function UsersList(props: UsersListProps) {
    const { users } = props;

    return (
        <List aria-label="Список пользователей">
            {users.map((user, i) => (
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