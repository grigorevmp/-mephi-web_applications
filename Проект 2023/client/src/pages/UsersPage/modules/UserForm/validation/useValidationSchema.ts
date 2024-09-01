import { object, string } from 'yup';
import type { TValidationSchema } from './types';

export function useValidationSchema() {
    const validationSchema: TValidationSchema = object({
        name: string().required('Обязательно для заполнения'),
        group: string().notRequired(),
    });

    return {
        validationSchema,
    };
}
