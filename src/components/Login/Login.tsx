import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import styles from './Login.module.css';
import SuperButton from '../SuperComponents/SuperButton/SuperButton';


export const Login = () => {
    const initialValuesForFormik = {
        name: '',
        secondName: '',
        password: '',
        confirmPassword: '',
        email: '',
        confirmEmail: ''
    };

    const validationSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required(`* Обязательно`),
        secondName: yup.string().typeError('Должно быть строкой').required(`* Обязательно`),
        password: yup.string().typeError('Должно быть строкой').required(`* Обязательно`),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required(`* Обязательно`),
        email: yup.string().email('Введите верный email').required(`* Обязательно`),
        confirmEmail: yup.string().email('Введите верный email').oneOf([yup.ref('email')], 'Email не совпадают').required(`* Обязательно`),
    });


    return (
        <form
        >

            <Formik

                initialValues={initialValuesForFormik}
                validateOnBlur
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={validationSchema}>
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      isValid,
                      handleSubmit,
                      dirty
                  }) =>
                    (<div className={styles.form}>
                        <h1 className={styles.formHeader}>Регистрация</h1>

                        <p>
                            <label htmlFor={'name'}>Имя</label> <br/>
                            <input type={'text'}
                                   className={styles.inputForm}
                                   name={'name'}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.name}
                            />
                        </p>
                        {touched.name && errors.name && <p className={styles.error}>{errors.name}</p>}

                        <p>
                            <label htmlFor={'secondName'}>Фамилия</label> <br/>
                            <input type={'text'}
                                   className={styles.inputForm}
                                   name={'secondName'}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.secondName}
                            />
                        </p>
                        {touched.secondName && errors.secondName && <p className={styles.error}>{errors.secondName}</p>}

                        <p>
                            <label htmlFor={'password'}>Пароль</label> <br/>
                            <input type={'password'}
                                   className={styles.inputForm}
                                   name={'password'}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password}
                            />
                        </p>
                        {touched.password && errors.password && <p className={styles.error}>{errors.password}</p>}

                        <p>
                            <label htmlFor={'confirmPassword'}>Подтвердите пароль</label> <br/>
                            <input type={'password'}
                                   className={styles.inputForm}
                                   name={'confirmPassword'}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.confirmPassword}
                            />
                        </p>
                        {touched.confirmPassword && errors.confirmPassword &&
                            <p className={styles.error}>{errors.confirmPassword}</p>}

                        <p>
                            <label htmlFor={'email'}>Email</label> <br/>
                            <input type={'email'}
                                   className={styles.inputForm}
                                   name={'email'}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.email}
                            />
                        </p>
                        {touched.email && errors.email && <p className={styles.error}>{errors.email}</p>}

                        <p>
                            <label htmlFor={'confirmEmail'}>Подтвердите Email</label> <br/>
                            <input type={'email'}
                                   className={styles.inputForm}
                                   name={'confirmEmail'}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.confirmEmail}
                            />
                        </p>
                        {touched.confirmEmail && errors.confirmEmail &&
                            <p className={styles.error}>{errors.confirmEmail}</p>}


                        <div className={styles.buttonForm}><SuperButton
                            disabled={!isValid && !dirty}
                            // onClick={()=>{handleSubmit()}}
                            callBack={() => {
                                handleSubmit();
                            }}
                            type={'Goodness'}
                            title={'Отправить'}
                        >
                        </SuperButton></div>
                    </div>)
                }
            </Formik>
        </form>
    );
};

