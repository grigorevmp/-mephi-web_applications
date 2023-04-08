import * as React from 'react';
import type { User } from 'api';
import { DataContext } from '../../../context/DataContext';

export function useUsers() {
    const { usersService } = React.useContext(DataContext)
    const { result, loading, fetched } = usersService;

    const [users, setUsers] = React.useState<User[] | null>(null);
    const fetchedRef = React.useRef(false);

    React.useEffect(
        () => {
            if (fetched) {
                setUsers(result?.data || null);
            }
        },
        [fetched, result?.data]
    );

    React.useEffect(
        () => {
            if (!fetchedRef.current) {
                fetchedRef.current = fetched;
            }
        },
        [fetched]
    );

    return {
        users,
        loading: !fetchedRef.current && loading
    };
}
