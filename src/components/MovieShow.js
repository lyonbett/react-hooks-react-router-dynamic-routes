import React from 'react'
import { useParams } from 'react-router-dom'

function MovieShow({movies}) {
    //call useParams to access the `params` from the URL
    const params= useParams();

  return (
    <div>
        {/* And here we access the `movieId` stored in `params` to render info about selected movie */}
        <h3>{movies[params.movieId].title}</h3>
    </div>
  )
}

export default MovieShow;