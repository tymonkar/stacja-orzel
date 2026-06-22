import { Bitcoin, Check, CreditCard, QrCode, Smartphone, X } from 'lucide-react'
import { money } from '../../utils/format'

const METHODS = [['card', CreditCard, 'Karta', '•••• 4821'], ['blik', Smartphone, 'BLIK', 'Kod 6-cyfrowy'], ['crypto', Bitcoin, 'Krypto', 'BTC lub ETH']]

export default function PaymentMethods({
    amount,
    method,
    setMethod,
    blik,
    setBlik,
    crypto,
    setCrypto,
    rateSeconds,
    error,
    setError,
    onPay,
}) {
    const cryptoRates = { BTC: 268450, ETH: 13420 }

    return <section className="payment-methods">
        <h2>Wybierz metodę płatności</h2>
        <div className="method-grid">{METHODS.map(([id, Icon, title, sub]) => <button key={id} className={method === id ? 'active' : ''} onClick={() => { setMethod(id); setError('') }}><Icon /><strong>{title}</strong><small>{sub}</small>{method === id && <Check />}</button>)}</div>
        {method === 'card' && <div className="payment-detail"><CreditCard /><span><strong>Visa •••• 4821</strong><small>Anna Nowak · karta zapisana</small></span><Check /></div>}
        {method === 'blik' && <label className="blik-field">Kod BLIK<input inputMode="numeric" maxLength="6" value={blik} onChange={e => setBlik(e.target.value.replace(/\D/g, ''))} placeholder="000 000" /><small>Test błędu: wpisz 000000</small></label>}
        {method === 'crypto' && <div className="crypto-payment"><div className="crypto-tabs">{['BTC', 'ETH'].map(item => <button className={crypto === item ? 'active' : ''} onClick={() => setCrypto(item)} key={item}>{item}</button>)}</div><div className="crypto-qr"><QrCode /></div><strong>{(amount / cryptoRates[crypto]).toFixed(crypto === 'BTC' ? 6 : 5)} {crypto}</strong><small>Kurs zablokowany przez {Math.floor(rateSeconds / 60)}:{String(rateSeconds % 60).padStart(2, '0')}</small></div>}
        {error && <div className="payment-error"><X /> {error}</div>}
        <button className="wide-button" onClick={onPay}>Zapłać {money(amount)}</button>
        <p className="payment-security">Płatność jest wyłącznie symulacją. Żadne środki nie zostaną pobrane.</p>
    </section>
}
