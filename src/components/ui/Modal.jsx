import { X } from 'lucide-react'

export default function Modal({ open, onClose, className = '', children }) {
    if (!open) return null
    return <div className="modal-backdrop" onClick={onClose}>
        <section className={`modal ${className}`.trim()} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={onClose} aria-label="Zamknij"><X /></button>
            {children}
        </section>
    </div>
}
