import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import LocationControl from './LocationControl'
import { stationIcon } from './stationIcon'

export default function StationMap({ visibleStations, selectStation, notify }) {
    return <section className="map-card" aria-label="Interaktywna mapa stacji Orzeł">
        <MapContainer center={[52.278, 21.012]} zoom={12} scrollWheelZoom className="leaflet-map">
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {visibleStations.map(station => <Marker key={station.id} position={[station.lat, station.lng]} icon={stationIcon}>
                <Popup minWidth={280} maxWidth={320}><div className="map-popup"><strong>{station.name}</strong><span>{station.address}</span><b>PB 95: {station.prices[0][1]} zł/l</b><button onClick={() => selectStation(station)}>Szczegóły stacji</button></div></Popup>
            </Marker>)}
            <LocationControl notify={notify} />
        </MapContainer>
    </section>
}
