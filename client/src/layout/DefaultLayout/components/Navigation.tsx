import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { defaultRoutes } from 'routes/defaultRoutes';

export function Navigation() {
    return (
        <nav>
            <List>
                {Object.values(defaultRoutes).map((route) => (
                    <ListItem
                        key={`link-to-${route.path}`}
                        sx={{
                            height: 40,
                        }}>
                        <Link
                            to={route.path}
                            aria-label={route.title}>
                            {route.title}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </nav>
    )
}
