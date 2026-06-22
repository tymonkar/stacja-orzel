import { Gift, Home, Package, UserRound } from 'lucide-react'

export default function BottomNav({ page, go }) {
    const items = [['home', Home, 'Start'], ['rewards', Gift, 'Nagrody'], ['packages', Package, 'Paczki'], ['profile', UserRound, 'Profil']]
    return <nav className="bottom-nav" aria-label="Główna nawigacja">{items.map(([id, Icon, label]) => <button key={id} className={page === id ? 'active' : ''} onClick={() => go(id)}><Icon /><span>{label}</span></button>)}</nav>
}
