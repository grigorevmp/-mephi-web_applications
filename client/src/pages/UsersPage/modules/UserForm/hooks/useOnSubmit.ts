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
            const { data } = await userCreateService.fetch({
                input: values
            });

            if (data) {
                usersService.fetch({})
            }
        },
        [userCreateService.fetch, usersService.fetch]
    )

    return {
        onSubmit,
    };
}
