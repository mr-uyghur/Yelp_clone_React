import SearchBar from './components/SearchBar/SearchBar'
import BusinessList from './components/BusinessList/BusinessList'
import './App.css';
import Business from './components/Business/Business'

var business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

let businesses = [business,business,business,business,business,business]

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar/>
      <BusinessList  businesses = {businesses}/>
    </div>
  );
}

export default App;
