import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MusicPage from './pages/MusicPage';
import MusiucListPage from './pages/MusiucListPage';

function App() {
  console.log("App")


  return (
    <>  
      <NavBar />
      <Route path="/" component={MusiucListPage} exact={true} />
      <Route path="/:url" component={MusicPage} />
    </>
  );
}

export default App;
