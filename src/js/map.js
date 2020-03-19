const loadGoogleMapsApi = require('load-google-maps-api');

class Map {
    static loadGoogleMapsApi() {
        return loadGoogleMapsApi({ key: 'AIzaSyBqYVVsd6Xm1x5oGM2lXvwLLJXKeLUCSlM' });
    }

    static createMap(googleMaps, mapElement) {
        return new googleMaps.Map(mapElement, {
            center: { lat: 48.465, lng: 35.05 },
            zoom: 15
        });
    }
}

export { Map };