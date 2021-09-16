import React, { useState } from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';

export const MapContainer = (props) => {
  const [, setMap] = useState(null);
  const { google } = props;

  const searchNearby = (map, center) => {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesService.OK) {
        // eslint-disable-next-line no-console
        console.log('restaurants>>>', results);
      }
    });
  };

  const onMapReady = (_, map) => {
    setMap(map);
    searchNearby(map, map.center);
  };

  return <Map google={google} centerAroundCurrentLocation onReady={onMapReady} />;
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);