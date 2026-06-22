import Header from '../../components/layout/Header'

export default function PaymentProcessing() {
    return <><Header title="Autoryzacja płatności" /><main className="page payment-page"><section className="processing-card"><div className="spinner" /><p className="eyebrow">Bezpieczna płatność</p><h1>Przetwarzamy transakcję</h1><p>Nie zamykaj aplikacji. Zwykle trwa to kilka sekund.</p></section></main></>
}
