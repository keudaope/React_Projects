// data.js
export const products = [
  { id: 1, name: "Kannettava tietokone", price: 999 },
  { id: 2, name: "Pöytätietokone", price: 1299 },
  { id: 3, name: "Pelihiiri", price: 79 },
  { id: 4, name: "Mekaaninen näppäimistö", price: 149 },
  { id: 5, name: "Pelikuulokkeet", price: 99 },
  { id: 6, name: "UltraWide-näyttö", price: 499 },
  { id: 7, name: "SSD 1TB", price: 129 },
  { id: 8, name: "Grafiikkakortti RTX 4070", price: 599 },
  { id: 9, name: "Prosessori Intel i7", price: 349 },
  { id: 10, name: "Ergonominen tietokonepöytä", price: 199 },
];

export const users = [
  { id: 1, name: "Matti Meikäläinen", email: "matti.meikalainen@email.com" },
  { id: 2, name: "Liisa Virtanen", email: "liisa.virtanen@email.com" },
  { id: 3, name: "Pekka Korhonen", email: "pekka.korhonen@email.com" },
  { id: 4, name: "Anna Mäkinen", email: "anna.makinen@email.com" },
  { id: 5, name: "Kari Laine", email: "kari.laine@email.com" },
  { id: 6, name: "Sari Nieminen", email: "sari.nieminen@email.com" },
  { id: 7, name: "Juha Heikkinen", email: "juha.heikkinen@email.com" },
  { id: 8, name: "Timo Kallio", email: "timo.kallio@email.com" },
  { id: 9, name: "Marja Salminen", email: "marja.salminen@email.com" },
  { id: 10, name: "Antti Rantanen", email: "antti.rantanen@email.com" },
];

export const links = [
  { name: "Google", url: "https://www.google.com" },
  { name: "React Docs", url: "https://react.dev" },
  { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
  { name: "GitHub", url: "https://github.com" },
  { name: "Stack Overflow", url: "https://stackoverflow.com" },
  { name: "Reddit - r/webdev", url: "https://www.reddit.com/r/webdev/" },
  { name: "Hacker News", url: "https://news.ycombinator.com/" },
  { name: "CSS-Tricks", url: "https://css-tricks.com/" },
  { name: "Smashing Magazine", url: "https://www.smashingmagazine.com/" },
  { name: "TechCrunch", url: "https://techcrunch.com/" },
];

export const images = [
  {
    id: 1,
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
    alt: "Kissa istuu",
  },
  {
    id: 2,
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg",
    alt: "Kultainennoutaja",
  },
  {
    id: 3,
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Felis_catus-cat_on_snow.jpg",
    alt: "Kissa lumessa",
  },
  {
    id: 4,
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
    alt: "Kissa istuu",
  },
  {
    id: 5,
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg",
    alt: "Kultainennoutaja",
  },
];

export const todos = [
  { id: 1, task: "Osta maitoa", completed: false },
  { id: 2, task: "Käy lenkillä", completed: true },
  { id: 3, task: "Lue kirjaa 30 minuuttia", completed: false },
  { id: 4, task: "Siivoa työpöytä", completed: true },
  { id: 5, task: "Käy kaupassa", completed: false },
  { id: 6, task: "Soita ystävälle", completed: true },
  { id: 7, task: "Suunnittele viikkorutiinit", completed: false },
  { id: 8, task: "Pese pyykit", completed: true },
  { id: 9, task: "Katso yksi jakso suosikkisarjaa", completed: false },
  { id: 10, task: "Opettele uusi ohjelmointikonsepti", completed: false },
];

export const buttons = [
  { id: 1, label: "Paina minua" },
  { id: 2, label: "Klikkaa tästä" },
];

export const countries = [
  { name: "Suomi", capital: "Helsinki" },
  { name: "Ruotsi", capital: "Tukholma" },
  { name: "Norja", capital: "Oslo" },
  { name: "Tanska", capital: "Kööpenhamina" },
  { name: "Islanti", capital: "Reykjavik" },
  { name: "Saksa", capital: "Berliini" },
  { name: "Ranska", capital: "Pariisi" },
  { name: "Espanja", capital: "Madrid" },
  { name: "Italia", capital: "Rooma" },
  { name: "Yhdistynyt kuningaskunta", capital: "Lontoo" },
];

export const reviews = [
  { id: 1, text: "Loistava tuote! Suosittelen kaikille.", rating: 5 },
  { id: 2, text: "Ihan ok, mutta odotin enemmän.", rating: 3 },
  { id: 3, text: "Todella huono laatu, en ostaisi uudelleen.", rating: 1 },
  { id: 4, text: "Yllättävän hyvä hinta-laatusuhde.", rating: 4 },
  {
    id: 5,
    text: "Toimii niin kuin pitääkin, mutta ei mitään erikoista.",
    rating: 3,
  },
  { id: 6, text: "Täydellinen ostos! Täsmälleen mitä tarvitsin.", rating: 5 },
  { id: 7, text: "Ei vastannut kuvausta, pettymys.", rating: 2 },
  { id: 8, text: "Erittäin nopea toimitus ja hyvä pakkaus.", rating: 4 },
  { id: 9, text: "En suosittele, hajosi heti käytössä.", rating: 1 },
  { id: 10, text: "Kelpo tuote päivittäiseen käyttöön.", rating: 4 },
];

export const options = [
  { value: "fi", label: "Suomi" },
  { value: "en", label: "Englanti" },
  { value: "se", label: "Ruotsi" },
  { value: "no", label: "Norja" },
  { value: "dk", label: "Tanska" },
  { value: "is", label: "Islanti" },
  { value: "de", label: "Saksa" },
  { value: "fr", label: "Ranska" },
  { value: "ua", label: "Ukraina" },
  { value: "tr", label: "Turkki" },
  { value: "nl", label: "Hollanti" },
];
