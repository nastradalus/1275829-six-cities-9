import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {memo, useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import {Offer} from '../../types/types';
import {useAppSelector} from '../../hooks';
import {NameSpace} from '../../const';

type MapProps = {
  offers: Offer[],
};

function Map({offers}: MapProps): JSX.Element {
  const city = useAppSelector((({[NameSpace.Offers]: offersState}) => offersState.city));
  const selectedPlace = useAppSelector((({[NameSpace.Point]: pointState}) => pointState.activePoint));
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: './img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: './img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

  useEffect(() => {
    if (map) {
      const markers = offers.map((point, number) =>
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: (point.id === selectedPlace)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map));

      return () => {
        markers.forEach((marker) => {
          if (map) {
            map.removeLayer(marker);
          }
        });
      };
    }
  }, [map, offers, selectedPlace, city]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default memo(Map);
