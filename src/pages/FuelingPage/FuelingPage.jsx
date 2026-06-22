import { useEffect, useState } from 'react'
import { ChevronRight, Fuel } from 'lucide-react'
import Header from '../../components/layout/Header'
import { formatDecimal } from '../../utils/format'
import FuelingCounter from './FuelingCounter'
import OrderSummary from './OrderSummary'
import PaymentMethods from './PaymentMethods'
import PaymentProcessing from './PaymentProcessing'
import PaymentSuccess from './PaymentSuccess'

export default function FuelingPage({ session, cancel, completePayment, finish }) {
    const [stage, setStage] = useState('fueling')
    const [liters, setLiters] = useState(0)
    const [method, setMethod] = useState('card')
    const [blik, setBlik] = useState('')
    const [crypto, setCrypto] = useState('BTC')
    const [rateSeconds, setRateSeconds] = useState(180)
    const [error, setError] = useState('')
    const [receipt, setReceipt] = useState(null)
    const amount = liters * session.price
    const pointsEarned = Math.floor(amount)

    useEffect(() => {
        if (stage !== 'fueling') return undefined
        const timer = window.setInterval(() => setLiters(value => {
            const next = Math.min(value + 0.08, 55)
            if (next >= 55) window.setTimeout(() => setStage('summary'), 0)
            return next
        }), 120)
        return () => window.clearInterval(timer)
    }, [stage])

    useEffect(() => {
        if (stage !== 'payment' || method !== 'crypto') return undefined
        const timer = window.setInterval(() => setRateSeconds(value => Math.max(0, value - 1)), 1000)
        return () => window.clearInterval(timer)
    }, [stage, method])

    useEffect(() => {
        if (stage !== 'processing') return undefined
        const timer = window.setTimeout(() => {
            const transaction = completePayment({ ...session, liters, amount, method: method === 'crypto' ? crypto : method, points: pointsEarned })
            setReceipt(transaction)
            setStage('success')
        }, 1600)
        return () => window.clearTimeout(timer)
    }, [stage, amount, completePayment, crypto, liters, method, pointsEarned, session])

    const pay = () => {
        setError('')
        if (method === 'blik' && !/^\d{6}$/.test(blik)) return setError('Wpisz poprawny sześciocyfrowy kod BLIK.')
        if (method === 'blik' && blik === '000000') return setError('Płatność została odrzucona. Wpisz inny kod i spróbuj ponownie.')
        if (method === 'crypto' && rateSeconds === 0) { setRateSeconds(180); return setError('Kurs wygasł. Zablokowaliśmy nowy kurs na 180 sekund.') }
        setStage('processing')
    }

    const handleBack = () => {
        if (stage === 'fueling') cancel()
        else if (stage === 'payment') setStage('summary')
        else setStage('fueling')
    }

    if (stage === 'success') {
        return <PaymentSuccess receipt={receipt} onViewReceipt={() => finish('profile')} onGoHome={() => finish('home')} />
    }

    if (stage === 'processing') return <PaymentProcessing />

    return <><Header title={stage === 'fueling' ? 'Tankowanie w toku' : 'Płatność za paliwo'} back onBack={handleBack} /><main className="page payment-page">
        <section className="fuel-session-head"><span className={stage === 'fueling' ? 'live-dot' : ''}><Fuel /></span><div><p className="eyebrow">Dystrybutor {session.pump}</p><h1>{stage === 'fueling' ? 'Tankujesz PB 95' : 'Podsumowanie tankowania'}</h1><p>{session.station.name} · {formatDecimal(session.price)} zł/l</p></div></section>
        {stage === 'fueling' ? <FuelingCounter liters={liters} amount={amount} onStop={() => setStage('summary')} /> : <>
            <OrderSummary liters={liters} amount={amount} price={session.price} pointsEarned={pointsEarned} />
            {stage === 'summary' ? <button className="wide-button payment-continue" onClick={() => setStage('payment')}>Przejdź do płatności <ChevronRight /></button> : <PaymentMethods
                amount={amount}
                method={method}
                setMethod={setMethod}
                blik={blik}
                setBlik={setBlik}
                crypto={crypto}
                setCrypto={setCrypto}
                rateSeconds={rateSeconds}
                error={error}
                setError={setError}
                onPay={pay}
            />}
        </>}
    </main></>
}
