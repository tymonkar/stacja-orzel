import { Star } from 'lucide-react'
import { formatDecimal, money } from '../../utils/format'

export default function OrderSummary({ liters, amount, price, pointsEarned }) {
    return <section className="card order-summary">
        <h2>Twoje tankowanie</h2>
        <div><span>Rodzaj paliwa</span><strong>PB 95</strong></div>
        <div><span>Ilość</span><strong>{formatDecimal(liters)} l</strong></div>
        <div><span>Cena za litr</span><strong>{formatDecimal(price)} zł</strong></div>
        <div className="total"><span>Razem</span><strong>{money(amount)}</strong></div>
        <div className="points-preview"><Star fill="currentColor" /> Zyskasz <strong>{pointsEarned} punktów</strong></div>
    </section>
}
