import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ProgramPage from './components/ProgramPage.jsx'
import Counselor from './pages/Counselor.jsx'
import Leadership from './pages/Leadership.jsx'
import Graduation from './pages/Graduation.jsx'
import ProgramSequences from './pages/ProgramSequences.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs/:slug" element={<ProgramPage />} />
        <Route path="/counselor" element={<Counselor />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/graduation" element={<Graduation />} />
        <Route path="/program-sequences" element={<ProgramSequences />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
