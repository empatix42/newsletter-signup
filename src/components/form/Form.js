import { useCallback, useState } from 'react';
import './Form.css';
import Button from '../button/Button';
import { useAppContext } from '../../hooks/useAppContext';

const Form = () => {
  const { email, dispatch } = useAppContext();
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = useCallback((email) => {
    const emailRegexp = /\S+@\S+\.\S+/;

    return emailRegexp.test(email);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    email.length > 0 && validateEmail(email)
      ? dispatch({ type: 'SET_IS_SUBSCRIBED', payload: true })
      : setIsEmailValid(false);
  };

  return (
    <form className='subscription-form' onSubmit={handleSubmit}>
      <label>
        <h5>
          <span>Email address</span>
          <span className={!isEmailValid ? 'error-message' : 'hidden'}>Valid email required</span>
        </h5>

        <input
          className={!isEmailValid ? 'invalid' : ''}
          placeholder='email@company.com'
          value={email}
          type='text'
          name='name'
          onChange={(e) => dispatch({ type: 'SET_EMAIL_VALUE', payload: e.target.value })}
        />
      </label>
      <Button handleClick={handleSubmit} buttonText='Subscribe to monthly newsletter' />
    </form>
  );
};

export default Form;
