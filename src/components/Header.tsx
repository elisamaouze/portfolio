import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('projets')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('accueil')}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('projets')}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Projets
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}