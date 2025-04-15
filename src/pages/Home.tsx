import { Link } from 'react-router-dom';
import Card from '../components/ui/card';
import Button from '../components/ui/button';
import HeroSectionFullScreen from '../components/HeroSectionFullScreen';
import '../styles/home.css';

export default function Home(props: { path?: string }) {
  return (
    <div id="home">
        <HeroSectionFullScreen />
    <div className="home-container">
      {/* Hero Section */}
      


      {/* Preview Section */}
      <PreviewSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Specialized Features Section */}
      <FactionWarfareSection />

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Bottom CTA Section */}
      <BottomCTA />
    </div>
    </div>
  );
}

/* Sub-components */

// Preview Section
function PreviewSection() {
  return (
    <div className="preview-container">
      <div className="preview-image">
        <div className="placeholder-preview">
          <span>3D Defense Preview</span>
        </div>
      </div>
    </div>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      title: 'Defensive Structure Generation',
      description: 'Create obsidian bunkers, trapped walls, and TNT-resistant designs',
      icon: '🏰',
    },
    {
      title: 'Vulnerability Analysis',
      description: 'Identify weak points in your defenses against TNT cannons and withers',
      icon: '🔍',
    },
    {
      title: 'Raid Simulation',
      description: 'Test your defenses against common faction attack patterns',
      icon: '⚔️',
    },
    {
      title: '2b2t-Ready Designs',
      description: 'Templates tailored for anarchy server environments',
      icon: '🌐',
    },
    {
      title: 'Interactive 3D Preview',
      description: 'Examine and modify defenses from all angles',
      icon: '🔄',
    },
  ];

  return (
    <div className="features-section">
      <h2>🛡️ Key Features</h2>
      <div className="feature-list">
        {features.map((feature) => (
          <Card key={feature.title} title={`${feature.icon} ${feature.title}`}>
            <p>{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Specialized Faction Warfare Section
function FactionWarfareSection() {
  const specializedFeatures = [
    { title: 'Wither-Proof Rooms', description: 'Protect valuables from wither destruction with specialized chamber designs' },
    { title: 'Water/Lava Curtain Systems', description: 'Advanced fluid-based defense designs that slow down raiders' },
    { title: 'TNT Cannon Resistant Walls', description: 'Optimize walls for raid prevention with blast-resistant patterns' },
    { title: 'Trap Design', description: 'Catch raiders with elaborate mechanisms and redstone contraptions' },
    { title: 'Resource Optimization', description: 'Maximize protection using minimal resources for survival gameplay' },
  ];

  return (
    <div className="features-section">
      <h2>🔥 Specialized for Faction Warfare</h2>
      <div className="feature-list">
        {specializedFeatures.map((item) => (
          <Card key={item.title} title={item.title}>
            <p>{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Philosophy Section
function PhilosophySection() {
  const philosophyPrinciples = [
    { title: 'Keep unwanted players out', description: 'With obsidian layers, fluid curtains, and traps' },
    { title: 'Allow allies in', description: 'Secret redstone entrances, hidden paths, and secure access methods' },
    { title: 'Protect valuables', description: 'Secure vaults, hidden chambers, and decoy storage systems' },
    { title: 'Survive attacks', description: 'TNT, wither, and other exploit-resilient layouts designed for longevity' },
  ];

  return (
    <div className="philosophy-section">
      <h2>🏠 Defense Philosophy</h2>
      <ol className="feature-list">
        {philosophyPrinciples.map((principle) => (
          <li key={principle.title}>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Built my first wither-proof vault and it survived a raid from the biggest faction on our server.',
      author: 'DiamondDefender92',
    },
    {
      quote: 'The 3D preview saved me tons of obsidian by optimizing my wall design before I built it.',
      author: '2b2tSurvivalist',
    },
  ];

  return (
    <div className="features-section">
      <h2>What Players Are Saying</h2>
      <div className="feature-list">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <p>"{testimonial.quote}"</p>
            <span className="testimonial-author">- {testimonial.author}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Bottom CTA Section
function BottomCTA() {
  return (
    <section className="bottom-cta">
      <h2>Ready to build your ultimate defense?</h2>
    </section>
  );
}
