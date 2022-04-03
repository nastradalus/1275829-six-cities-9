import {useAppSelector} from '../../hooks';
import {NameSpace} from '../../const';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(({[NameSpace.Error]: errorState}) => errorState.error);

  if (error) {
    return (
      <div
        style={{
          position: 'fixed',
          top: '30px',
          right: '30px',
          padding: '10px',
          backgroundColor: '#d96666',
          color: 'white',
          borderRadius: '5px',
        }}
      >
        {error}
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
