import { ArrowLeft, Bell, Star } from 'lucide-react'

export default function Header({ title, back, onBack, points = 3240 }) {
    return <header className="topbar">
        {back ? <button className="icon-button" onClick={onBack} aria-label="Wróć"><ArrowLeft /></button> : <div className="brand"><span className="brand-mark">O</span><span>ORZEŁ</span></div>}
        {title && <strong className="header-title">{title}</strong>}
        <div className="header-actions"><span className="points-pill"><Star size={14} fill="currentColor" /> {points}</span><button className="icon-button" aria-label="Powiadomienia"><Bell /></button></div>
    </header>
}
