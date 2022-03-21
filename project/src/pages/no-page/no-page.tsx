import {AppRoute} from '../../const';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {Link} from 'react-router-dom';

function NoPage(): JSX.Element {
  return (
    <div className="page">
      <Header/>
      <div className="page__main">
        <div className="container" style={{textAlign: 'center'}}>
          <p style={{fontSize: '78px'}}>
            404 Not Found
          </p>
          <p>
            <Link to={AppRoute.Main}>Back to main page</Link>
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default NoPage;
