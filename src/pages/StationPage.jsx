import { useState } from 'react'
import { Check, ChevronRight, CircleHelp, Clock3, Coffee, Fuel, Heart, MapPin, Navigation, Star } from 'lucide-react'
import Header from '../components/layout/Header'
import PumpModal from './StationPage/PumpModal'

export default function StationPage({ station, back, go, notify, startSession }) {
    const [pumpOpen, setPumpOpen] = useState(false)
    const [pump, setPump] = useState(3)
    const startFuel = () => { setPumpOpen(false); startSession(pump) }
    return <><Header title="Szczegóły stacji" back onBack={back} />
        <main className="page station-page">
            <section className="station-hero"><div className="hero-pattern"><span className="hero-logo">ORZEŁ</span><Fuel size={68} /></div><div className="status-badge"><span /> Otwarte 24/7</div></section>
            <section className="station-title"><div><p className="eyebrow">{station.distance} od Ciebie</p><h1>{station.name}</h1><p><MapPin size={16} /> {station.address}</p></div><button className="favorite" aria-label="Dodaj do ulubionych"><Heart /></button></section>
            <div className="rating-row"><Star fill="currentColor" /> <strong>{station.rating}</strong><span>248 opinii</span><span className="dot">•</span><Clock3 /><span>{station.open}</span></div>
            <section className="quick-actions">
                <button className="primary-action" onClick={() => setPumpOpen(true)}><Fuel /><span><strong>Zacznij tankowanie</strong><small>Wybierz dystrybutor</small></span><ChevronRight /></button>
                <div className="action-grid"><button onClick={() => go('food')}><span><Coffee /></span><strong>Stop Cafe</strong><small>Zamów bez kolejki</small></button><button onClick={() => go('assist')}><span><CircleHelp /></span><strong>Potrzebuję pomocy</strong><small>Wezwij obsługę</small></button><button onClick={() => notify('Trasa uruchomiona: dojazd zajmie około 4 min')}><span><Navigation /></span><strong>Nawiguj</strong><small>4 min · 1,2 km</small></button></div>
            </section>
            <section className="card fuel-prices"><div className="section-head compact"><div><p className="eyebrow">Aktualizacja: teraz</p><h2>Ceny paliw</h2></div><span className="live"><i /> Na żywo</span></div>{station.prices.map(([name, price]) => <div className="price-row" key={name}><span className={`fuel-type ${name.replace(' ', '').toLowerCase()}`}>{name}</span><strong>{price} <small>{name === 'EV' ? '' : 'zł/l'}</small></strong></div>)}</section>
            <section className="card services"><h2>Na tej stacji</h2><div>{station.services.map(x => <span key={x}><Check /> {x}</span>)}</div></section>
        </main>
        <PumpModal open={pumpOpen} onClose={() => setPumpOpen(false)} pump={pump} setPump={setPump} onStart={startFuel} />
    </>
}
