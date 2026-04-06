import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
const About = lazy(() =>
import('./components/About').then((m) => ({
  default: m.About
}))
);
const Technologies = lazy(() =>
import('./components/Technologies').then((m) => ({
  default: m.Technologies
}))
);
const Projects = lazy(() =>
import('./components/Projects').then((m) => ({
  default: m.Projects
}))
);
const Contact = lazy(() =>
import('./components/Contact').then((m) => ({
  default: m.Contact
}))
);
function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-8 h-8 border-2 border-muted border-t-accent rounded-full animate-spin" />
    </div>);

}
export function App() {
  return (
    <div className="min-h-screen bg-background text-text selection:bg-accent/30 selection:text-accent">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Technologies />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </div>);

}