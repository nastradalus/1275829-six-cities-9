import {useEffect, useState} from 'react';
import leaflet from 'leaflet';
import {City} from '../types/city';
import {ref} from '../types/ref';

function useMap(mapRef: ref, city: City) {
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    if (mapRef.current !== null) {
      if (map === null) {
        const instance: leaflet.Map = leaflet.map(mapRef.current, {
          center: {
            lat: city.coords[0],
            lng: city.coords[1],
          },
          zoom: city.zoom,
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
          lat: city.coords[0],
          lng: city.coords[1],
        });
        setMap(map);
      }
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
