import { useCallback, useState } from 'react'
import AppShell from './components/layout/AppShell'
import { useToast } from './hooks/useToast'
import { stations } from './data'
import AssistPage from './pages/AssistPage'
import FoodPage from './pages/FoodPage'
import FuelingPage from './pages/FuelingPage/FuelingPage'
import HomePage from './pages/HomePage'
import PackagesPage from './pages/PackagesPage'
import ProfilePage from './pages/ProfilePage'
import RewardsPage from './pages/RewardsPage'
import StationPage from './pages/StationPage'

export default function App() {
    const [page, setPage] = useState('home')
    const [selected, setSelected] = useState(stations[0])
    const [points, setPoints] = useState(3240)
    const [cart, setCart] = useState([])
    const [fuelSession, setFuelSession] = useState(null)
    const [transactions, setTransactions] = useState([])
    const { toast, notify } = useToast()

    const go = next => { setPage(next); window.scrollTo({ top: 0, behavior: 'smooth' }) }

    const startFueling = pump => {
        const price = Number(selected.prices[0][1].replace(',', '.'))
        setFuelSession({ station: selected, pump, fuel: 'PB 95', price })
        go('fueling')
    }

    const completePayment = useCallback(payment => {
        const transaction = { ...payment, id: `ORZ-${Date.now().toString().slice(-8)}`, status: 'paid', date: new Date().toISOString() }
        setTransactions(items => [transaction, ...items])
        setPoints(value => value + transaction.points)
        return transaction
    }, [])

    const finishFueling = destination => { setFuelSession(null); go(destination) }

    const selectStation = s => { setSelected(s); go('station') }

    const screens = {
        station: () => <StationPage station={selected} back={() => go('home')} go={go} notify={notify} startSession={startFueling} />,
        fueling: () => fuelSession && <FuelingPage session={fuelSession} cancel={() => finishFueling('station')} completePayment={completePayment} finish={finishFueling} />,
        food: () => <FoodPage back={() => go('station')} cart={cart} setCart={setCart} notify={notify} />,
        assist: () => <AssistPage back={() => go('station')} notify={notify} />,
        rewards: () => <RewardsPage points={points} setPoints={setPoints} notify={notify} transactions={transactions} />,
        packages: () => <PackagesPage />,
        profile: () => <ProfilePage points={points} notify={notify} transactions={transactions} />,
        home: () => <HomePage go={go} points={points} notify={notify} selectStation={selectStation} />,
    }

    const screen = (screens[page] || screens.home)()

    return <AppShell page={page} go={go} toast={toast}>{screen}</AppShell>
}
