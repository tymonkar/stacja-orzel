import { useState } from 'react'
import { ChevronRight, Plus, Search, ShoppingBag, X } from 'lucide-react'
import Header from '../components/layout/Header'
import { products } from '../data'
import { money } from '../utils/format'

export default function FoodPage({ back, cart, setCart, notify }) {
    const [category, setCategory] = useState('Wszystkie')
    const [query, setQuery] = useState('')
    const cats = ['Wszystkie', 'Burgery', 'Hot-dogi', 'Pizza', 'Napoje']
    const shown = products.filter(p => (category === 'Wszystkie' || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase()))
    const count = cart.reduce((a, x) => a + x.qty, 0)
    const total = cart.reduce((a, x) => a + x.price * x.qty, 0)
    const add = p => setCart(old => old.some(x => x.id === p.id) ? old.map(x => x.id === p.id ? { ...x, qty: x.qty + 1 } : x) : [...old, { ...p, qty: 1 }])
    return <><Header title="Stop Cafe" back onBack={back} /><main className="page food-page"><section className="food-welcome"><p className="eyebrow">Przygotujemy na miejscu</p><h1>Co dziś dla Ciebie, Anno?</h1></section><label className="search-box"><Search /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Szukaj w menu" /></label><div className="categories">{cats.map(c => <button className={category === c ? 'active' : ''} onClick={() => setCategory(c)} key={c}>{c}</button>)}</div><section className="featured"><div><span>Bestseller</span><h2>Burger Rzemieślnika</h2><p>Wołowina, cheddar i nasz autorski sos.</p><strong>24,99 zł</strong></div><div className="food-emoji">🍔</div></section><div className="section-head"><h2>Menu</h2><span>{shown.length} pozycji</span></div><div className="product-grid">{shown.map(p => <article className={!p.available ? 'unavailable' : ''} key={p.id}><div className="product-image">{p.icon}{p.tag && <small>{p.tag}</small>}</div><p>{p.category}</p><h3>{p.name}</h3><div><strong>{money(p.price)}</strong><button disabled={!p.available} onClick={() => add(p)} aria-label={`Dodaj ${p.name}`}>{p.available ? <Plus /> : <X />}</button></div>{!p.available && <span className="sold-out">Chwilowo niedostępny</span>}</article>)}</div></main>{count > 0 && <div className="cart-bar"><div><ShoppingBag /><span><strong>{count} {count === 1 ? 'produkt' : 'produkty'}</strong><small>Gotowe za ok. 8 min</small></span></div><button onClick={() => { setCart([]); notify(`Zamówienie opłacone · ${money(total)}`) }}>{money(total)} <ChevronRight /></button></div>}</>
}
