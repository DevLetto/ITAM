import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from "react-router-dom"; 
import Menu from './pages/Menu';
import RegisterAsset from './pages/RegisterAsset';
import ViewAssets from './pages/history/ViewAssets';

const router = createHashRouter([
  {
    path: "/",
    element: <Menu/>
  },
  {
    path: "/register",
    element: <RegisterAsset/>
  },
  {
    path: "/view",
    element: <ViewAssets />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
