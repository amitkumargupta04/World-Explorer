import { NavLink } from "react-router-dom"

export const CountryCard = ({currEle}) =>{
    const {flags, name, population, region, capital} = currEle;

    return(
        <li className="counrty-card card">
            <div className="container-card bg-white-box">
                <img src={flags.svg} alt="falgs images missed."/>
                <div className="countryInfo">
                    <p className="card-title">{name.common.length > 10 ? name.common.slice(0,10) + "...." : name.common }</p>
                    <p>
                        <span className="card-description">Population:</span>
                        {population.toLocaleString()};
                    </p>
                    <p>
                        <span className="card-description">Region:</span>
                        {region};
                    </p>
                    <p>
                        <span className="card-description">Capital:</span>
                        {capital};
                    </p>
                    <NavLink to={`/country/${name.common}`}>
                        <button>Read More</button>
                    </NavLink>
                </div>
            </div>
        </li>
    )
}