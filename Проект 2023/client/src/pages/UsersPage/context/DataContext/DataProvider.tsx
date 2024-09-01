import * as React from 'react';
import { DataContext } from './DataContext';
import { useUsers } from 'api';

export function DataProvider(props: React.PropsWithChildren) {
    const usersService = useUsers({});

    return (
        <DataContext.Provider
            value={{
                usersService,
            }}>
            {props.children}
        </DataContext.Provider>
    );
}
