import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Formik } from 'formik';

import { login } from '../../../../../redux/actions/loginActions';
import useDecode from '../../../hooks/useDecode';

import style from './login.module.css';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

const Login: React.FC = (props: any): JSX.Element => {
  const { isLogged } = useDecode(props.loginReducer.login);
  const [type, setType] = useState(true);

  const handleLook = (): void => {
    setType(!type);
  };

  return (
    <Fragment>
      {isLogged ? (
        <Redirect to="/home" />
      ) : (
        <div className={`${style.login} size`}>
          {props.loginReducer.error && (
            <ErrorMessage error="Tu email ó password no coinciden con los registrados en nuestra base de datos" />
          )}
          <div className={style.login__layer}></div>
          <div className={`${style.login__container} container`}>
            <p className={style.login__container__title}>Iniciar Sesión</p>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={(values, { resetForm }) => {
                props.login(values);
                resetForm();
              }}
              validate={(values) => {
                let errors: any = {};

                if (!values.email) {
                  errors.email = 'Por favor ingresa un correo electronico';
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                  errors.email =
                    'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo';
                }

                if (!values.password) {
                  errors.password = 'Por favor ingresa su password';
                }

                return errors;
              }}
            >
              {({ values, errors, touched, handleSubmit, handleChange, handleBlur }: any) => (
                <form className={style.login__container__form} onSubmit={handleSubmit}>
                  <input
                    className={style.input}
                    type="email"
                    name="email"
                    placeholder="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && <p className={style.error}>{errors.email}</p>}
                  <div className={style.continer__password}>
                    <input
                      className={`${style.input__password}`}
                      type={type ? 'password' : 'text'}
                      name="password"
                      placeholder="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span onClick={handleLook} className={style.span__input}>
                      {type ? (
                        <AiFillEyeInvisible color="rgba(0, 0, 0, 0.5)" />
                      ) : (
                        <AiFillEye color="rgba(0, 0, 0, 0.5)" />
                      )}
                    </span>
                  </div>
                  {touched.password && errors.password && (
                    <p className={style.error}>{errors.password}</p>
                  )}
                  {!props.loginReducer.loading ? (
                    <button className={style.submit} type="submit">
                      Iniciar sesión
                    </button>
                  ) : (
                    <button className={style.submit} type="submit">
                      Cargando...
                    </button>
                  )}
                </form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </Fragment>
  );
};
const mapStateToProps = ({ loginReducer }: any) => {
  return { loginReducer };
};

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
