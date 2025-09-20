import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import Header1 from './components/mvpblocks/header-1'
import LoginPage from './pages/Login';
import { ThemeProvider } from './context/ThemeProvider';
import RegisterPage from './pages/Register';

function App() {

  return (
    <ThemeProvider>
    <BrowserRouter>
      <Header1/>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
