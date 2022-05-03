import { loadPartialConfig } from "@babel/core";
import { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom'

export default function List() {
    const history = useHistory();
    const location = useLocation();
    const producer = new URLSearchParams(location.search).get('producer') ?? 'all';
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

const handleProducerChange = (event) => {
    history.push(`/?producer=${event.target.value}`);
};

useEffect(() => {
    const fetchMovies = async () => {
setLoading(true);
const producerParams = new URLSearchParams(location.search).get('producer');

const url =
producerParam === 'all' || !producerParams
? 'https://ghibliapi.herokuapp.com/films'
: `https://ghibliapi.herokuapp.com/films?producer=${producerParams}`;

const res = await fetch(url);
const studiolGhibliFilms = await res.json();

setMovies(studiolGhibliFilms)
setLoading(false);
    };
    fetchMovies();
}, [loaction.search]);
}