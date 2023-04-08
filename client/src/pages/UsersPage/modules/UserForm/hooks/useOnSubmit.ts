import { HttpStatusCode } from 'axios'
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
            try {
                const { result, error } = await userCreateService.fetch({
                    input: values
                });

                if (error) {
                    throw error;
                }

                if (!result) {
                    throw new Error('Не удалось запросить список пользователей');
                }

                if (result.status === HttpStatusCode.Created) {
                    usersService.fetch({})
                }
            } catch (error) {
                console.error(error);
            }
        },
        [userCreateService.fetch, usersService.fetch]
    )

    return {
        onSubmit,
    };
}
