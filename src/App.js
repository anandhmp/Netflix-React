import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,comedy,horror,romance,documentary} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Orginals"/>
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={documentary} title="Documentary" isSmall />
    </div>
  );
}

export default App;
