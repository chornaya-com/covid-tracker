import React from 'react';
import {Cards} from "./components/cards/Cards";
import {Chart} from "./components/chart/Chart";
import {CountryPicker} from "./components/country/Country";
import styles from "./App.module.css";
import {fetchData} from "./api";
import image from "./images/image.png";

export default function App() {
    const [data, setData] = React.useState({});
    const [country, setCountry] = React.useState("");

    React.useEffect(() => {
        async function fetchedData() {
            const data = await fetchData(country);
            setData(data);
        }

        fetchedData();
    }, [country]);

    const handleCountryChange = React.useCallback((event) => {
        setCountry(event.target.value)
    }, []);

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={"COVID-19"}/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Chart data={data} country={country}/>
        </div>
    );
}