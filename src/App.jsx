import Navbar from './components/Navbar.jsx';
import Hero3D from './components/Hero3D.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import CTASection from './components/CTASection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero3D />
        <FeatureGrid />
        <CTASection />
      </main>
    </div>
  );
}

export default App;
