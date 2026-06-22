import { Check } from 'lucide-react'
import BottomNav from './BottomNav'

const HIDDEN_NAV_PAGES = ['station', 'fueling', 'food', 'assist']

export default function AppShell({ page, go, toast, children }) {
    const showBottomNav = !HIDDEN_NAV_PAGES.includes(page)
    return <div className="app-shell">
        <div className="desktop-sidebar">
            <div className="brand"><span className="brand-mark">O</span><span>ORZEŁ</span></div>
            <BottomNav page={page} go={go} />
        </div>
        <div className="phone-shell">
            {children}
            {showBottomNav && <BottomNav page={page} go={go} />}
        </div>
        {toast && <div className="toast"><Check /> {toast}</div>}
    </div>
}
