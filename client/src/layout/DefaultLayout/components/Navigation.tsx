import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { defaultRoutes } from 'routes';

export function Navigation() {
    return (
        <nav>
            <List>
                <ListItem
                    sx={{
                        height: 40,
                    }}>
                    <Link
                        to={defaultRoutes.users}
                        aria-label='Пользователи'>
                        Пользователи
                    </Link>
                </ListItem>
            </List>
        </nav>
    )
}
