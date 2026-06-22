import L from 'leaflet'

export const stationIcon = L.divIcon({
    className: 'station-map-marker',
    html: '<span aria-hidden="true">O</span>',
    iconSize: [56, 60],
    iconAnchor: [28, 58],
    popupAnchor: [0, -54],
})
