import {Profile, Offer} from '../../types/types';
import {memo} from 'react';

type PropertyHostProps = {
  host: Profile,
  offer: Offer,
};

function PropertyHost({host, offer}: PropertyHostProps): JSX.Element {
  const {avatarUrl, name, isPro} = host;
  const {description} = offer;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        {
          isPro
            ?
            <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
              <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
            </div>
            : null
        }
        <span className="property__user-name">{name}</span>
        {
          isPro
            ? <span className="property__user-status">Pro</span>
            : null
        }
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
}

export default memo(PropertyHost);
