import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import {Offer} from '../../types/offer';
import {useAppSelector} from '../../hooks';

type MapProps = {
  offers: Offer[]
};

function Map({offers}: MapProps): JSX.Element {
  const {city, point: selectedPlace} = useAppSelector(((state) => state));
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
            lat: point.coords[0],
            lng: point.coords[1],
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

export default Map;
