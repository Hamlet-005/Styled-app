import { Navigate, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import { Brutalist } from './pages/Brutalist/Brutalist'
import { Glassmorphism } from './pages/Glassmorphism/Glassmorphism'
import { Luxury } from './pages/Luxury/Luxury'
import { Minimalist } from './pages/Minimalist/Minimalist'
import { Neumorphism } from './pages/Neumorphism/Neumorphism'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigate to="/minimalist" replace />} />
        <Route path="/minimalist" element={<Minimalist />} />
        <Route path="/glassmorphism" element={<Glassmorphism />} />
        <Route path="/neumorphism" element={<Neumorphism />} />
        <Route path="/brutalist" element={<Brutalist />} />
        <Route path="/luxury" element={<Luxury />} />
        <Route path="*" element={<Navigate to="/minimalist" replace />} />
      </Routes>
    </>
  )
}
