import React from 'react';
import {useFormik} from 'formik';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useAppDispatch, useAppSelector} from '../../redux/redux-store';
import {logInTC} from '../../redux/auth-Reducer';
import {Navigate} from 'react-router-dom';


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


export const Login = () => {

    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: values => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length <= 3) {
                errors.password = 'Password is too short'
            }
            return errors
        },
        onSubmit: values => {
            formik.resetForm()
            dispatch(logInTC(values))
        },
    })


    if (isLoggedIn) {
        return <Navigate to={'/'}/>
    } //Редирект перед return из-за правил использования хуков


    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>

            <FormControl>
                <FormLabel>
                    <p>Для входа зарегистрируйтесь
                        <a style={{textDecoration: 'none', color: '#1b5e20', fontWeight: 'bold'}}
                           href={'https://social-network.samuraijs.com/'}
                           target={'_blank'}> здесь
                        </a>
                    </p>
                    <p>или используйте учетные данные тестовой учетной записи:</p>
                    <p>Email: <span style={{fontWeight: 'bold'}}>free@samuraijs.com</span></p>
                    <p>Password: <span style={{fontWeight: 'bold'}}>free</span></p>
                </FormLabel>
                <form onSubmit={formik.handleSubmit}>
                    <FormGroup>
                        <TextField label="Email"
                                   margin="normal"
                                   name={'email'}
                                   onChange={formik.handleChange}
                                   value={formik.values.email}
                                   onBlur={formik.handleBlur}

                        />
                        {formik.errors.email && formik.touched.email &&
                            <div style={{color: 'red'}}> {formik.errors.email}</div>}
                        <TextField type="password"
                                   label="Password"
                                   margin="normal"
                                   name={'password'}
                                   onChange={formik.handleChange}
                                   value={formik.values.password}
                                   onBlur={formik.handleBlur}
                        />
                        {formik.errors.password && formik.touched.password &&
                            <div style={{color: 'red'}}> {formik.errors.password}</div>}

                        <FormControlLabel label={'Remember me'}
                                          control={<Checkbox
                                              checked={formik.values.rememberMe} {...formik.getFieldProps('rememberMe')} />}/>

                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Login
                        </Button>
                    </FormGroup>
                </form>
                <FormLabel>
                    <p>Рад приветствовать dас в своей социальной сети </p>
                    <p>детальнее ознакомиться с моими проектамы вы можете <a
                        style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}
                        href={'https://vadimlyutsko.github.io/Portfolio/'}
                        target={'_blank'}> здесь
                    </a>
                    </p>

                </FormLabel>
            </FormControl>
        </Grid>
    </Grid>
}