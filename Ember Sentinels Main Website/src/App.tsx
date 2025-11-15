import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solution from './pages/Solution';
import Problem from './pages/Problem';
import Documentation from './pages/Documentation';
import Research from './pages/Research';
import TechnicalDrawings from './pages/TechnicalDrawings';
import Founder from './pages/Founder';
import AIDashboard from './pages/AIDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="solution" element={<Solution />} />
        <Route path="problem" element={<Problem />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="documentation/research" element={<Research />} />
        <Route path="documentation/technical-drawings" element={<TechnicalDrawings />} />
        <Route path="ai-dashboard" element={<AIDashboard />} />
        <Route path="founder" element={<Founder />} />
      </Route>
    </Routes>
  );
}

export default App;