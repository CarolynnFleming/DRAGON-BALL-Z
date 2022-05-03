import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Detail() {
    const [studioGhibli, setStudioghibli] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchMovie = async() => {
            const res = await fetch(
                `https://ghibliapi.herokuapp.com/films`
            )
        }
    })
}