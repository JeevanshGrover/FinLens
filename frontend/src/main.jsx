import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux"
import { store } from './store/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element= {<App />}>
    
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <RouterProvider router = {router} />
  </Provider>,
)
