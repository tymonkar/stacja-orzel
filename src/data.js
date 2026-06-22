export const stations = [
  { id: 1, name: 'Orzeł Modlińska', address: 'ul. Modlińska 8, Warszawa', distance: '1,2 km', open: '24/7', rating: 4.8, lat: 52.2812, lng: 20.9868, services: ['Stop Cafe', 'Paczki', 'LPG', 'EV'], prices: [['PB 95', '6,08'], ['PB 98', '6,50'], ['ON', '7,10'], ['LPG', '4,00'], ['EV', '1,60/kWh']] },
  { id: 2, name: 'Orzeł Jagiellońska', address: 'ul. Jagiellońska 73, Warszawa', distance: '3,6 km', open: '24/7', rating: 4.6, lat: 52.2685, lng: 21.0162, services: ['Stop Cafe', 'LPG'], prices: [['PB 95', '6,13'], ['PB 98', '6,56'], ['ON', '7,07'], ['LPG', '4,04']] },
  { id: 3, name: 'Orzeł Toruńska', address: 'ul. Toruńska 32, Warszawa', distance: '5,1 km', open: '06:00–23:00', rating: 4.7, lat: 52.2917, lng: 21.0441, services: ['Paczki', 'EV'], prices: [['PB 95', '6,05'], ['PB 98', '6,47'], ['ON', '7,04'], ['EV', '1,55/kWh']] },
]

export const products = [
  { id: 1, name: 'Burger Rzemieślnika', category: 'Burgery', price: 24.99, icon: '🍔', tag: 'Bestseller', available: true },
  { id: 2, name: 'Hot-dog klasyczny', category: 'Hot-dogi', price: 9.99, icon: '🌭', tag: 'Popularne', available: true },
  { id: 3, name: 'Hot-dog wegański', category: 'Hot-dogi', price: 12.99, icon: '🌱', available: false },
  { id: 4, name: 'Pizza margherita', category: 'Pizza', price: 17.99, icon: '🍕', available: true },
  { id: 5, name: 'Kawa latte', category: 'Napoje', price: 11.99, icon: '☕', available: true },
  { id: 6, name: 'Lemoniada', category: 'Napoje', price: 8.99, icon: '🥤', available: true },
]

export const rewards = [
  { id: 1, name: 'Kawa 300 ml', points: 500, icon: '☕' },
  { id: 2, name: 'Hot-dog', points: 900, icon: '🌭' },
  { id: 3, name: 'Mycie premium', points: 2400, icon: '🚙' },
]
