import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export async function fetchData(country) {
    let changeableURL = url;

    if (country) {
        changeableURL = `${url}/countries/${country}`
    }

    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableURL);

        return {confirmed, recovered, deaths, lastUpdate};

    } catch (error) {
        console.log(error);
    }
}

export async function fetchDailyData() {
    try {
        const {data} = await axios.get(`${url}/daily`);

        return data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

    } catch (error) {
        console.log(error);
    }
}

export async function fetchCountries() {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`)
        return countries.map(country => country.name);
    } catch (error) {
        console.log(error);
    }
}