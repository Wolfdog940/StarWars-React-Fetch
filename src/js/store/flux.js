import { NavItem } from "react-bootstrap";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      character: [],
      vehicles: [],
      planets: [],
      favorites: [],
    },
    actions: {
      getCharecters: () => {
        fetch("https://swapi.dev/api/people")
          .then((response) => response.json())
          .then((data) => setStore({ character: data.results }))
          .catch((err) => console.error(err));
      },

      getVehicles: () => {
        fetch("https://swapi.dev/api/vehicles")
          .then((response) => response.json())
          .then((data) => setStore({ vehicles: data.results }))
          .catch((err) => console.error(err));
      },

      getPlanets: () => {
        fetch("https://swapi.dev/api/planets")
          .then((response) => response.json())
          .then((data) => setStore({ planets: data.results }))
          .catch((err) => console.error(err));
      },

      getFavorites: (item) => {
        const store = getStore();
        setStore({ favorites: [...store.favorites, item] });
      },
      deleteFavorites: (i) => {
        const store = getStore();
        const newList = store.favorites.filter((item, index) => index !== i);
        setStore({ favorites: newList });
      },
    },
  };
};

export default getState;
