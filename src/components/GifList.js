// import React from 'react'

// function GifList(props) {
//     console.log(props);
//   return (
//     <div>
//         {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif" />)}
//     </div>
//   )
// }

// export default GifList;

import React from 'react';

function GifList({ gifs }) {
  return (
    <ul>
      {gifs.map((gif) => (
        <li key={gif.id}>
          <img src={gif.images.original.url} alt={gif.title} />
        </li>
      ))}
    </ul>
  );
}

export default GifList;
