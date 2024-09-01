import { Schema } from 'yup';
import { TFormValues } from '../types';

export type TValidationSchema = Schema<
    Omit<TFormValues, 'group'> & {
        group?: TFormValues['group'] | null;
    }
>;
