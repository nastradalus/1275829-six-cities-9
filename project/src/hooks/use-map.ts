import {RefObject, useEffect, useState} from 'react';
import leaflet from 'leaflet';
import {City} from '../types/types';

function useMap(mapRef: RefObject<HTMLElement>, city: City) {
  const [map, setMap] = useState<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null) {
      if (map === null) {
        const instance: leaflet.Map = leaflet.map(mapRef.current, {
          center: {
            lat: city.location.latitude,
            lng: city.location.longitude,
          },
          zoom: city.location.zoom,
        });

        leaflet
          .tileLayer(
            'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
            {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            },
          )
          .addTo(instance);

        setMap(instance);
      } else {
        map.setView({
          lat: city.location.latitude,
          lng: city.location.longitude,
        });
        setMap(map);
      }
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
