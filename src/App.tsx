import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import Header1 from './components/mvpblocks/header-1'
import { ThemeProvider, useTheme } from '@modules/auth/context/ThemeProvider';
import LoginPage from '@modules/auth/pages/Login';
import RegisterPage from '@modules/auth/pages/Register';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@ui/sonner';
import OnBoarding from '@modules/user/pages/Onboard';

function App() {
  const { theme } = useTheme()
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider>
        <BrowserRouter>
          <Header1/>
          <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<RegisterPage/>}/>
            <Route path='/onboarding' element={<OnBoarding/>}/>
          </Routes>
        </BrowserRouter>
        <Toaster 
  theme={theme as "light" | "dark" | "system"}
  position="top-right"
  duration={1500}
  visibleToasts={3}
  toastOptions={{
    classNames: {
      toast: "!text-white duration-200",
      description: "!text-white/80",
      actionButton: "!bg-white font-medium",
      closeButton: "!text-white",
      success: "!bg-rose-600 !border-rose-700",
      error: "!bg-red-500 !border-red-500",
    }
  }}
/>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
