import React from 'react'
import HeroImage from '../src/Images/hero-img.png'
import Search from './components/Search'
import Spinner from './components/Spinner'
import { useState, useEffect } from 'react'
import MovieCard from './components/MovieCard'

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
}
};


const App = () => {


  const [searchTerm, setSearchTerm] = useState('');
  const [submitSearch, setSubmitSearch] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const [movielist, setMovielist] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` 
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      const response = await fetch(endpoint, API_OPTIONS);
      
      if (!response.ok) {
        throw  new Error(`Failed to fetch movies: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.Response === 'False') {
        setErrorMessage(data.Error || 'An error occurred while fetching movies.');
        setMovielist([]);
        return;
      }
      setMovielist(data.results || []);

    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Failed to fetch movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  } 

  useEffect(() => {
    fetchMovies(submitSearch);
  },[submitSearch])
  return (
    <main>
      <div className ="pattern">
        <div className='wrapper'>
          <header>
            <img src ={HeroImage} alt="Hero Banner" />
            <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without Hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSubmitSearch={setSubmitSearch}/>
          </header>

          <section className='all-movies'>

            <h2 className='mt-10 text-white' >All Movies</h2>
            
            {  isLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className='text-red-500'>{errorMessage}</p>
            ) : (
              <ul>
                {movielist.map((movie) =>(
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </ul>
            )}
          </section>

        </div>

      </div>
    </main>
  )
}

export default App