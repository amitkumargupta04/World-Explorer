
import { useState, useTransition, useEffect } from 'react';
import { getCountryData } from '../api/countryApi';
import Loader from '../components/UI/Loader';
import { CountryCard } from '../components/UI/CountryCard';
import { SearchFilter } from '../components/UI/SearchFilter';

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
 // state for search filter
 const[search, setSearch] = useState();
 const[filter, setFilter] = useState("All");
 
  useEffect(() => {
    startTransition(async() =>{
      const res = await getCountryData(); // jaha se data aa rha api se 
      //console.log("API response", res);
      setCountries(res.data); // api me data variables se data store means total data ab countries me chala gaya
    })
  }, [])
  

  if(isPending) return <Loader/>

    const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  // const filterRegion = (country) => {
  //   if (filter === "all") return country;
  //   return country.region === filter;
  // };

  // here is the main logic
  const filterCountries = countries.filter(
    (country) => searchCountry(country)
  );
  return (
    <section className='country-section'>
      <SearchFilter filter={filter} setFilter = {setFilter}
       search = {search} setSearch = {setSearch} countries={countries}
       setCountries={setCountries}
      />
      <ul className='grid grid-four-cols'>
        {
          filterCountries.map((currEle, index) =>{
            return(
              <CountryCard currEle={currEle} key={index}/> // props pass kar dia components me
            )
          })
        }
      </ul>
    </section>
  )
}

export default Country;