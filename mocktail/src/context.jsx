import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import Loading from "./components/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState("a");
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getDrinks = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${url}${search}`);
        const data = await res.json();
        const drinks = data.drinks
        if (drinks) {
          let newDrink = drinks.map((item) => {
            return {
              id: item.idDrink,
              name: item.strDrink,
              img: item.strDrinkThumb,
              info: item.strAlcoholic,
              glass: item.strGlass,
            };
          });
          setDrinks(newDrink);
        } else {
          setDrinks([]);         
        }
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    };
    getDrinks();
  }, [search]);

  return (
    <AppContext.Provider value={{ setSearch, drinks, loading, search }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
