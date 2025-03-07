import { createContext, useEffect, useReducer, useState } from "react";

export const DataContext = createContext();
export const DataContextDispatchProvider = createContext();

function DataProvider({ children }) {
    const [allData, setAllData] = useState([]);

    const updateDataBase = async (id) => {
        try {
            const foundData = allData.find((item) => item.id === id);

            const response = await fetch(`http://localhost:3000/characters/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isFave: true }),
            });
            const changedChar = await response.json()

            setAllData(prev => prev.map(item => item.id === id ? changedChar : item))

        } catch (error) {
            console.log(error);

        }
    }


    const dataReducer = (state, { type, payload }) => {
        switch (type) {
            case 'alive':
                return allData.filter(item => item.status === "Alive");
            case 'fave':
                return allData.filter(item => item.isFave);
            case 'addToFave':
                updateDataBase(payload)
                return state
            default:
                return allData;
        }
    };

    const [state, dispatch] = useReducer(dataReducer, []);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("http://localhost:3000/characters");
                const data = await res.json();

                setAllData(data);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, []);

    return (
        <DataContext.Provider value={{ state, allData }}>
            <DataContextDispatchProvider.Provider value={{ dispatch }}>
                {children}
            </DataContextDispatchProvider.Provider>
        </DataContext.Provider>
    );
}

export default DataProvider;
