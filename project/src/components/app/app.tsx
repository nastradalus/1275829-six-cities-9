import Main from '../../pages/main/main';

type AppProps = {
  cardNumber: number,
  isAuthorized: boolean
};

function App({cardNumber, isAuthorized}: AppProps): JSX.Element {
  return <Main cardNumber={cardNumber} isAuthorized={isAuthorized} />;

}

export default App;
