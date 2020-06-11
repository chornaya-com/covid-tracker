import React from "react";
import {NativeSelect, FormControl} from "@material-ui/core";
import styles from "./Country.module.css";
import {fetchCountries} from "../../api";

export function CountryPicker({handleCountryChange}) {
    const [fetchedCountries, setFetchedCountries] = React.useState([]);

    React.useEffect(() => {
        async function fetchAPI() {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, []);

    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue={""}
                              onChange={event => handleCountryChange(event.target.value)}>
                    <option value="global">Global</option>
                    {fetchedCountries.map((country, index) => <option key={index}
                                                                      value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    );
}