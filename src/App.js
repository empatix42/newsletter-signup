import { useAppContext } from './hooks/useAppContext';
import Subscribe from './views/subscribe/Subscribe';
import Success from './views/success/Success';
import './assets/fonts/Roboto-Regular.ttf';
import './assets/fonts/Roboto-Bold.ttf';
import './App.css';

function App() {
  const { isSubscribed } = useAppContext();

  return (
    <div className='App'>
      {!isSubscribed && <Subscribe />}
      {isSubscribed && <Success />}
    </div>
  );
}

export default App;
