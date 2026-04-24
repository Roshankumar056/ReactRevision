import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"
import { storeRTK } from './RTK/storeRTK.js'

createRoot(document.getElementById('root')).render(
<Provider store={storeRTK}>
  <App/>
</Provider>
)
