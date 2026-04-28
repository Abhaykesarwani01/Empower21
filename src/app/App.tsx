import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CorePillars } from './components/CorePillars';
import { CareerHub } from './components/CareerHub';
import { AssuranceProcess } from './components/AssuranceProcess';
import { Testimonials } from './components/Testimonials';
import { ImportantNotice } from './components/ImportantNotice';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <CorePillars />
      <CareerHub />
      <AssuranceProcess />
      <Testimonials />
      <ImportantNotice />
      <Footer />
    </div>
  );
}