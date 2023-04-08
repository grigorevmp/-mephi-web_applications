import { useRequest, useRequestLazy } from '../hooks/useRequest';
import { instance } from '../instance';
import { User } from '../schema';
import { TRequestParams, TRequestService } from '../types';

export type UsersRequestService = TRequestService<{}, User[]>;

function users(params: TRequestParams<{}>) {
    return instance.get<User[]>('users', { ...params.config });
}

export function useUsersLazy() {
    return useRequestLazy<TRequestParams<{}>, User[]>(users);
}

export function useUsers(params: TRequestParams<{}>) {
    return useRequest<TRequestParams<{}>, User[]>({
        params,
        service: useUsersLazy(),
    })
}
