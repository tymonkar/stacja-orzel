import { useState } from 'react'
import { ChevronRight, Gift, Search, Star } from 'lucide-react'
import Header from '../components/layout/Header'
import StationMap from '../components/map/StationMap'
import { stations } from '../data'

export default function HomePage({ go, selectStation, points, notify }) {
    const [query, setQuery] = useState('')
    const filtered = stations.filter(s => `${s.name} ${s.address}`.toLowerCase().includes(query.toLowerCase()))
    const nearbyStations = filtered.slice(0, 2)
    return <>
        <Header points={points} />
        <main className="home-page">
            <section className="welcome"><div><p className="eyebrow">Dzień dobry, Anno</p><h1>Dokąd dziś jedziemy?</h1></div><div className="avatar">AN</div></section>
            <label className="search-box"><Search /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Szukaj stacji lub adresu" /></label>
            <div className="home-dashboard">
                <StationMap visibleStations={filtered} selectStation={selectStation} notify={notify} />
                <aside className="nearby-panel"><section className="section-head"><div><p className="eyebrow">W pobliżu</p><h2>Najbliższe stacje</h2></div><button>Zobacz wszystkie</button></section>
                    <div className="station-strip">{nearbyStations.map(s => <button className="station-card" key={s.id} onClick={() => selectStation(s)}><div className="station-card-top"><span className="mini-logo">O</span><span className="distance">{s.distance}</span></div><strong>{s.name}</strong><span>{s.address}</span><div className="station-meta"><span><Star size={14} fill="currentColor" /> {s.rating}</span><span className="open">Otwarte {s.open}</span></div></button>)}</div>
                    <button className="promo-card" onClick={() => go('rewards')}><span className="promo-icon"><Gift /></span><span><small>Tylko w aplikacji</small><strong>Podwójne punkty za paliwa Premium</strong><em>Sprawdź promocję</em></span><ChevronRight /></button>
                </aside>
            </div>
        </main>
    </>
}
