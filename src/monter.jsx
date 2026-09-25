// Point de montage commun aux différentes pages (accueil, CGU, confidentialité, 404)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/ubuntu/400.css'
import '@fontsource/ubuntu/700.css'
import '@fontsource/ubuntu/400-italic.css'
import '@fontsource-variable/raleway'
import './index.css'

export const monter = (element) =>
  createRoot(document.getElementById('root')).render(
    <StrictMode>{element}</StrictMode>,
  )
