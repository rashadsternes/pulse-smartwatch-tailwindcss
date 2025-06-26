import Navbar from './components/Navbar.jsx';
import HeroSection from './components/Hero.jsx';
import FeatureSection from './components/Features.jsx';

function App() {

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt=20 px-6">
        <HeroSection />
        <FeatureSection />
      </div>
        
    </div>
  )
}

export default App
