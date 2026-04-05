import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'

function App() {

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
