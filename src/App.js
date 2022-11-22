
import { Container } from '@material-ui/core';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import SimpleBottomNavigation from "./component/MainNav"
import Movie from './component/Pages/Movies/Movie';
import Search from './component/Pages/Search/Search';
import Series from './component/Pages/Series/Series';
import Tranding from './component/Pages/Tranding/Tranding';
function App() {
  return (
  
  <>
     <Header/>

     <div className="App">
        <Container>
        <Routes>
          <Route path="/" element={<Tranding/>} exact/> 
          <Route path="/movies" element={<Movie/>}/>
          <Route path="/series" element={<Series/>}/>
          <Route path="/search" element={<Search/>}/>
          </Routes>
        </Container>
    </div>
    <SimpleBottomNavigation/>
    </>
  );
}

export default App;
