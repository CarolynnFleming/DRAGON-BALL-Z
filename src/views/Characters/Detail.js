import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Detail() {
    const [studioGhibli, setStudioghibli] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchMovie = async() => {
            const res = await fetch(
                `https://ghibliapi.herokuapp.com/films/${id}`
            );
            const movieData = await res.json();
            setStudioghibli(movieData);
            setLoading(false);
        };
        fetchMovie();
    }, []);

    return (
    <>
        <h1>Movie Detail</h1>
        <Link to="/">Back to Studio Ghibli Movie List</Link>
        {loading ? (
            <p>Loading Movie...</p>
        ) : (
            <article>
                <h2>{studioGhibli.title}</h2>
                <h2>{studioGhibli.original_title}</h2>
                <img src={studioGhibli.movie_banner} />
                <h4>{studioGhibli.description}</h4>
                <h2>Director: {studioGhibli.director}</h2>
                <p>Producer: {studioGhibli.producer}</p>
                <h2>{studioGhibli.release_date}</h2>
                <p>Characters: {studioGhibli.people}</p>
                

            </article>
        )}
    </>)
}