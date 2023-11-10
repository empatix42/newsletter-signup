import IconCheck from '../../assets/images/icon-list.svg';
import BackgroundBanner from '../../assets/images/illustration-sign-up-desktop.svg';
import BackgroundMobileBanner from '../../assets/images/illustration-sign-up-mobile.svg';
import Form from '../../components/form/Form';
import { useMediaQuery } from 'react-responsive';
import './Subscribe.css';

const Subscribe = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <main className='subscribe-container'>
      {isMobile && (
        <div>
          <img src={BackgroundMobileBanner} alt='background banner' />
        </div>
      )}
      <div className='subscribe__content'>
        <h1>Stay updated!</h1>
        <h4>Join 60,000+ product managers receiving monthly updates on:</h4>
        <ul>
          <li>
            <img src={IconCheck} alt='icon check' />
            <p>Product discovery and building what matters</p>
          </li>
          <li>
            <img src={IconCheck} alt='icon check' />
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li>
            <img src={IconCheck} alt='icon check' />
            <p>And much more!</p>
          </li>
        </ul>
        <Form />
      </div>
      {!isMobile && (
        <div className='subscribe__image'>
          <img src={BackgroundBanner} alt='background banner' />
        </div>
      )}
    </main>
  );
};

export default Subscribe;
