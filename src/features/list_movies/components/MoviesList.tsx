import useMovies from "../hooks/useMovies"
import { Movie } from "./Movie"

export const MoviesList = () => {
  const { movies, isLoading, error } = useMovies()
  return (
    <div className="text-center">
      <h1 className="text-2xl text-white font-semibold">Movies Tracker</h1>
      <div className='flex flex-wrap justify-center'>
        {isLoading ? <p className='text-white'>fetching data</p> :
          error != null ? <p className='text-white'> {error} </p> :
            movies.map(movie => <Movie movie={movie} />)}
      </div>
    </div>
  )
}