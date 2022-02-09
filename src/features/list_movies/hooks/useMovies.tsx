import { useState, useEffect } from "react"
import { IMovie } from "@/types/types"

const API_KEY = 'e39d2c408b20f35e1f0304dfd6a8c265'
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`


const useMovies = () => {
  const [movies, setMovies] = useState<IMovie[] | [] >([])

  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true)
      const res = await fetch(URL)
      if(res.ok) {
        const data = await res.json()
        setMovies(data.results)
      } else {
        console.log(res)
        setError(res.status.toString())
      }
      setIsLoading(false)
    }
    fetchMovies()
  }, [])

  return {movies, isLoading, error}
}

export default useMovies