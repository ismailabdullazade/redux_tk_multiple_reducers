import { useSelector } from 'react-redux';
import './App.css';
import ChangeColor from './components/ChangeColor';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {

  const color = useSelector(state=>state.theme.value)

  
  return (
    <div style={{color:color}} className="App">
     <Profile/>
     <Login/>
     <ChangeColor/>
    </div>
  );
}

export default App;
