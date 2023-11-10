import './Button.css';

const Button = ({ handleClick, buttonText }) => {
  return (
    <div className='btn' onClick={handleClick}>
      {buttonText}
    </div>
  );
};

export default Button;
