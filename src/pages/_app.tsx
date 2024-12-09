import { Provider } from 'react-redux';
import { AppProps } from 'next/app'; // Import AppProps type from Next.js
import store from '../app/store';

function App({ Component, pageProps }: AppProps) { // Use AppProps to type the parameters
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
