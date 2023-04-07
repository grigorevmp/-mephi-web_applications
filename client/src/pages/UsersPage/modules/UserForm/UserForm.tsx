import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as React from 'react';
import type { TFormValues } from './types';
import { useValidationSchema } from './validation';

export function UserForm() {
    const { validationSchema } = useValidationSchema();

    const formik = useFormik<TFormValues>({
        initialValues: {
            name: '',
            group: '',
        },
        validationSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values) =>
            console.log(values),
    });

    const {
        dirty,
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
                        placeholder='Введите имя'
                        {...getFieldProps('name')}
                        error={!!getFieldMeta('name').error}
                        helperText={getFieldMeta('name').error} />
                    <TextField
                        placeholder='Введите имя'
                        {...getFieldProps('group')}
                        error={!!getFieldMeta('group').error}
                        helperText={getFieldMeta('group').error} />
                </Stack>
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={!dirty}>
                    <AddIcon />
                </Button>
            </Box>
        </form>
    );
}