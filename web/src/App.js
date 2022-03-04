// Components
import TitleHeader from './components/TitleHeader';
import SearchForm from './components/SearchForm';
import Footer from './components/Footer';

// CSS
import './App.css';
import TripsDisplay from './components/TripsDisplay';

// UTILS
import {useState , useEffect} from 'react';
import axios from 'axios';

const apiGatewaySearch = 'http://localhost:4500/search';

function App() {

  // React Hook
  const [trips , setTrips] = useState(null);
  const [defaultTrips, setDefaultTrips] = useState(null);

  // Search process
  const onSearchTrip = (searchTrip)=>{
    let arrayStorage = [];
    if(searchTrip !== ''){
      defaultTrips.forEach(element => {
        const title = element.title.toLowerCase();
        const description = element.description.toLowerCase();
         if(title.includes(searchTrip.toLowerCase())){
           arrayStorage.push(element);
         } else if(description.includes(searchTrip.toLowerCase())){{
           arrayStorage.push(element);
         }} else {
           element.tags.forEach(tag => {
             const tagLowerCase = tag.toLowerCase();
             if(tagLowerCase.includes(searchTrip.toLowerCase())){
               arrayStorage.push(element);
             }
           })
         } 
      });
      if(arrayStorage.length === 0){
        setTrips(arrayStorage);
        console.log('not found trips');
      } else {
        setTrips(arrayStorage);
        arrayStorage = [];
      }
    } else {
      setTrips(defaultTrips);
    }

  }

  // get response from API
  useEffect(() =>{
    axios.get(apiGatewaySearch).then((response) => {
      setTrips(response.data);
      setDefaultTrips(response.data);
    })
  } , []);
  if (!trips) return null

  // rendering
  return (
    <div className="App">

      <TitleHeader />
      <SearchForm onSearchTrip={onSearchTrip}/>
      <TripsDisplay trips={trips}/>
      <Footer />

    </div>
  );
}

export default App;
