export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };

    getMarkerContent(): string;
}

export default class CustomMap {
    private readonly googleMap: google.maps.Map;

    constructor(divId) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(data: Mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: new google.maps.LatLng(data.location)
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: data.getMarkerContent()
            });
            infoWindow.open(this.googleMap, marker);
        })
    }
}