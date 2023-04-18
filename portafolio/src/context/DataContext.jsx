import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export function DataContextProvider(props) {
    const [data, setData] = useState({projects:[],skills:[],courses:[]});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("./data.json")
            const json = await response.json()
            setData(json)
        }
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={data}>
            {props.children}
        </DataContext.Provider>
    );
}
