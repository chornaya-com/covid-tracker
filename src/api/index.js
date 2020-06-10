import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export async function fetchData() {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);

        return {confirmed, recovered, deaths, lastUpdate};

    } catch (error) {

    }
}