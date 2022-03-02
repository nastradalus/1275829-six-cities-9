import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import {City} from '../../types/city';
import {ActiveOfferType, Offer} from '../../types/offer';
import {ref} from '../../types/ref';

type MapProps = {
  city: City,
  places: Offer[],
  selectedPlace: ActiveOfferType,
};

function Map({city, places, selectedPlace}: MapProps): JSX.Element {
  const mapRef: ref = useRef(null);
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
      places.forEach((point) => {
        leaflet
          .marker({
            lat: point.coords[0],
            lng: point.coords[1],
          }, {
            icon: (point.id === selectedPlace)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, places, selectedPlace, city.title]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
