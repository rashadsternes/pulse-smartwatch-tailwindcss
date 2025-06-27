import Navbar from './components/Navbar.jsx';
import HeroSection from './components/Hero.jsx';
import FeatureSection from './components/Features.jsx';
import Workflow from './components/Workflow.jsx';
import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';

function App() {

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt=20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
      </div>
        
    </div>
  )
}

export default App
