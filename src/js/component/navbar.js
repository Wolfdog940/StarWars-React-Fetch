import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const { store, actions } = useContext(Context);
  
  return (
    <nav className="navbar navbar-light bg-dark m-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">React Boilerplate</span>
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
          </button>
          <ul
            
          
            className="dropdown-menu bg-warning "
            aria-labelledby="dropdownMenuButton1"
          >
            {store.favorites.map((item, i) => (
              <li className="d-flex" key={i}>
                <a className="dropdown-item d-inline" href="#">
                  {item}
                </a>
                <i
                  className="fas fa-trash-alt m-0"
                  onClick={() => {
                    actions.deleteFavorites(i);
                  }}
                ></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
