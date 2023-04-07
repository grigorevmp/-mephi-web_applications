import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { defaultRoutes } from 'routes';

export function Navigation() {
    return (
        <nav>
            <List>
                <ListItem>
                    <Link to={defaultRoutes.users}>
                        Пользователи
                    </Link>
                </ListItem>
            </List>
        </nav>
    )
}