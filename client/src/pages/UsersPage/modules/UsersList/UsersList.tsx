import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { User } from 'api';
import { DataContext } from '../../context/DataContext';

export function UsersList() {
    const { usersService } = React.useContext(DataContext)
    const { data, loading, fetched } = usersService;

    const fetchedRef = React.useRef(false);
    const [users, setUsers] = React.useState<User[] | null>(null);

    React.useEffect(
        () => {
            if (!fetchedRef.current) {
                fetchedRef.current = fetched;
            }
        },
        [fetched]
    )

    React.useEffect(
        () => {
            if (fetched) {
                setUsers(data || null);
            }
        },
        [fetched, data]
    )

    if (!fetchedRef.current && loading) {
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