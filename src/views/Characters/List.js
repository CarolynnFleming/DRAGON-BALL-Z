import { loadPartialConfig } from "@babel/core";
import { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom'

export default function List() {
    const history = useHistory();
    const location = useLocation();
    const producer = new URLSearchParams(location.search).get('producer') ?? 'all';
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

const handleProducerChange = 
}