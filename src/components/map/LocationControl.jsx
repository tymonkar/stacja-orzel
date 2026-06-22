import { Navigation } from 'lucide-react'
import { useMap } from 'react-leaflet'

export default function LocationControl({ notify }) {
    const map = useMap()
    const locate = () => {
        if (!navigator.geolocation) return notify('Ta przeglądarka nie obsługuje lokalizacji')
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => map.flyTo([coords.latitude, coords.longitude], 14),
            () => notify('Nie udało się pobrać lokalizacji'),
            { enableHighAccuracy: true, timeout: 8000 },
        )
    }
    return <button type="button" className="locate" onClick={locate}><Navigation size={18} fill="currentColor" /> Moja lokalizacja</button>
}
