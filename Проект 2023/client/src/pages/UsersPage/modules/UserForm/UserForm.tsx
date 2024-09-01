import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { FormikConfig, useFormik } from 'formik';
import * as React from 'react';
import type { TFormValues } from './types';
import { useValidationSchema } from './validation';
import { useOnSubmit } from './hooks/useOnSubmit';

export function UserForm() {
    const { validationSchema } = useValidationSchema();
    const { onSubmit } = useOnSubmit();

    const formik = useFormik<TFormValues>({
        initialValues: {
            name: '',
            group: '',
        },
        validationSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit,
    });

    const {
        dirty,
        isSubmitting,
        getFieldProps,
        getFieldMeta,
        handleSubmit
    } = formik;

    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                }}>
                <Stack
                    direction="row"
                    spacing="8px">
                    <TextField
                        label="Имя пользователя"
                        placeholder="Введите имя"
                        required
                        {...getFieldProps('name')}
                        disabled={isSubmitting}
                        error={!!getFieldMeta('name').error}
                        helperText={getFieldMeta('name').error} />
                    <TextField
                        label="Группа"
                        placeholder='Введите группу'
                        {...getFieldProps('group')}
                        disabled={isSubmitting}
                        error={!!getFieldMeta('group').error}
                        helperText={getFieldMeta('group').error} />
                </Stack>
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={!dirty || isSubmitting}
                    aria-label="Создать пользователя">
                    <AddIcon />
                </Button>
            </Box>
        </form>
    );
}