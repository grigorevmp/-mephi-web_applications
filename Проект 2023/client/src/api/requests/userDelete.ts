import { useRequest, useRequestLazy } from '../hooks/useRequest';
import { instance } from '../instance';
import { User } from '../schema';
import { TRequestParamsWithInput } from '../types';

export type UserDeleteRequestInput = Pick<User, 'id'>;

function userDelete(params: TRequestParamsWithInput<UserDeleteRequestInput>) {
    const { input: { id } } = params;

    return instance.delete<User>(`users/${id}`, { ...params.config });
}

export function useUserDeleteLazy() {
    return useRequestLazy<TRequestParamsWithInput<UserDeleteRequestInput>, User>(userDelete);
}

export function useUserDelete(params: TRequestParamsWithInput<UserDeleteRequestInput>) {
    return useRequest<TRequestParamsWithInput<UserDeleteRequestInput>, User>({
        params,
        service: useUserDeleteLazy(),
    })
}
