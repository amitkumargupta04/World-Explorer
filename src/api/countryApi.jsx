import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1"
})

//HTTP get method for get the data
export const getCountryData = () =>{
    return api.get("/all?fields=name,flags,population,region,capital,flags")
}

// HTTP get method for individualo cards means show through specific id

export const getCountryDataById = (name) =>{
    return api.get( `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
}