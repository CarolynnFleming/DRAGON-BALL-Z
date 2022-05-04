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

return(
    <>
    <h1>Movie List</h1>
    {loading ? (
        <p>Loading Movies...</p>
    ) : (
        <section>
            <label htmlFor="producer">Film Producer:</label>
            <select id="producer" value={producer} onChange={handleProducerChange}>
                <option value="all">All</option>
                <option value="Isao Takahata">Isao Takahata</option>
                <option value="Toru Hara">Toru Hara</option>
                <option valu="Hayao Miyacaki">Hayao Miyazaki</option>
                <option value="Toshio Suzuki">Toshio Suzuki</option>
                <option value="Yoshio Nishimura">Yoshio Nishimura</option>
                <option value="Isao Takahata">Isao Takahata</option>
                <option value="Vincent Maraval">Vincent Maraval</option>
                <option value="Pascal Caucheteux">Pascal Caucheteux</option>
                <option value="Gregoire Sorlat">Gregoire Sorlat</option>
            </select>
            {movies.map((movie) => (
                <article key={movie.id}>
                    <Link to={`/characters/${movie.id}`}>
                        <h3>{movie.title}</h3>
                    </Link>
                    <p>{movie.original_title}</p>
                    <p>{movie.director}</p>
                    <p>Producer: {movie.producer}</p>
                </article>
            ))}
        </section>
    )}
    </>
);
}
