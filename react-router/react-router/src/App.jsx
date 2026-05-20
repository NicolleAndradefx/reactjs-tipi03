import './App.css'

import { Outlet } from 'react-router-dom';

//Link de navegação entre páginas
import Navbar from './components/navbar';

const App = () => {
  return (
    <div>
      <>
        <div className="App">
          <Navbar />
            <Outlet />
          <p>Footer</p>
        </div>
      </>
    </div>
  )
}

export default App