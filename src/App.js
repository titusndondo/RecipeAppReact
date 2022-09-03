import './App.css';
import Header from './Layout/Header/Header';
import Recipes from './pages/Recipes';

function App() {

  return (
    <>
      <Header></Header>
      <div className='container'>
        <div className='col-12'>
          <Recipes></Recipes>
        </div>
      </div>
    </>
  );
}

export default App;
