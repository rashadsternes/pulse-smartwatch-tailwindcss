import Navbar from './components/Navbar.jsx';
import HeroSection from './components/Hero.jsx';


function App() {

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt=20 px-6">
        <HeroSection />
      </div>
        
    </div>
  )
}

export default App
