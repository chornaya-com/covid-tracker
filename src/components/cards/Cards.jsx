import React from "react";
import styles from "./Cards.module.css";
import {Card} from "../card/Card";
import {Grid} from "@material-ui/core";


export function Cards({data: {confirmed, recovered, deaths, lastUpdate}}) {
    if (!confirmed || !recovered || !deaths) {
        return "Loading...";
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify={"center"}>
                <Card
                    title={"Infected"}
                    casesNumber={confirmed.value}
                    description={"Number of active cases of COVID-19"}
                    type={"infected"}
                    lastUpdate={lastUpdate}
                />
                <Card
                    title={"Recovered"}
                    casesNumber={recovered.value}
                    description={"Number of recoveries from COVID-19"}
                    type={"recovered"}
                    lastUpdate={lastUpdate}
                />
                <Card
                    title={"Deaths"}
                    casesNumber={deaths.value}
                    description={"Number of deaths from COVID-19"}
                    type={"deaths"}
                    lastUpdate={lastUpdate}
                />
            </Grid>
        </div>
    );
}