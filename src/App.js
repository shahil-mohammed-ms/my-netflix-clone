
import './App.css';
import './urls'
import Banner   from './Components/Banner/Banner';
import NavBar   from './Components/NavBar/NavBar';
import RowPost  from './Components/RowPost/RowPost';
import { action, originals,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={ComedyMovies} title='Comedy' isSmall/>
      <RowPost url={HorrorMovies} title='Horror' isSmall/>
      <RowPost url={RomanceMovies} title='Romance' isSmall/>
      <RowPost url={Documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
