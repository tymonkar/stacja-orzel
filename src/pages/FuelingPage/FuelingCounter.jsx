import { formatDecimal, money } from '../../utils/format'

export default function FuelingCounter({ liters, amount, onStop }) {
    return <section className="fuel-counter">
        <p>Zatankowano</p>
        <strong>{formatDecimal(liters)} <small>l</small></strong>
        <div />
        <p>Do zapłaty</p>
        <b>{money(amount)}</b>
        <button className="stop-fueling" disabled={liters < .5} onClick={onStop}><span /> Zakończ tankowanie</button>
        <small>Symulacja trwa do naciśnięcia przycisku</small>
    </section>
}
