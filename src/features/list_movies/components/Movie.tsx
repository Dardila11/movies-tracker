/**
 * Movie Info Card Component.
 */
import { IMovie } from "@/types/types"

const IMG_BASE = 'https://image.tmdb.org/t/p/w500/'

type MovieProps = {
  movie : IMovie
}

export const Movie = ({movie} : MovieProps) => {
  return(
    <div className="relative w-[150px] h-[250px] rounded-md m-1">
      <img className="absolute w-[150px] h-[250px] rounded-md" src={`${IMG_BASE}${movie.poster_path}`} alt={movie.title}/>
      <p className='text-white' key={movie.id}>{movie.title}</p>
    </div>
  )
}

 