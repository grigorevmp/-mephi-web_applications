import type { FormikConfig } from 'formik';
import * as React from 'react';
import { useUserCreateLazy } from 'api';
import { DataContext } from '../../../context/DataContext';
import type { TFormValues } from '../types';

export function useOnSubmit() {
    const { usersService } = React.useContext(DataContext)
    const userCreateService = useUserCreateLazy();

    const onSubmit: FormikConfig<TFormValues>['onSubmit'] = React.useCallback(
        async (values) => {
            await userCreateService.fetch({
                input: values
            });
        },
        []
    )

    React.useEffect(
        () => {
            if (userCreateService.data) {
                usersService.fetch({});
            }
        },
        [
            userCreateService.data,
            usersService.fetch
        ]
    );

    return {
        onSubmit,
    };
}
