import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResumePage from './components/ResumePage';

const About = lazy(() => import('./components/About'));
const Profiles = lazy(() => import('./components/Profiles'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

function Loader() {
  return <div className="section-container py-10 text-sm text-slate-400">Loading section...</div>;
}

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<Loader />}>
        <About />
        <Profiles />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resume" element={<ResumePage />} />
    </Routes>
  );
}
