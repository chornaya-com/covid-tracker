import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export async function fetchData() {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);

        return {confirmed, recovered, deaths, lastUpdate};

    } catch (error) {

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

    }
}