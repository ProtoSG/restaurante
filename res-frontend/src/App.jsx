import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
function App() {

  return (
   <div className='min-h-dvh bg-bg-100 flex items-center'>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Route>
    </Routes>
   </div>
  )
}

export default App
