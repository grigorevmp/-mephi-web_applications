import { useRequest, useRequestLazy } from '../hooks/useRequest';
import { instance } from '../instance';
import { User } from '../schema';
import { TRequestParamsWithInput } from '../types';

export type UserCreateRequestInput = Omit<User, 'id'>;

function userCreate(params: TRequestParamsWithInput<UserCreateRequestInput>) {
    return instance.post<User>('users', { ...params.input }, { ...params.config });
}

export function useUserCreateLazy() {
    return useRequestLazy<TRequestParamsWithInput<UserCreateRequestInput>, User>(userCreate);
}

export function useUserCreate(params: TRequestParamsWithInput<UserCreateRequestInput>) {
    return useRequest<TRequestParamsWithInput<UserCreateRequestInput>, User>({
        params,
        service: useUserCreateLazy(),
    })
}
