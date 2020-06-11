import React from "react";
import {CardContent, Grid, Typography, Card as MaterialCard} from "@material-ui/core";
import cx from "classnames";
import CountUp from "react-countup";
import styles from "./Card.module.css";

export function Card(props) {
    const {title, casesNumber, description, type, lastUpdate} = props;

    return (
        <Grid
            item
            component={MaterialCard}
            className={cx(styles.card, {
                [styles.infected]: type === 'infected',
                [styles.recovered]: type === 'recovered',
                [styles.deaths]: type === 'deaths',
            })}
            xs={12}
            md={3}
        >
            <CardContent>
                <Typography color={"textSecondary"} gutterBottom>{title}</Typography>
                <Typography variant={"h5"}>
                    <CountUp
                        start={0}
                        end={casesNumber}
                        separator={","}
                        duration={2}
                    />
                </Typography>
                <Typography color={"textSecondary"}>{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant={"body2"}>{description}</Typography>
            </CardContent>
        </Grid>
    )
}