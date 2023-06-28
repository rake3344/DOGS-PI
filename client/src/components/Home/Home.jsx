import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getDogs,
    getTemperaments,
    filterByTemperament,
    orderByName,
    orderByWeight,
} from "../../Redux/actions";
import Cards from "../Cards/Cards";
import "./Home.css";
import Paginate from "../Paginate/Paginate";
import Loader from "../Loader/Loader";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

export default function () {
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDogs()).then(() => setIsLoading(false));
        dispatch(getTemperaments());
    }, [dispatch]);

    const allDogs = useSelector((state) => state.dogs);
    const temperaments = useSelector((state) => state.temperaments);

    const [actualPage, setActualPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(6);
    const lastIndex = actualPage * dogsPerPage;
    const firstIndex = lastIndex - dogsPerPage;
    const currentDogs = allDogs?.slice(firstIndex, lastIndex);

    const [orden, setOrden] = useState("");

    const handleFilterTemperament = (e) => {
        e.preventDefault();
        dispatch(filterByTemperament(e.target.value));
    };

    const handleOrderName = (e) => {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setOrden(e.target.value);
    };

    const handleOrderWeight = (e) => {
        e.preventDefault();
        dispatch(orderByWeight(e.target.value));
        setOrden(e.target.value);
    };

    const paginate = (pageNumber) => {
        setActualPage(pageNumber);
    };

    if (isLoading) {
        return (
            <div className="loader">
                <Loader />
            </div>
        );
    } else {
        return (
            <div className="box">
                <Navbar />
                <div>
                    <div className="filters">
                        <select onChange={handleOrderName} className="select">
                            <option value="">Filter By Name</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                        </select>

                        <select onChange={handleOrderWeight} className="select">
                            <option value="">Filter By Weight</option>
                            <option value="Max-Weight">Max</option>
                            <option value="Min-Weight">Min</option>
                        </select>

                        <select
                            onChange={handleFilterTemperament}
                            className="select"
                        >
                            <option value="">Filter By Temperament</option>
                            <option value="All">All</option>
                            {temperaments?.map((temperament) => {
                                return (
                                    <option
                                        value={temperament.name}
                                        key={temperament.id}
                                    >
                                        {temperament.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className="cards">
                        {currentDogs?.map((dog) => {
                            return (
                                <Link to={`/dog/${dog.id}`} className="link2">
                                    <Cards
                                        key={dog.id}
                                        name={dog.name}
                                        image={dog.image}
                                        temperaments={dog.temperaments}
                                        weight={dog.weight}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                    <div className="paginate">
                        <Paginate
                            dogsPerPage={dogsPerPage}
                            allDogs={allDogs?.length}
                            paginate={paginate}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
