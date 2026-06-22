import { useState } from 'react'
import { Check, Package, QrCode } from 'lucide-react'
import Header from '../components/layout/Header'
import Modal from '../components/ui/Modal'

export default function PackagesPage() {
    const [open, setOpen] = useState(false)
    return <><Header /><main className="page packages-page"><div className="page-heading"><p className="eyebrow">Twoje przesyłki</p><h1>Odbierz po drodze</h1><p>Paczki czekające na stacjach Orzeł.</p></div><article className="package-card"><div className="package-status"><span><Package /></span><div><small>Gotowa do odbioru</small><strong>ORZ-824-196</strong></div><em>2 dni</em></div><div className="package-route"><i /><div><small>Punkt odbioru</small><strong>Orzeł Modlińska</strong><span>ul. Modlińska 8 · 1,2 km</span></div></div><button className="wide-button" onClick={() => setOpen(true)}><QrCode /> Pokaż kod odbioru</button></article><section className="empty-card"><span><Check /></span><h2>Brak innych przesyłek</h2><p>Powiadomimy Cię, kiedy kolejna paczka będzie gotowa.</p></section></main>
        <Modal open={open} onClose={() => setOpen(false)} className="qr-modal">
            <p className="eyebrow">Kod odbioru</p>
            <h2>Pokaż pracownikowi</h2>
            <div className="fake-qr"><QrCode /></div>
            <strong>ORZ-824-196</strong>
            <p>Kod jest ważny przez 10 minut.</p>
        </Modal>
    </>
}
