import { Fuel } from 'lucide-react'
import Modal from '../../components/ui/Modal'

export default function PumpModal({ open, onClose, pump, setPump, onStart }) {
    return <Modal open={open} onClose={onClose}>
        <span className="modal-icon"><Fuel /></span>
        <p className="eyebrow">Tankowanie mobilne</p>
        <h2>Wybierz dystrybutor</h2>
        <p>Upewnij się, że stoisz przy wybranym stanowisku.</p>
        <div className="pump-grid">{[1, 2, 3, 4, 5, 6].map(n => <button className={pump === n ? 'selected' : n === 5 ? 'disabled' : ''} disabled={n === 5} onClick={() => setPump(n)} key={n}><Fuel /><strong>{n}</strong><small>{n === 5 ? 'Zajęty' : 'Dostępny'}</small></button>)}</div>
        <button className="wide-button" onClick={onStart}>Odblokuj dystrybutor {pump}</button>
        <small className="security">Blokada zostanie zdjęta na 60 sekund</small>
    </Modal>
}
