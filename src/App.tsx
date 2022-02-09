import { Routes, Route } from 'react-router-dom';
import { MoviesList } from './features/list_movies/components/MoviesList';
import './App.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MoviesList/>} />
    </Routes>
  );
}

export default App;
