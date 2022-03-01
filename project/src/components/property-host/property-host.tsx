import {Host} from '../../types/offer';

type PropertyHostProps = {
  host: Host
};

function PropertyHost({host}: PropertyHostProps): JSX.Element {
  const {avatar, name, rang, offerDescription} = host;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={avatar} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="property__user-name">{name}</span>
        <span className="property__user-status">{rang}</span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {offerDescription}
        </p>
      </div>
    </div>
  );
}

export default PropertyHost;
