import { AxiosError } from 'axios';
import * as React from 'react';
import { TRequest, TRequestParams, TRequestService } from '../types';

export function useRequestLazy<P extends TRequestParams<{}>, R>(request: TRequest<P, R>) {
    const [data, setData] = React.useState<TRequestService<P, R>['data']>(null);
    const [loading, setLoading] = React.useState<TRequestService<P, R>['loading']>(false);
    const [error, setError] = React.useState<TRequestService<P, R>['error']>(null);
    const [fetched, setFetched] = React.useState<boolean>(false);
    const [called, setCalled] = React.useState<boolean>(false);

    const fetch: TRequestService<P, R>['fetch'] = React.useCallback(
        async (params: P) => {
            let _data = null;
            let _error = null;
            let _fetched = false;
            let _called = true;
            let _loading = true;

            try {
                setData(_data);
                setError(_error);
                setFetched(_fetched);
                setCalled(_called);
                setLoading(_loading);

                const result = await request(params);
                _data = result.data;

                setData(_data);
            } catch (error) {
                if (error instanceof AxiosError) {
                    _error = error;
                } else {
                    _error = new Error('Произошла непредвиденная ошибка');
                }

                setError(_error);
            } finally {
                _loading = false;
                _fetched = true;

                setLoading(_loading);
                setFetched(_fetched);
            }

            return {
                data: _data,
                loading: _loading,
                error: _error,
                fetch,
                fetched: _fetched,
                called: _called,
            }
        },
        [request]
    );

    return {
        data,
        loading,
        error,
        fetch,
        fetched,
        called,
    };
}

type UseRequestParams<P extends TRequestParams<{}>, R> = {
    service: TRequestService<P, R>;
    params: P;
};

export function useRequest<P extends TRequestParams<{}>, R>(
    { service, params }: UseRequestParams<P, R>
) {
    React.useEffect(
        () => {
            service.fetch(params)
        },
        []
    );

    return service;
}
