import leaflet, {Layer} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import {City} from '../../types/city';
import {ActiveOfferType, Offer} from '../../types/offer';

type MapProps = {
  city: City,
  places: Offer[],
  selectedPlace: ActiveOfferType,
};

function Map({city, places, selectedPlace}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markers: Layer[] = [];

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
      places.forEach((point, number) => {
        markers[number] = leaflet
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

    return () => {
      markers.forEach((marker) => {
        if (map) {
          map.removeLayer(marker);
        }
      });
    };
  }, [map, places, selectedPlace, city]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
