function getCoords() {
  navigator.geolocation.getCurrentPosition((coords) => {
    console.log(coords.latitude, coords.longitude);
  });
  const { lng, lat } = coords;
  window.location.replace(`/?lng=${lng}&lat=${lat}`);
}

getCoords();
