import { Route, Routes } from 'react-router-dom';
import Header from './components/Common/Header' 
import Home from './components/Home/Home' 
import Checkout from './components/Product/Checkout';
  
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/checkout' element={ <Checkout/>} />
      
      </Routes>
    </>
  );
}

export default App;
