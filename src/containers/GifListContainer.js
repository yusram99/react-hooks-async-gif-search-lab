import React, { useState } from 'react';
import GifList from '../components/GifList'; // Correct the path to GifList
import GifSearch from '../components/GifSearch'; // Correct the path to GifSearch

// ... rest of the code remains the same ...


const GIPHY_API_KEY = 'https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3'; // Replace with your Giphy API key

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${GIPHY_API_KEY}&rating=g`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const first3Gifs = data.data.slice(0, 3);
        setGifs(first3Gifs);
      })
      .catch((error) => console.error('Error fetching gifs:', error));
  };

  const handleSubmit = (query) => {
    fetchGifs(query);
  };

  return (
    <div>
      <GifSearch handleSubmit={handleSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
