import { Formik, Field, Form } from 'formik';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { fetchUserSignup } from '../../redux/auth/operations';

const RegistrationForm = ({}) => {
  const dispatch = useDispatch();

  const handleSubmit = async (value) => {
    dispatch(fetchUserSignup(value));
  };

  return (
    <div className={css['container-form']}>
      <h1 className={css['title-form']}> Create account</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form className={css['title-form']}>
          <Field
            className={css['form-field']}
            name="name"
            type="text"
            placeholder="Username"
            autoComplete="username"
          />
          <Field
            className={css['form-field']}
            name="email"
            type="email"
            placeholder="Email address"
            autoComplete="email"
          />
          <p className={css['email-subtitle']}>
            Your email address will be added to the metadata of packages <br />{' '}
            that you publish, so it may be seen publicly.
          </p>

          <Field
            className={css['form-field']}
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <p className={css['password-subtitle']}>
            Minimum of 10 characters and must meet our password guidelines
          </p>
          <button className={css['form-button']} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
