import React from "react";
import {fetchDailyData} from "../../api";
import {Line, Bar} from "react-chartjs-2";
import styles from "./Chart.module.css"

export function Chart({data: {confirmed, recovered, deaths}, country}) {
    const [dailyData, setDailyData] = React.useState([]);

    React.useEffect(() => {
        async function fetchAPI() {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, [])

    let lineChart = null;

    if (dailyData.length !== 0) {
        lineChart = (
            <Line data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: "Infected",
                    borderColor: "rgba(0, 0, 255, 0.5)",
                    fill: true
                },
                    {
                        data: dailyData.map(({deaths}) => deaths),
                        label: "Deaths",
                        borderColor: "rgba(255, 0, 0, 0.5)",
                        backgroundColor: "rgba(255, 0, 0, 0.5)",
                        fill: true
                    }]
            }}/>
        )
    }

    let barChart = null;

    if (confirmed) {
        barChart = (
            <Bar
                data={{
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [{
                        label: "People",
                        backgroundColor: ["rgba(0, 0, 255, 0.5)", "rgba(0, 255, 0, 0.5)", "rgba(255, 0, 0, 0.5)"],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text: `Current state in ${country}`}
                }}
            />
        )
    }

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    );
}