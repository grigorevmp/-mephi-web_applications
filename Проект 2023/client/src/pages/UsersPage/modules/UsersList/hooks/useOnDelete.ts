import { useUserDeleteLazy } from 'api';
import * as React from 'react';
import { DataContext } from '../../../context/DataContext';
import { HttpStatusCode } from 'axios';

export function useOnDelete() {
    const { usersService } = React.useContext(DataContext);
    const { fetch } = useUserDeleteLazy();

    const onDelete = React.useCallback(
        async (event: React.MouseEvent<HTMLButtonElement>) => {
            try {
                const { id } = event.currentTarget;

                const numId = Number(id);

                if (Number.isNaN(numId)) {
                    throw new Error('Некорректный идентификатор пользоавтеля');
                }

                const { result, error } = await fetch({
                    input: { id: numId }
                });

                if (error) {
                    throw error;
                }

                if (!result) {
                    throw new Error('Не удалось удалить пользователя');
                }

                if (result.status === HttpStatusCode.Ok) {
                    usersService.fetch({});
                }
            } catch (error) {
                console.error(error);
            }
        },
        [fetch, usersService.fetch]
    )

    return {
        onDelete,
    }
}
