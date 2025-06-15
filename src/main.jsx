import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './Inicio.jsx';
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Inicio/>
    </BrowserRouter>
)
