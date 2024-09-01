import React from 'react';
import type { UsersRequestService } from 'api';

export type TDataContext = {
    usersService: UsersRequestService
}

export const DataContext = React.createContext(
    {} as TDataContext
)
