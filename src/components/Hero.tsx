import { ArrowDown, Code2, Palette, Rocket } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Code2 size={48} className="text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-slide-up">
          Développeur Créatif
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
          Passionné par la création d'expériences numériques exceptionnelles. 
          Je transforme vos idées en applications web modernes et performantes.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up animation-delay-400">
          <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
            <Code2 size={20} className="text-blue-600" />
            <span className="text-gray-700">Frontend</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
            <Palette size={20} className="text-purple-600" />
            <span className="text-gray-700">UI/UX</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
            <Rocket size={20} className="text-green-600" />
            <span className="text-gray-700">Performance</span>
          </div>
        </div>

        <button
          onClick={scrollToProjects}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-slide-up animation-delay-600"
        >
          Découvrir mes projets
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
}