import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div>
        <Header/>
        <div id="detail">
          <Outlet />
        </div>
    </div>
  );
}

export default App;
