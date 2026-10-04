import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: "100%",
};

const center = {
  lat: 30.356401, lng: -88.558919
};

const mapsLink = `https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`;

// The Maps library needs BigInt. Very old browsers don't have it, so show a plain link instead.
const supportsBigInt = typeof BigInt !== 'undefined';

const MapFallback = () => (
  <p className="map-fallback">
    <a href={mapsLink} target="_blank" rel="noopener noreferrer">
      View Yazoo Bayou Apartments on Google Maps
    </a>
  </p>
);

const LiveMap = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
  });

  if (loadError) {
    return <MapFallback />;
  }

  // Empty box with the same height as the map, so the page doesn't jump when the map appears
  if (!isLoaded) {
    return <div className="map" aria-hidden="true" />;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      mapContainerClassName="map"
      center={center}
      zoom={15}
    >
      <Marker position={center} title="Yazoo Bayou Apartments" />
    </GoogleMap>
  );
};

const MyMapComponent = () => (supportsBigInt ? <LiveMap /> : <MapFallback />);

export default MyMapComponent;