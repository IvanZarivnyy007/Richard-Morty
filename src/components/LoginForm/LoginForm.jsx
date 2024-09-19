import { Formik, Field, Form } from 'formik';
import css from './LoginForm.module.css';
import { fetchUserLogin } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const LoginForm = ({}) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(fetchUserLogin(values));
  };

  return (
    <div className={css['form-container']}>
      <h1 className={css['title-form']}>Sign Up</h1>
      <Formik
        initialValues={{ name: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form className={css['form']}>
          <Field
            className={css['form-field']}
            name="name"
            type="text"
            placeholder="Username"
          />
          <a href="http://">Forgot password?</a>
          <Field
            name="password"
            type="text"
            className={css['form-field']}
            placeholder="Password"
          />

          <button className={css['form-button']} type="submit">
            Submit
          </button>
          <a href="http://">Create Account</a>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
