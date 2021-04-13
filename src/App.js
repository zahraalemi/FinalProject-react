import './App.css';
import Menu from './component/menu/Menu';
import {getUsers } from './component/wallet';
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getUsers());
    }, [dispatch]); 

  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
      </header>
    </div>
  );
}

export default App;
