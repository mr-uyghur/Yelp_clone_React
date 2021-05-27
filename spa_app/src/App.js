import SearchBar from './components/SearchBar/SearchBar'
import BusinessList from './components/BusinessList/BusinessList'
import './App.css';
import Business from './components/Business/Business'

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar/>
      <BusinessList/>
    </div>
  );
}

export default App;
