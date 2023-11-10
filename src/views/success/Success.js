import './Success.css';
import IconSuccess from '../../assets/images/icon-success.svg';
import { useAppContext } from '../../hooks/useAppContext';
import Button from '../../components/button/Button';

const Success = () => {
  const { email, dispatch } = useAppContext();

  const handleClick = () => {
    dispatch({ type: 'SET_IS_SUBSCRIBED', payload: false });
    dispatch({ type: 'SET_EMAIL_VALUE', payload: '' });
  };

  return (
    <div className='success-container'>
      <img src={IconSuccess} alt='success icon' />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <span className='text-bold'>{email}</span>. Please
        open it and click the button inside to confirm your subscription.
      </p>
      <Button handleClick={handleClick} buttonText='Dismiss message'/>
    </div>
  );
};

export default Success;
