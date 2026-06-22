import { Check, Download } from 'lucide-react'
import Header from '../../components/layout/Header'
import { formatDecimal, money } from '../../utils/format'

export default function PaymentSuccess({ receipt, onViewReceipt, onGoHome }) {
    return <><Header title="Płatność zakończona" /><main className="page payment-page"><section className="payment-success"><div className="success-mark"><Check /></div><p className="eyebrow">Transakcja opłacona</p><h1>Dziękujemy, Anno!</h1><p>Twój e-paragon został zapisany w historii zakupów.</p><div className="success-amount">{money(receipt.amount)}</div><div className="payment-receipt"><span><small>Transakcja</small><strong>{receipt.id}</strong></span><span><small>Stacja</small><strong>{receipt.station.name}</strong></span><span><small>Paliwo</small><strong>{formatDecimal(receipt.liters)} l · {receipt.fuel}</strong></span><span><small>Zdobyte punkty</small><strong className="earned">+{receipt.points} pkt</strong></span></div><button className="wide-button" onClick={onViewReceipt}><Download /> Zobacz e-paragon</button><button className="text-button" onClick={onGoHome}>Wróć na stronę główną</button></section></main></>
}
